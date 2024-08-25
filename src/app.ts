// 运行时配置

import { RunTimeLayoutConfig } from '@umijs/max';
import ArmsRum from './utils/tracker';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<any> {
  const config = ArmsRum.getConfig();
  ArmsRum.setConfig({
    ...config,
    user: {
      name: 'Lee',
      tags: 17200247126,
    },
  });
  return {
    name: 'Lee',
  };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    logout: (initialState: any) => {
      console.log('initial state:', initialState);
    },
    layout: 'mix',
  };
};
