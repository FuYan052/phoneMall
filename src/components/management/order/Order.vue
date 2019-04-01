<template>
  <div class="order">
    <a-card title="订单列表"></a-card>
    <a-table :columns="columns" :dataSource="data" bordered>
    <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record, index">
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>{{text}}</template>
      </div>
    </template>
    <template slot="operation" slot-scope="text, record, index">
      <div class='editable-row-operations'>
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title='Sure to cancel?' @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="() => edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
  </div>
</template>

<script>
const columns = [{
  title: '订单编号',
  dataIndex: 'id',
  width: '15%',
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
  dataIndex: 'product_name',
  width: '7%',
  scopedSlots: { customRender: 'product_name' },
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
  dataIndex: 'product_price',
  width: '7%',
  scopedSlots: { customRender: 'product_price' },
}, {
  title: '购买数量',
  dataIndex: 'productCount',
  width: '7%',
  scopedSlots: { customRender: 'productCount' },
}, {
  title: '合计',
  dataIndex: 'total',
  width: '10%',
  scopedSlots: { customRender: 'total' },
},{
  title: '下单时间',
  dataIndex: 'create_time',
  width: '12%',
  scopedSlots: { customRender: 'create_time' },
},{
  title: '操作',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  })
}
export default {
  name: 'Order',
   data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      columns,
    }
  },
  created() {
    const userId = 10
    this.$http.getOrders(userId).then(resp => {
      console.log(resp)
      this.data = resp.data
    })
  },
  methods: {
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
      }
    },
    cancel (key) {
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
