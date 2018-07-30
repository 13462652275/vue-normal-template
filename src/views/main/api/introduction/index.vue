<template>
  <div class="api instruction-title">
    <p>{{ message }}</p>
    <icon type="check" size="20px"></icon>
    <router-link to="/api/usage">api usage</router-link>
  </div>
</template>

<script>
import icon from '@/components/icon';
console.log(icon)
export default {
  components: {
    icon,
  },
  data () {
    return {
      message: 'How to use Api ?',
    };
  },
};
</script>

<style scoped src="@/styles/instruction.css" />

<style scoped>
/*.api {
  height: 100px;
  font-size: 30px;
  text-align: center;
}*/
</style>