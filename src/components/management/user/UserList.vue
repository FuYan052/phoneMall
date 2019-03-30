<template>
  <div class="userlist">
    <a-card title="用户列表">
    <a href="#" slot="extra">更多</a>
    <p>
      <a-table :columns="columns" :dataSource="data" bordered>
        <template v-for="col in ['userId', 'userName', 'phoneNum','address', 'createAt', 'operation']" :slot="col" slot-scope="text, record, index">
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.userId, col)"
            />
            <template v-else>{{text}}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <div class='editable-row-operations'>
            <span v-if="record.editable">
              <a @click="() => save(record.userId)">保存</a>
              <a-popconfirm title='确定取消?' @confirm="() => cancel(record.userId)">
                <a>取消</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="() => edit(record.userId)">编辑</a>
            </span>
          </div>
           <a-popconfirm
            v-if="data.length"
            title="确认删除吗?"
            @confirm="() => onDelete(record.userId)">
            <a href="javascript:;">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
    </p>
  </a-card>
    
  </div>
</template>

<script>
const columns = [{
  title: '用户编号',
  dataIndex: 'userId',
  width: '10%',
  scopedSlots: { customRender: 'userId' },
},{
  title: '用户姓名',
  dataIndex: 'userName',
  width: '15%',
  scopedSlots: { customRender: 'userName' },
},{
  title: '联系电话',
  dataIndex: 'phoneNum',
  width: '15%',
  scopedSlots: { customRender: 'phoneNum' },
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
      data: [],
      columns,
    }
  },
  created() {
    this.$http.getUserList().then(resp => {
      // console.log(resp)
      this.data = resp.data.data
      console.log(this.data)
    })
  },
  methods: {
    handleChange (value, userId, column) {
      const newData = [...this.data]
      const target = newData.filter(item => userId === item.userId)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (userId) {
      const newData = [...this.data]
      const target = newData.filter(item => userId === item.userId)[0]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save (userId) {
      const newData = [...this.data]
      const target = newData.filter(item => userId === item.userId)[0]
      console.log(userId)
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
        this.$http.updateUser({
          userId: userId,
          username: this.data.username,
          phoneNum: this.data.phoneNum,
          address: this.data.address,
        }).then(resp => {
          console.log(userId)
        })
      }
    },
    cancel (userId) {
      const newData = [...this.data]
      const target = newData.filter(item => userId === item.userId)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => userId === item.userId)[0])
        delete target.editable
        this.data = newData
      }
    },
    // 删除用户
    onDelete (userId) {
      this.data = this.data.filter(item => item.userId !== userId)
      this.$http.delUser(userId).then(resp => {
        console.log(resp)
      })
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
