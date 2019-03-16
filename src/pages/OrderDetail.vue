<template>
  <div class="order">
    <div class="headerTitle">
      核对订单信息
    </div>
    <div class="address">
      <h4>收货人信息</h4>
      <div class="toAdd">
        <a-icon class="addIcon" @click="showModal" type="plus-circle" />
        <p>添加新地址</p>
        <!-- 添加地址模态框 -->
        <a-modal
          title="新建收获地址"
          v-model="visible"
          :footer="null"       >
        <a-form
          :form="form"
          @submit="handleSubmit"
        >
          <a-form-item
            label="收货人"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 25 }"
          >
            <a-input
              v-decorator="[
                '收货人',
                {rules: [{ required: true, message: '请输入收货人姓名!' }]}
              ]"
            />
          </a-form-item>
          <a-form-item
            label="手机号码"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 25 }"
          >
            <a-input
              v-decorator="[
                '手机号码',
                {rules: [{ required: true, message: '请输入联系电话!' }]}
              ]"
            />
          </a-form-item>
          <a-form-item
            label="收货地区"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 20 }"
          >
            <region-picker
              :province="province"
              :city="city"
              :district="district"
              @onchange="change">
            </region-picker>
          </a-form-item>
          <a-form-item
            label="详细地址"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 25 }"
          >
            <a-input
              v-decorator="[
                '详细地址',
                {rules: [{ required: true, message: '请输入详细地址!' }]}
              ]"
            />
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 12, offset: 8 }"
          >
            <a-button
              type="primary"
              html-type="submit"
            >
              保存
            </a-button>
          </a-form-item>
        </a-form>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import RegionPicker from "@/components/order/RegionPicker";

export default {
  name: 'OrderDetail',
  data() {
    return {
      visible: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
  },
  created() {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang='scss' scoped>
  .order {
    background: #ececeb;
    height: 100%;
    .headerTitle {
      width: 88%;
      background: #fff;
      height: 70px;
      margin: 0 auto;
      text-align: center;
      line-height: 70px;
      font-size: 22px;
      font-weight: bold;
    }
    .address {
      width: 88%;
      height: 280px;
      margin: 0 auto;
      margin-top: 20px;
      background: #fff;
      padding: 35px;
      h4 {
        font-size: 18px;
        color: #333333;
      }
      .toAdd {
        width: 260px;
        height: 150px;
        border: 1px solid #ccc;
        margin-top: 30px;
        position: relative;
        .addIcon {
          position: absolute;
          top: 45px;
          left: 115px;
          font-size: 32px;
        }
        p {
          text-align: center;
          margin-top: 90px;
        }
      }
    }
  }

</style>
