<template>
  <div class="customer-table-wrapper" :style="{ height: tableHeight + 'px' }">
    <div class="customer-table-head-box" :style="{ 'overflow-y': isScrollBar ? 'scroll' : 'none' }">
      <table class="customer-table-head">
        <thead>
          <tr>
            <th style="width:8%">序号</th>
            <th style="width:10%">所属公司</th>
            <th style="width:10%">客户名称</th>
            <th style="width:15%">行业</th>
            <th style="width:10%">性质</th>
            <th style="width:10%">设备台数</th>
            <th style="width:10%">设备运行台数</th>
            <th style="width:10%">负责人</th>
            <th style="width:20%">操作</th>
          </tr>
        </thead>
      </table>
    </div>
    <div 
      class="customer-table-body-box" 
      ref="customer-table-body-box" 
      :style="{ 'border-bottom': isScrollBar ? '1px solid #ccc' : 'none' }">
      <table class="customer-table-body">
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td style="width:8%">{{ item.index }}</td>
            <td style="width:10%">{{ item.company }}</td>
            <td style="width:10%">{{ item.name }}</td>
            <td style="width:15%">{{ item.trade }}</td>
            <td style="width:10%">{{ item.nature }}</td>
            <td style="width:10%">{{ item.total }}</td>
            <td style="width:10%">{{ item.running }}</td>
            <td style="width:10%">{{ item.person }}</td>
            <td style="width:20%">
              <span @click="viewEquipment" class="text-btn text-btn--blue">设备</span>
              <span @click="viewDetails(item.id)" class="text-btn text-btn--blue">详情</span>
              <span class="text-btn text-btn--green" @click="_edit(item.id)">修改</span>
              <span class="text-btn text-btn--red" @click="_delete(item.id)">删除</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//混合
import tableOptions from '@/mixins/table-options';

export default {
  name: 'customer-table',

  mixins: [ tableOptions ],

  data () {
    return {
      isScrollBar: false,
    };
  },

  watch: {
    data () {
      this.$nextTick(() => {
        let obj = this.$refs['customer-table-body-box'];
        if(obj.scrollHeight > obj.clientHeight) {
          
          this.isScrollBar = true;
        };
      });
    },
  },

  methods: {
    viewDetails (id) {
      this.$router.push({ name: 'base-info', params: { id } });
    },

    viewEquipment () {
      this.$router.push({ name: 'equipment' });
    },
  },
};
</script>

<style scoped>
.customer-table-wrapper {
  /*margin: 15px 0;*/
}

.customer-table-head-box {
  overflow: hidden;
}

.customer-table-head {
  width: 100%;
  border-right: 1px solid #ccc;
  overflow: hidden;
}

.customer-table-body-box {
  overflow-y: auto;
}

.customer-table-body {
  width: 100%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

.customer-table-head > thead th {
  color: #fff;
  font-weight: normal;
  background-color: #00AEFF;
}

.customer-table-head th,
.customer-table-body td {
  padding: 8px 12px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}

.customer-table-body tbody tr {
  background-color: #fff;
  transition: background-color .3s;
}

.customer-table-body tr:hover {
  background-color: rgba(0, 174, 255, .5);
}
</style>