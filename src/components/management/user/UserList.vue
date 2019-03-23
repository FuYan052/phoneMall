<template>
  <div class="userlist">
    <a-card title="用户列表">
    <a href="#" slot="extra">更多</a>
    <p>
      <a-table :columns="columns" :dataSource="data" bordered>
        <template v-for="col in ['user_id', 'user_name', 'phone_num','address', 'createat', 'operation']" :slot="col" slot-scope="text, record, index">
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.user_id, col)"
            />
            <template v-else>{{text}}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <div class='editable-row-operations'>
            <span v-if="record.editable">
              <a @click="() => save(record.user_id)">保存</a>
              <a-popconfirm title='确定取消?' @confirm="() => cancel(record.user_id)">
                <a>取消</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="() => edit(record.user_id)">编辑</a>
            </span>
              <!-- <a-popconfirm
                v-if="dataSource.length"
                title="确认删除?"
                @confirm="() => onDelete(record.user_id)">
                <a href="javascript:;">删除</a>
              </a-popconfirm> -->
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
  dataIndex: 'user_id',
  width: '10%',
  scopedSlots: { customRender: 'user_id' },
},{
  title: '用户姓名',
  dataIndex: 'user_name',
  width: '15%',
  scopedSlots: { customRender: 'user_name' },
},{
  title: '联系电话',
  dataIndex: 'phone_num',
  width: '15%',
  scopedSlots: { customRender: 'phone_num' },
}, {
  title: '详细住址',
  dataIndex: 'address',
  width: '30%',
  scopedSlots: { customRender: 'address' },
},{
  title: '注册时间',
  dataIndex: 'createat',
  width: '15%',
  scopedSlots: { customRender: 'createat' },
},  {
  title: '操作',
  dataIndex: 'operation',
  scopedSlots: { customRender: 'operation' },
}]

const data = []
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   })
// }

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
      this.datap = resp.data
      this.data = this.data.concat(this.datap)
      // console.log(this.datap)
    })
    console.log(this.data)
  },
  methods: {
    handleChange (value, user_id, column) {
      const newData = [...this.data]
      const target = newData.filter(item => user_id === item.user_id)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (user_id) {
      const newData = [...this.data]
      const target = newData.filter(item => user_id === item.user_id)[0]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save (user_id) {
      const newData = [...this.data]
      const target = newData.filter(item => user_id === item.user_id)[0]
      console.log(user_id)
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
        this.$http.saveUser(user_id,{
          data
        }).then(resp => {
          console.log(user_id)
        })
      }
    },
    cancel (user_id) {
      const newData = [...this.data]
      const target = newData.filter(item => user_id === item.user_id)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => user_id === item.user_id)[0])
        delete target.editable
        this.data = newData
      }
    },
    // 删除用户
    onDelete (user_id) {
      const dataSource = [...this.dataSource]
      this.dataSource = dataSource.filter(item => item.user_id !== user_id)
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
