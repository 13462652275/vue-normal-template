<template>
  <div class="">

  </div>
</template>

<script>
//请求
import axios, {  } from 'api';

//方法
import  from '@/utils/';

//混合
import  from '@/mixins/';

//公共组件
import  from '@/components/';

//组件
import  from '';

export default {
  name: 'moban',
  components: {

  },
  props: {
    string: String,
    number: {
      type: Number,
      default: 0,
    },
    array: Array,
    object: {
      type: Object,
      default () {
        return { a: 1 };
      },
    },
  },
  data () {
    return {
      message: 'moban'
    };
  },
  created () {

  },
  mounted () {

  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
  beforeDestory () {

  },
};
</script>

<style scoped>
. {

}

. {

}
</style>