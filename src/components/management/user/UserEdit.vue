<template>
  <div class="userEdit">
    <a-card title="编辑用户">
      <a href="#" slot="extra">more</a>
      <p>
        <a-form
          :form="form"
          @submit="handleSubmit"
        >
          <a-form-item
            label="用户姓名"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '用户姓名',
                {rules: [{ required: true, message: '请输入用户姓名!' }]}
              ]"
                placeholder="请输入用户姓名"
            />
          </a-form-item>
          <a-form-item
            label="联系电话"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '联系电话',
                {rules: [{ required: true, message: '请输入联系电话!' }]}
              ]"
              placeholder="请输入联系电话"
            />
          </a-form-item>
          <a-form-item
            label="详细住址"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-input
              v-decorator="[
                '详细住址',
                {rules: [{ required: true, message: '请输入详细住址!' }]}
              ]"
              placeholder="请输入详细住址"
            />
          </a-form-item>
          <a-form-item
            v-bind="formItemLayout"
            label="注册时间"
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
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </p>
  </a-card>
  </div>
</template>

<script>
export default {  
  name: 'UserEdit',
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
    handleSelectChange (value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
}
</script>

<style>

</style>
