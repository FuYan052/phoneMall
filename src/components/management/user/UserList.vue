<template>
  <div class="userlist">
    <a-card title="用户列表">
    <a href="#" slot="extra">more</a>
    <p>
      <a-table :columns="columns" :dataSource="datap" bordered>
        <template v-for="col in ['number', 'name', 'phoneNum','address', 'createAt', 'operation']" :slot="col" slot-scope="text, record, index">
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
    </p>
  </a-card>
    
  </div>
</template>

<script>
const columns = [{
  title: '用户编号',
  dataIndex: 'key',
  width: '10%',
  scopedSlots: { customRender: 'key' },
},{
  title: '用户姓名',
  dataIndex: 'name',
  width: '15%',
  scopedSlots: { customRender: 'name' },
},{
  title: '联系电话',
  dataIndex: 'telephone',
  width: '15%',
  scopedSlots: { customRender: 'telephone' },
}, {
  title: '详细住址',
  dataIndex: 'address',
  width: '30%',
  scopedSlots: { customRender: 'address' },
},{
  title: '注册时间',
  dataIndex: 'createAt',
  width: '15%',
  scopedSlots: { customRender: 'createAt' },
},  {
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
  name: 'UserList',
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      datap:[],
      columns,
    }
  },
  created() {
    this.$http.getUserList().then(resp => {
      console.log(resp)
      this.datap = resp.data.data
      console.log(this.datap)
    })
    console.log(this.data)
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

<style lang='scss' scoped>
.userlist {
  .editable-row-operations a {
  margin-right: 8px;
  }
}

</style>
