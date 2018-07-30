<template>
  <div class="usage">
    <p>{{ message }}</p>
    <div id="calendar"></div>
  </div>
</template>

<script>
//方法
import { deepCopy } from '@/utils/assist';

import SimpleCalendar from '@/utils/simple-calendar-es6.js';

export default {
  data () {
    return {
      message: 'Vuex Usage',
    };
  },
  created () {
    console.log(deepCopy(this.$store.state.address), deepCopy(this.$store.state.app));

    this.$store.commit('UPDATE_X', 100);

    console.log(deepCopy(this.$store.state.app));

    this.$store.dispatch('updateX', 50);

    setTimeout(() => {
      console.log(deepCopy(this.$store.state.app));
    }, 150);
  },
  mounted () {
    this.myCalendar = new SimpleCalendar('#calendar', {
      theme: {
        changeAble: true,
        weeks: {
          backgroundColor: '#FBEC9C',
          fontColor: '#4A4A4A',
          fontSize: '12px',
        },
        days: {
          backgroundColor: '#ffffff',
          fontColor: '#565555',
          fontSize: '12px'
        },
        todaycolor: 'orange',
        activeSelectColor: 'orange',
      }
    });
  },
};
</script>

<style scoped src="@/styles/usage.css" />
<style scoped>
  #calendar {
    margin: 0 auto;
  }
</style>