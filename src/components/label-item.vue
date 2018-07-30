<template>
  <div class="vue-label-item">
    <label :style="{ width: labelWidth }">{{ title }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-label-item',
  props: {
    title: '',
    labelWidth: {
      type: String,
      default: '100px',
    },
  },
};
</script>

<style>
.vue-label-item {
  width: 100%;
  display: table;
}

.vue-label-item > label,
.vue-label-item > div {
  display: table-cell;
}

.vue-label-item > label {
  text-align: right;
}
</style>