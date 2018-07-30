<template>
  <div class="assist instruction-title">
    <p>{{ message }}</p>
    <router-link to="/assist/usage">assist usage</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'How to use Assist ?',
    };
  },
};
</script>

<style scoped src="@/styles/instruction.css" />

<style scoped>
/*.assist {
  height: 100px;
  font-size: 30px;
  text-align: center;
}*/
</style>