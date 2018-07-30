<template>
  <div class="usage">
    <p>{{ message }}</p>
    <button @click="checkCookie">check cookie</button>
    <button @click="setCookie">set cookie</button>
    <button @click="clearCookie">clear cookie</button>
  </div>
</template>

<script>
//方法
import { setCookie, getCookie, clearCookie } from '@/utils/assist';

export default {
  data () {
    return {
      message: 'Cookie Usage',
    };
  },
  methods: {
    checkCookie () {
      console.info(document.cookie);
      console.log(getCookie('name'));
    },
    setCookie () {
      setCookie({ key: 'name', value: 'Mr.Liu', days: 1, path: '/' });
    },
    clearCookie () {
      clearCookie({ path: '/' });
    },
  },
};
</script>

<style scoped src="@/styles/usage.css" />