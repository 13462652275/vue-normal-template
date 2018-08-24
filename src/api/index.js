import mock from '@/mock';

// 开启开发模式模拟数据（与正常联调模式互斥）
process.env.NODE_ENV === 'development' ? mock.start() : null;

//暴露 config 中的实例
export { default } from './config';
export * from './config';

//User
export * from './user';