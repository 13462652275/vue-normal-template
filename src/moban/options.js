export default {
  //允许组件模板递归地调用自身。
  //注意，组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。
  name: '', 

  //指定已创建的实例之父实例，在两者之间建立父子关系。
  //子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
  parent: null, 

  //使组件无状态 (没有 data ) 和无实例 (没有 this 上下文)
  functional: false, 

  //改变纯文本插入分隔符。
  delimiters: [ "{{", "}}" ], 

  //当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。
  comments: false, 

  //包含 Vue 实例可用组件的哈希表。
  components: {

  },

  //包含 Vue 实例可用指令的哈希表。
  directives: {

  },

  //包含 Vue 实例可用过滤器的哈希表。
  filters: {

  },

  //允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。
  //这主要是为了便于扩展单文件组件。
  extends: Object | Function, 

  //mixins 选项接受一个混入对象的数组。
  mixins: [], 

  //provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。
  provide () {
    return {
      foo: this.foo,
    };
  },

  inject: [ 'foo' ],


  props: {

  },

  data () {

  },

  computed: {

  },

  watch: {

  },

  //在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
  beforeCreate () {

  },

  //在实例创建完成后被立即调用。
  //在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。
  //然而，挂载阶段还没开始，$el 属性目前不可见。
  created () {

  },

  //在挂载开始之前被调用：相关的 render 函数首次被调用。
  //该钩子在服务器端渲染期间不被调用。
  beforeMount () {

  },

  //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  //如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
  mounted () {

  },
  //注意 mounted 不会承诺所有的子组件也都一起被挂载。
  //如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
  mounted () {
    this.$nextTick(() => {
      // Code that will run only after the
      // entire view has been rendered
    });
  },

  //数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
  //该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
  beforeUpdate () {

  },

  //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  updated () {

  },
  //注意 updated 不会承诺所有的子组件也都一起被重绘。
  //如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：
  updated () {
    this.$nextTick(() => {
      // Code that will run only after the
      // entire view has been re-rendered
    });
  },

  //keep-alive 组件激活时调用。
  //该钩子在服务器端渲染期间不被调用。
  activated () {

  },

  //keep-alive 组件停用时调用。
  //该钩子在服务器端渲染期间不被调用。
  deactivated () {

  },

  //实例销毁之前调用。在这一步，实例仍然完全可用。
  //该钩子在服务器端渲染期间不被调用。
  beforeDestory () {

  },

  //Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
  //该钩子在服务器端渲染期间不被调用。
  destroyed () {

  },

  //当捕获一个来自子孙组件的错误时被调用。
  //此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。
  //此钩子可以返回 false 以阻止该错误继续向上传播。
  errorCaptured (err: Error, vm: Component, info: string) {
    return false;
  },

  methods: {

  },

  render (createElement) {
    
  },
};