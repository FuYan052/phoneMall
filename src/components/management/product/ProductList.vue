<template>
  <div class="userlist">
    <a-card title="商品列表">
    <a href="#" slot="extra">更多</a>
    <p>
      <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1850 }" bordered>
         <a slot="action" slot-scope="text" href="javascript:;">action</a>
        <!-- <template v-for="col in ['user_id', 'user_name', 'phone_num','address', 'createat', 'operation']" :slot="col" slot-scope="text, record, index">
          <div :key="col">
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.user_id, col)"
            />
            <template v-else>{{text}}</template>
          </div>
        </template> -->
        <!-- <template slot="operation" slot-scope="text, record, index"> -->
          <!-- <div class='editable-row-operations'> -->
            <!-- <span v-if="record.editable">
              <a @click="() => save(record.user_id)">保存</a>
              <a-popconfirm title='确定取消?' @confirm="() => cancel(record.user_id)">
                <a>取消</a>
              </a-popconfirm>
            </span> -->
            <!-- <span v-else>
              <a @click="() => edit(record.user_id)">编辑</a>
            </span> -->
              <!-- <a-popconfirm
                v-if="dataSource.length"
                title="确认删除?"
                @confirm="() => onDelete(record.user_id)">
                <a href="javascript:;">删除</a>
              </a-popconfirm> -->
          <!-- </div> -->
        <!-- </template> -->
      </a-table>
    </p>
  </a-card>
    
  </div>
</template>

<script>
// const columns = [{
//   title: '商品编号',
//   dataIndex: 'product_id',
//   width: '7%',
//   scopedSlots: { customRender: 'product_id' },
// },{
//   title: '商品名称',
//   dataIndex: 'product_name',
//   width: '10%',
//   scopedSlots: { customRender: 'product_name' },
// },{
//   title: '商品描述',
//   dataIndex: 'product_describe',
//   width: '15%',
//   scopedSlots: { customRender: 'product_describe' },
// }, {
//   title: '颜色',
//   children: [{
//     title: '颜色一',
//     dataIndex: 'building',
//     key: 'building',
//     width: '8%',
//   }, {
//     title: '颜色二',
//     dataIndex: 'number',
//     key: 'number',
//     width: '8%',
//   }, {
//     title: '颜色三',
//     dataIndex: 'number',
//     key: 'number',
//     width: '8%',
//   }],
// },{
//   title: '版本',
//   children: [{
//     title: '版本一',
//     dataIndex: 'building',
//     key: 'building',
//     width: '12%',
//   }, {
//     title: '版本二',
//     dataIndex: 'number',
//     key: 'number',
//     width: '12%',
//   }, {
//     title: '版本三',
//     dataIndex: 'number',
//     key: 'number',
//     width: '12%',
//   }],
// },{
//   title: '图片地址',
//   dataIndex: 'createat',
//   width: '15%',
//   scopedSlots: { customRender: 'createat' },
// },  {
//   title: '操作',
//   dataIndex: 'operation',
//   scopedSlots: { customRender: 'operation' },
// }]

const columns = [
  { title: '商品编号', width: 130, dataIndex: 'product_id', key: 'product_id', fixed: 'left' },
  { title: '商品名称', width: 150, dataIndex: 'product_name', key: 'product_name', fixed: 'left' },
  { title: '商品描述', width: 250, dataIndex: 'product_describe', key: 'product_describe', fixed: 'left' },
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
    dataIndex: 'createat',
    width: 400,
    scopedSlots: { customRender: 'createat' },
  }, 
  // { title: 'Column 1', dataIndex: 'address', key: '1'},
  // { title: 'Column 2', dataIndex: 'address', key: '2'},
  // { title: 'Column 3', dataIndex: 'address', key: '3'},
  // { title: 'Column 4', dataIndex: 'address', key: '4'},
  // { title: 'Column 5', dataIndex: 'address', key: '5'},
  // { title: 'Column 6', dataIndex: 'address', key: '6'},
  // { title: 'Column 7', dataIndex: 'address', key: '7'},
  // { title: 'Column 8', dataIndex: 'address', key: '8'},
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: '编辑' },
  },
];

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
