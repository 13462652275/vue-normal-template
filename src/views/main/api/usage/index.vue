<template>
  <div class="usage">
    <p>{{ message }}</p>
    <div class="code-container">
      <api-code />
    </div>
  </div>
</template>

<script>
//请求
import axios, { getUserList } from 'api';

//组件
import apiCode from './api-code';

export default {
  components: {
    apiCode,
  },
  data () {
    return {
      source: axios.CancelToken.source(),
      message: 'Api Usage',
    };
  },
  created () {
    let array = [];
    for (let i = 0; i < 10000; i ++) {
      array.push({ id: i.toString() });
    };
    // let array = [ { id: 3 }, { id: 2 }, { id: 5 }, { id: 1 }, { id: 8 }, { id: 9 }, { id: 7 }, { id: 5 }, { id: 2 }, { id: 4 }, { id: 6 }, { id: 1 }, { id: 0 } ];
setTimeout(() => {
  console.time("计时器一");
    let index1 = array.findIndex(item => item.id === '1000');
    // for (let i = 0, iLength = array.length; i < iLength; i ++) {
    //   if (array[i].id === 9999) break;
    // };
  console.timeEnd("计时器一");
}, 10000);

setTimeout(() => {
  console.time("计时器二");
    let index2 = array.insertionSearch({ id: '1000' });
    // let index1 = array.findIndex(item => item.id === 9999);
  console.timeEnd("计时器二");
}, 15000);


//     console.area(array, index, array[index])
    getUserList({}, this.source.token).then(({ data }) => {
      console.area(data);
    }, error => {
      if (axios.isCancel(error)) {
        console.warn('Request canceled', error.message);
      } else {
        console.error(error);
      };
    });
  },
  beforeRouteLeave (to, from, next) {
    this.source.cancel('Operation canceled by the user.');
    next();
  },
};
</script>

<style scoped src="@/styles/usage.css" />