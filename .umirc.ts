import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '标题',
    locale: false,
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: '表格',
      path: '/table',
      routes: [
        // todo: Why do this config?
        // 1. for breadcrumbs click to active first menu of parent group
        // 2. click table breadcrumbs will occur page flicker when active first menu of parent group
        {
          path: '/table',
          redirect: 'list',
        },
        {
          name: '列表',
          path: 'list',
          component: './Table',
        },
        {
          name: '详情',
          path: 'detail',
          component: './Table/Detail',
          hideInMenu: true,
          parentKeys: ['/table/list'],
        },
      ],
    },
  ],
  npmClient: 'pnpm',
  mako: {},
  devtool: 'source-map',
});
