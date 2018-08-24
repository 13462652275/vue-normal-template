import axios from 'axios';

//暴露初始实例
export default axios;


//已配置实例
export const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/serve',
  headers: { 'Content-Type': 'application/json' },
});