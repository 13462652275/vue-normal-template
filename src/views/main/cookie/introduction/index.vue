<template>
  <div class="cookie instruction-title">
    <p>{{ message }}</p>
    <router-link to="/cookie/usage">cookie usage</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'How to use Cookie ?',
    };
  },
};
</script>

<style scoped src="@/styles/instruction.css" />

<style scoped>
/*.cookie {
  height: 100px;
  font-size: 30px;
  text-align: center;
}

.cookie a {
  font-size: 100px;
}*/
</style>