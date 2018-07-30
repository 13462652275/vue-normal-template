<template>
  <div class="vuex instruction-title">
    <p>{{ message }}</p>
    <router-link to="/vuex/usage">vuex usage</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'How to use Vuex ?',
    };
  },
};
</script>

<style scoped src="@/styles/instruction.css" />

<style scoped>
/*.vuex {
  height: 100px;
  font-size: 30px;
  text-align: center;
}*/
</style>