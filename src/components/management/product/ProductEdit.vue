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
                { initialValue: id },
                {rules: [{ required: true, message: '请输入商品编号!' }]}
              ]"
                placeholder="请输入商品编号"
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
                { initialValue: name },
                {rules: [{ required: true, message: '请输入商品名称!' }]}
              ]"
              placeholder="请输入商品名称"
            />
          </a-form-item>
          <a-form-item
            label="商品描述"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '商品描述',
                { initialValue: describe },
                {rules: [{ required: true, message: '请输入商品描述!' }]}
              ]"
              placeholder="请输入商品描述"
            />
          </a-form-item>
          <a-form-item
            label="商品单价"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '商品单价',
                { initialValue: price },
                {rules: [{ required: true, message: '请输入商品单价!' }]}
              ]"
              placeholder="请输入商品单价"
            />
          </a-form-item>
          <a-form-item
            label="销售状态"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '销售状态',
                { initialValue: status },
                {rules: [{ required: true, message: '请输入销售状态!' }]}
              ]"
              placeholder="请输入销售状态"
            />
          </a-form-item>
          <a-form-item
            label="商品路径"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '商品路径',
                { initialValue: path },
                {rules: [{ required: true, message: '请输入商品路径!' }]}
              ]"
              placeholder="请输入商品路径"
            />
          </a-form-item>
          <!-- <a-form-item
            label="图片路径"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            extra=""
          >
            <a-upload
              action="http://192.168.43.204:8001/phone/uploadProImgs"
              listType="picture"
              class="upload-list-inline"
            >
              <a-button>
                <a-icon type="upload" /> 上传图片
              </a-button>
            </a-upload>
          </a-form-item>  -->
          <!-- <a-form-item
            v-bind="formItemLayout"
            label="商品图片"
            extra=""
          >
            <a-upload
              v-decorator="['upload', {
                valuePropName: 'fileList',
                getValueFromEvent: normFile,
              }]"
              name="pic"
              action="http://192.168.43.204:8001/phone/uploadImg"
              list-type="picture"
            >
              <a-button>
                <a-icon type="upload" /> 点击上传
              </a-button>
            </a-upload>
          </a-form-item> -->
          <!-- <a-form-item
            label="商品图片"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
            class="imgInput"
            type="file"
              v-decorator="[
                '商品图片',
                {rules: [{ required: true, message: '请选择图片!' }]}
              ]"
              placeholder="请选择图片"
            />
          </a-form-item> -->
          <a-form-item
            :wrapper-col="{ span: 12, offset: 6 }"
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
      target: '',
      id: '',
      name: '',
      describe: '',
      price: '',
      status: '',
      path: '',
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
  created() {
    this.target = this.$route.query
    this.id = this.target.productId
    this.name = this.target.productName
    this.describe = this.target.productDescribe
    this.price = this.target.productSize
    this.status = this.target.sellPoint
    this.path = this.target.imgUrl
    console.log(this.target)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const params = {
            productId: values.商品编号,
            productName: values.商品名称,
            productDescribe: values.商品描述,
            productSize: values.商品单价,
            sellPoint: values.销售状态,
            imgUrl: values.商品路径,
          }
          console.log(params)
          this.$http.updatePro(params).then(resp => {
          console.log(resp)
          if(resp.status === 200){
            alert("修改成功！")
          }
          })
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
.userEdit {
  #components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
.imgInput {

}
}

</style>
