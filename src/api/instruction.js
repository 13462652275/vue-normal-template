//如何使用？

// api.js --start--
export const login = (data, cancelToken) => {
  return axios({
    method: 'post',
    url: '/login',
    data,
    cancelToken,
  });
};

export const getUserList = (params, cancelToken) => {
  return axios({
    method: 'get',
    url: '/user/list',
    params,
    cancelToken,
  });
};
// api.js --end--


//在任意组件调用api时参考一下步骤：

// 第一步: 引入
import axios, { GET } from 'api';

// 第二步: 设置中断参数（如果不需要取消请求请直接看第三步）
//在 data 中设置全局可取消的 token
export default {
  data () {
    return {
      source: axios.CancelToken.source(),
    };
  }
};

// 第三步: 调用
//如果想中断请求，请添加一个空的对象参数。

// POST
login({ username: 'admin', password: '123456' }, this.source.token).then(({ data }) => {
  //请求成功
}, error => {
  if (axios.isCancel(error)) {
    console.log('Request canceled', error.message);
  } else {
    // 处理错误
  };
});

// GET
getUserList({}, this.source.token).then(({ data }) => {
  //请求成功
}, error => {
  if (axios.isCancel(error)) {
    console.log('Request canceled', error.message);
  } else {
    // 处理错误
  };
});

// 取消请求
this.source.cancel('Operation canceled by the user.');