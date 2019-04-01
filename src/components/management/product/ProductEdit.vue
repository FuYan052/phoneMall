<template>
  <div class="userEdit">
    <a-card title="编辑商品">
      <a href="#" slot="extra">more</a>
      <p>
        <a-form
          :form="form"
          @submit="handleSubmit"
        >
          <a-form-item
            label="商品编号"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '商品编号',
                {rules: [{ required: true, message: '请输入用户姓名!' }]}
              ]"
                placeholder="请输入用户姓名"
            />
          </a-form-item>
          <a-form-item
            label="商品名称"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '商品名称',
                {rules: [{ required: true, message: '请输入商品名称!' }]}
              ]"
              placeholder="请输入商品名称"
            />
          </a-form-item>
          <a-form-item
            label="颜色一"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '颜色一',
                {rules: [{ required: true, message: '请输入商品颜色!' }]}
              ]"
              placeholder="请输入商品颜色"
            />
          </a-form-item>
          <a-form-item
            label="颜色二"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '颜色二',
                {rules: [{ required: true, message: '请输入商品颜色!' }]}
              ]"
              placeholder="请输入商品颜色"
            />
          </a-form-item>
          <a-form-item
            label="颜色三"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '颜色三',
                {rules: [{ required: true, message: '请输入商品颜色!' }]}
              ]"
              placeholder="请输入商品颜色"
            />
          </a-form-item>
          <a-form-item
            label="版本一"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '版本一',
                {rules: [{ required: true, message: '请输入商品版本!' }]}
              ]"
              placeholder="请输入商品版本"
            />
          </a-form-item>
          <a-form-item
            label="版本二"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '版本二',
                {rules: [{ required: true, message: '请输入商品版本!' }]}
              ]"
              placeholder="请输入商品版本"
            />
          </a-form-item>
          <a-form-item
            label="版本三"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '版本三',
                {rules: [{ required: true, message: '请输入商品版本!' }]}
              ]"
              placeholder="请输入商品版本"
            />
          </a-form-item>
          <a-form-item
            v-bind="formItemLayout"
            label="图片路径"
            extra=""
          >
            <a-upload
              v-decorator="['图片路径',
              {rules: [{ required: true, message: '请输入商品版本!' }]},
               {
                valuePropName: 'fileList',
                getValueFromEvent: normFile,
              }]"
              name="logo"
              action="http://192.168.137.45:8001/phone/uploadImg"
              list-type="picture"
            >
              <a-button>
                <a-icon type="upload" /> 选择图片
              </a-button>
            </a-upload>
          </a-form-item>
          <a-form-item
            v-bind="formItemLayout"
            label="注册时间"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-date-picker v-decorator="['date-picker', config]" />
          </a-form-item>
         
          <a-form-item
            :wrapper-col="{ span: 12, offset: 7 }"
          >
            <a-button
              type="primary"
              html-type="submit"
            >
              保存
            </a-button>
          </a-form-item>
        </a-form>
      </p>
  </a-card>
  </div>
</template>

<script>
export default {  
  name: 'ProductEdit',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      config: {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      },
      rangeConfig: {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }],
      },
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    
    handleSubmit (e) {
      e.preventDefault();
      const values = {
        ...fieldsValue,
          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        };
        console.log('Received values of form: ', values);
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
         
      });
    },
    normFile  (e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
}
</script>

<style lang='scss' scoped>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
