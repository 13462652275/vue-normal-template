<template>
  <div :class="{ 'vue-loading': true, 'vue-loading-fix': fix }">
    <div class="vue-loading-icon">
      <svg v-if="!$slots.default" viewBox="25 25 50 50" class="vue-loading-circular">
        <circle cx="50" cy="50" r="20" fill="none" class="vue-loading-path"></circle>
      </svg>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-loading',
  props: {
    fix: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.vue-loading {
  text-align: center;
  background-color: rgba(255, 255, 255, .9);
}

.vue-loading-fix {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

.vue-loading-icon {
  display: inline-block;
  height: 42px;
  width: 42px;
  position: relative;
  top: 50%;
  margin-top: -21px;
}

.vue-loading-circular {
  height: 100%;
  width: 100%;
  animation: loading-rotate 2s linear infinite;
}

.vue-loading-path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90,150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}

@keyframes loading-rotate {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -120px;
  }
}
</style>