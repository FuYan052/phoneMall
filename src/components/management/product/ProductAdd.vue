<template>
  <div class="productAdd">
    <a-card title="上新商品">
      <a href="#" slot="extra">more</a>
      <!-- 商品信息 -->
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
                {rules: [{ required: true, message: '请输入商品编号!' }]}
              ]"
                placeholder="请输入商品编号"
            />
          </a-form-item>
          <a-form-item
            label="品牌编号"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '品牌编号',
                {rules: [{ required: true, message: '请输入品牌编号!' }]}
              ]"
                placeholder="请输入品牌编号"
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
            label="商品描述"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '商品描述',
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
                {rules: [{ required: true, message: '请输入商品路径!' }]}
              ]"
              placeholder="请输入商品路径"
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
  name: 'ProductAdd',
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
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const params = {
            productId: values.商品编号,
            brandId: values.品牌编号,
            productSize: values.商品单价,
            productName: values.商品名称,
            productDescribe: values.商品描述,
            isSelling: values.销售状态,
            imgUrl: values.商品路径,            
            
            }
          console.log(params)
          this.$http.addPro(params).then(resp => {
          console.log(resp)
          })
        }
      });
      
    },
    handleColorSubmit(e) {
       e.preventDefault();
       e.stopPropagation();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received color values of form: ', values);
          const params = {
            productId: values.商品编号,
            versionName: values.颜色,
            versionPrice: values.颜色编号,

          }
          console.log(params)
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
