export default {
  props: {
    string: String,

    number: Number,

    boolean: Boolean,

    array: Array,

    object: Object,

    date: Date,

    function: Function,

    symbol: Symbol,

    required: {
      type: String,
      required: true,
    },

    //非引用类型数据默认值
    default: {
      type: Number,
      default: 0,
    },

    //引用类型数据默认值
    default: {
      type: Object,
      default () {
        return { a: 1 };
      },
    },

    //自定义验证函数
    validator: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1;
      },
    }
  },
};