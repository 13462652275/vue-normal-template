<template>
  <div class="usage">
    <p>{{ message }}</p>
    <div class="code-container">
      <assist-code />
    </div>
  </div>
</template>

<script>
//方法
import { typeOf, deepCopy, setCookie, clearCookie } from '@/utils/assist';

//组件
import assistCode from './assist-code';

export default {
  components: {
    assistCode,
  },
  data () {
    return {
      message: 'Assist Usage',
    };
  },
  created () {
    let obj = {
      a: [ 1, 2 ],
      toString () {
        return 2;
      },
    };

    console.area(typeOf(obj), typeOf(obj.a), typeOf(obj.toString));
    console.area(deepCopy(obj), 1 + obj);
  },
};
</script>

<style scoped src="@/styles/usage.css" />