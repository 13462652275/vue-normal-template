<template>
  <pre class="highlight">
    <span class="highlight-lang">{{ lang }}</span>
    <code><slot /></code>
  </pre>
</template>

<script>
export default {
  name: 'highlight-code',
  props: {
    lang: {
      type: String,
      required: true
    },
  },
};
</script>

<style>
.highlight {
  display: block;
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  overflow-x: auto;
  text-align: left;
  background-color: #272822;
  padding: 14px 16px;
  border-radius: 2px;
  position: relative;
}

.highlight-lang {
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
  text-align: right;
  font-size: 0.75em;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  padding: 5px 10px 0;
  line-height: 15px;
  height: 15px;
  font-weight: 600;
}

.comment {
  color: #75715e;
}

.keyword {
  color: #F92744;
}

.method {
  color: #66d9ef;
}

.function {
  color: #a6e22e;
}

.result {
  color: #FD9720;
}

.operator {
  color: #f92672;
}

.tag {
  color: #F92744;
}

.number {
  color: #ae81ff;
}

.string {
  color: #e6c753;
}
</style>