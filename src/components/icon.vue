<template>
  <i :class="'iconfont ' + type" :style="{ color, fontSize: size }"></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: {
      type: String,
      required: true,
    },
    color: String,
    size: String,
  },
};
</script>