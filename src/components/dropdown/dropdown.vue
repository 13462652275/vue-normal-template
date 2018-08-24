<template>
  <el-dropdown 
    class="vue-dropdown" 
    trigger="click" 
    placement="bottom"
  >
    <div class="vue-dropdown-link">
      <span>操作</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <!-- <slot slot="dropdown" /> -->
  </el-dropdown>
</template>

<style>
.vue-dropdown {
  text-align: center;
}

.vue-dropdown-link {
  color: #357EBD;
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
}
</style>