<template>
  <div id="address">
  <region-picker
  :province.sync="address.province"
  :city.sync="address.city"
  :district.sync="address.district">
  <span slot="province">省份</span>
  <span slot="city">城市</span>
  <span slot="district">地区</span>
</region-picker>
</div>
</template>

<script>


export default {
  name: "RegionPicker",
  data () {
    return {
      province: '广东', // you can set initial value or not.
      city: 440100, // by code or name.
      district: ''
    }
  },
}
</script>

<style lang='scss' scoped>
  

</style>
