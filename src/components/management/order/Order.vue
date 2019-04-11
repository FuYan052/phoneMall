<template>
  <div class="order">
    <a-card title="订单列表">
      <download-excel
        class = "export-excel-wrapper"
        :data = "json_data"
        :fields = "json_fields"
        name = "filename.xls">
        <a-button type="primary">导出EXCEL</a-button>
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <!-- <el-button type="primary" size="small">导出EXCEL</el-button> -->
    </download-excel>
    </a-card>
    <a-table :columns="columns" :dataSource="data" bordered>
    <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="data.length"
          title="确定删除?"
          @confirm="() => onDelete(record.id)">
          <a href="javascript:;"><a-button type="danger" icon="delete">删除</a-button></a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [{
  title: '订单编号',
  dataIndex: 'id',
  width: '10%',
  scopedSlots: { customRender: 'id' },
}, {
  title: '用户编号',
  dataIndex: 'userId',
  width: '7%',
  scopedSlots: { customRender: 'userId' },
}, {
  title: '产品编号',
  dataIndex: 'productId',
  width: '7%',
  scopedSlots: { customRender: 'productId' },
},{
  title: '产品名称',
  dataIndex: 'productName',
  width: '7%',
  scopedSlots: { customRender: 'productName' },
}, {
  title: '颜色',
  dataIndex: 'color',
  width: '7%',
  scopedSlots: { customRender: 'color' },
}, {
  title: '版本',
  dataIndex: 'version',
  width: '12%',
  scopedSlots: { customRender: 'version' },
}, {
  title: '单价',
  dataIndex: 'price',
  width: '7%',
  scopedSlots: { customRender: 'price' },
}, {
  title: '购买数量',
  dataIndex: 'productCount',
  width: '7%',
  scopedSlots: { customRender: 'productCount' },
}, {
  title: '合计',
  dataIndex: 'sum',
  width: '10%',
  scopedSlots: { customRender: 'sum' },
},{
  title: '下单时间',
  dataIndex: 'date',
  width: '12%',
  scopedSlots: { customRender: 'date' },
}]

// const data = []
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   })
// }
export default {
  name: 'Order',
   data () {
    // this.cacheData = data.map(item => ({ ...item }))
    return {
      data: [],
      columns,
      totalPrice: ''
    }
  },
  created() {
    const userId = 10
    this.$http.getOrdersList().then(resp => {
      console.log(resp)
      this.data = resp.data
      console.log(this.data)
      this.data.forEach(item => {
        const _totalPrice = item.productCount * item.price
        item.totalPrice = _totalPrice
      })
      console.log(this.data)
    })
  },
  methods: {
    // handleChange (value, key, column) {
    //   const newData = [...this.data]
    //   const target = newData.filter(item => key === item.key)[0]
    //   if (target) {
    //     target[column] = value
    //     this.data = newData
    //   }
    // },
    onDelete (_id) {
      const data = [...this.data]
      this.data = data.filter(item => item.id !== _id)

    },
    save (id) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
      }
    },
    cancel (id) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    },
  },
}
</script>

<style>

</style>
