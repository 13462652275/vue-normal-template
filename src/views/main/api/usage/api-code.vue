<template>
<highlight-code lang="JS">
  <comment>//请求</comment>.
  <keyword>import</keyword> axios, { getUserList } <keyword>from</keyword> <string>'api'</string>;


  <function>data</function> () {
    <keyword>return</keyword> {
      <string>source</string><number>:</number> axios<operator>.</operator>CancelToken<operator>.</operator><method>source</method>(),
      <string>message</string><number>:</number> <string>'Api Instruction'</string>,
    };
  },
  <function>created</function> () {
    <method>getUserList</method>({}, <result>this</result><operator>.</operator>source<operator>.</operator>token)<operator>.</operator>then(({ <result>data</result> }) => {
      <method>console</method><operator>.</operator><method>area</method>(data);
    }, <result>error</result> => {
      <keyword>if</keyword> (axios.<method>isCancel</method>(error)) {
        <method>console</method><operator>.</operator><method>warn</method>(<string>'Request canceled'</string>, error<operator>.</operator>message);
      } <keyword>else</keyword> {
        <method>console</method><operator>.</operator><method>error</method>(error);
      };
    });
  },
  <function>beforeRouteLeave</function> () {
    <result>this</result><operator>.</operator>source<operator>.</operator>cancel(<string>'Operation canceled by the user.'</string>);
    <method>next</method>();
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