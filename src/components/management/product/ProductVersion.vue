<template>
  <div class="productVersion">
    <a-card title="商品版本">
      <a href="#" slot="extra">more</a>
      <!-- 商品颜色 -->
      <hr/>

      <p>
        <a-form
          :form="form"
          @submit="handleVersionSubmit"
        >
        <a-form-item
            label="商品编号"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '商品编号',
                {rules: [{ required: true, message: '请输入商品编号!' }]}
              ]"
                placeholder="请输入商品编号"
            />
          </a-form-item>
          <!-- <a-form-item
            label="版本编号"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '版本编号',
                {rules: [{ required: true, message: '请输入版本编号!' }]}
              ]"
                placeholder="请输入版本编号"
            />
          </a-form-item> -->
          <a-form-item
            label="版本名称"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '版本名称',
                {rules: [{ required: true, message: '请输入版本名称!' }]}
              ]"
              placeholder="请输入版本名称"
            />
          </a-form-item>
          <a-form-item
            label="版本价格"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '版本价格',
                {rules: [{ required: true, message: '请输入版本价格!' }]}
              ]"
              placeholder="请输入版本价格"
            />
          </a-form-item>
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
  name: 'ProductVersion',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      imgUrl: '',
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
    handleVersionSubmit(e) {
       e.preventDefault();
       e.stopPropagation();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received color values of form: ', values);
          const params = {
            productId: values.商品编号,
            versionName: values.版本名称,
            versionPrice: values.版本价格,

          }
          this.$http.addVersion(params).then(resp => {
          console.log(resp)
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
  // uploadImg() {
  //   const file = this.imgUrl
  //   this.$http.uploadProImg(file).then(resp => {
  //     console.log(resp)
  //   })
  // }
}
</script>

<style lang='scss' scoped>
.productAdd {
  #upload-list-inline {
    width: 300px;
  }
  .ant-upload-list .ant-upload-list-picture{
    width: 300px;
  }
  #components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
.imgInput {
  // width: 250px;
  height: 50px;
}
}

</style>
