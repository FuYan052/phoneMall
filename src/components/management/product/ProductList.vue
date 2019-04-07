<template>
  <div class="userlist">
    <a-card title="商品列表">
    <a href="#" slot="extra">更多</a>
    <p>
      <a-button type="primary" icon="plus" class="editable-add-btn" @click="handleAdd">上新</a-button>
      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 2165}" bordered>
        <span slot="tags" v-if="tags" slot-scope="tags">
          <a-tag color="blue">{{tags}}</a-tag>
        </span>
        <template slot="operation" slot-scope="text, record, index">
          <div class='editable-row-operations'>
            <span class="edit">
              <a @click="() => edit(record)"><a-button type="primary">修改</a-button></a>
            </span>
            <span class="delete">
              <a-popconfirm
                v-if="data.length"
                title="确认删除吗?"
                @confirm="() => onDelete(record.productId)">
                <a href="javascript:;"><a-button type="danger" icon="delete">下架</a-button></a>
              </a-popconfirm>
            </span>
          </div>
        </template>
      </a-table>
    </p>
  </a-card>
    
  </div>
</template>

<script>
const columns = [
  { title: '商品编号', width: 150, dataIndex: 'productId', key: 'productId', fixed: 'left' },
  { title: '商品名称', width: 180, dataIndex: 'productName', key: 'productName', fixed: 'left' },
  { title: '商品描述', width: 400, dataIndex: 'productDescribe', key: 'productDescribe',},
  // { title: '商品颜色', width: 150, dataIndex: 'colors', key: 'colors'},
  // { title: '商品版本', width: 200, dataIndex: 'version', key: 'version'},
  { title: '商品单价', width: 150, dataIndex: 'productSize', key: 'productSize'},
  { title: '销售状态', width: 150, dataIndex: 'sellPoint', key: 'sellPoint', scopedSlots: { customRender: 'tags' }, },
  
  {
    title: '图片地址',
    dataIndex: 'imgUrl',
    width: 900,
  }, 
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: 'operation' },
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
    edit (record) {
      console.log(record)
      const newData = [...this.data]
      const target = newData.filter(item => record.productId === item.productId)[0]
      console.log(target)
      // if (target) {
      //   target.editable = true
      //   this.data = newData
      this.$router.push({
        path: '/admin/productedit',
        query: record
      })
    },
    save (productId) {
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
    cancel (productId) {
      const newData = [...this.data]
      const target = newData.filter(item => user_id === item.user_id)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => user_id === item.user_id)[0])
        delete target.editable
        this.data = newData
      }
    },
    // 下架
    onDelete (productId) {
      console.log(productId)
      const data = [...this.data]
      this.data = data.filter(item => item.productId !== productId)
      const params = []
      params.push(productId)
      console.log(params)
      this.$http.delPro(params).then(resp => {
        console.log(resp)
      })
    },
    // 上新
    handleAdd() {
      this.$router.push({
        path: '/admin/productadd'
      })
    }
  },
}
</script>

<style lang='scss' scoped>
.userlist {
  .editable-add-btn {
    margin-bottom: 20px;
  }
  .editable-row-operations {
    display: flex;
    .edit {
      // float: left;
    }
    .delete {
      // float: left;
      // margin-left: 10px;
    }
  }
  .editable-row-operations a {
  margin-right: 8px;
  }
}

</style>
