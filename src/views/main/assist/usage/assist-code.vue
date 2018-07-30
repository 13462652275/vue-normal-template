<template>
<highlight-code lang="JS">
  <comment>//方法</comment>.
  <keyword>import</keyword> { typeOf, deepCopy, setCookie, clearCookie } <keyword>from</keyword> <string>'@/utils/assist'</string>;

    <function>data</function> () {
      <keyword>return</keyword> {
        <string>message</string><number>:</number> <string>'Assist Usage'</string>,
      };
    },
    <function>created</function> () {
      <method>let</method> obj <operator>=</operator> {
        <string>a</string><number>:</number> [ <number>1</number>, <number>2</number> ],
        <function>toString</function> () {
          <keyword>return</keyword> <number>2</number>;
        },
      };

      <method>console</method><operator>.</operator><method>area</method>(<method>typeOf</method>(obj), <method>typeOf</method>(obj<operator>.</operator>a), <method>typeOf</method>(obj<operator>.</operator>toString));
      <method>console</method><operator>.</operator><method>area</method>(<method>deepCopy</method>(obj), <number>1</number> <operator>+</operator> obj);
    },

    <comment>//请看控制台打印结果</comment>.
    <comment>//详情请看 usage.vue 源码</comment>.
</highlight-code>
</template>

<script>
//公共组件
import highlightCode, * as code from '@/components/highlight-code';

export default {
  name: 'api-code',
  components: {
    highlightCode,
    string: code.string,
    number: code.number,
    tag: code.tag,
    operator: code.operator,
    result: code.result,
    function: code.func,
    method: code.method,
    keyword: code.keyword,
    comment: code.comment,
  },
};
</script>