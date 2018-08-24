import axios from 'axios';

export default axios;

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