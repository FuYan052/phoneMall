<template>
  <div class="productColor">
    <a-card title="商品颜色">
      <a href="#" slot="extra">more</a>
      <!-- 商品颜色 -->
      <hr/>

      <p>
        <a-form
          :form="form"
          @submit="handleColorSubmit"
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
            label="颜色编号"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '颜色编号',
                {rules: [{ required: true, message: '请输入颜色编号!' }]}
              ]"
                placeholder="请输入颜色编号"
            />
          </a-form-item> -->
          <a-form-item
            label="颜色名称"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '颜色名称',
                {rules: [{ required: true, message: '请输入商品名称!' }]}
              ]"
              placeholder="请输入商品名称"
            />
          </a-form-item>
          <a-form-item
            label="图片路径"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '图片路径',
                {rules: [{ required: true, message: '请输入图片路径!' }]}
              ]"
              placeholder="请输入图片路径"
            />
          </a-form-item>
          <!-- <a-form-item
            v-bind="formItemLayout"
            label="图片路径"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            extra=""
          >
            <a-upload
            v-decorator="['img', {
          getValueFromEvent: normFile,
        }]"
              action="http://192.168.43.204:8001/phone/uploadImg"
              listType="picture"
              id="upload-list-inline"
            >
              <a-button>
                <a-icon type="upload" /> 上传图片
              </a-button>
            </a-upload>
          </a-form-item>  -->
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
  name: 'ProductColor',
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
    // handleSubmit (e) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
    //       console.log('Received values of form: ', values);
    //       this.imgUrl = values.img[0]
    //       console.log(this.imgUrl)
    //       let params = {
    //         productId: values.商品编号,
    //         productSize: values.商品单价,
    //         productName: values.商品名称,
    //         productDescribe: values.商品描述,
    //         // version: values.商品版本,
    //         // colors: values.商品颜色,
    //         isSelling: values.销售状态,
    //         file: this.imgUrl.name,            
            
    //         }
    //         console.log(params)
    //         let config = {
    //                       headers: {
    //                         'Content-Type': 'multipart/form-data'
    //                       }
    //                     }
    //       this.$http.addPro(params).then(resp => {
    //       console.log(resp)
    //   })
    //     }
    //   });
      
    // },
    handleColorSubmit(e) {
       e.preventDefault();
       e.stopPropagation();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received color values of form: ', values);
          const params = {
            productId: values.商品编号,
            colorName: values.颜色名称,
            colorImgPath: values.颜色编号,
          }
          this.$http.addColor(params).then(resp => {
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
