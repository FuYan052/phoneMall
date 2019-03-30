<template>
  <div class="userlist">
    <a-card title="商品列表">
    <a href="#" slot="extra">更多</a>
    <p>
      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1850 }" bordered>
         <a slot="action" slot-scope="text" href="javascript:;">action</a>
      </a-table>
    </p>
  </a-card>
    
  </div>
</template>

<script>
const columns = [
  { title: '商品编号', width: 100, dataIndex: 'productId', key: 'productId', fixed: 'left' },
  { title: '商品名称', width: 180, dataIndex: 'productName', key: 'productName', fixed: 'left' },
  { title: '商品描述', width: 250, dataIndex: 'productDescribe', key: 'productDescribe', fixed: 'left' },
  {
    title: '颜色',
    children: [{
      title: '颜色一',
      dataIndex: 'color1',
      key: 'color1',
      width: 110,
    }, {
      title: '颜色二',
      dataIndex: 'color2',
      key: 'color2',
      width: 110,
    }, {
      title: '颜色三',
      dataIndex: 'color3',
      key: 'color3',
      width: 110,
    }],
  },{
    title: '版本',
    children: [{
      title: '版本一',
      dataIndex: 'version1',
      key: 'version1',
      width: 130,
    }, {
      title: '版本二',
      dataIndex: 'version2',
      key: 'version2',
      width: 130,
    }, {
      title: '版本三',
      dataIndex: 'version3',
      key: 'version3',
      width: 130,
    }],
  },{
    title: '图片地址',
    dataIndex: 'imgUrl',
    width: 400,
  }, 
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: '编辑' },
  },
];

const data = []
export default {
  name: 'ProductList',
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      datap:[],
      columns,
    }
  },
  created() {
    this.$http.getAllPro().then(resp => {
      console.log(resp)
      this.datap = resp.data
      this.data = this.data.concat(this.datap)
      console.log(this.datap)
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
