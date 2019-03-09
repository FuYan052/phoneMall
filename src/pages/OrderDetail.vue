<template>
  <h1>订单页</h1>
</template>

<script>
export default {
  name: 'OrderDetail',
  data() {
    return {

    }
  },
  created() {
    console.log(this.$route.params.id)
  }
}
</script>

<style>

</style>
