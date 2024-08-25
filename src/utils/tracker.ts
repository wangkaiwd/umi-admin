import ArmsRum from '@arms/rum-browser';

export const initArms = () => {
  ArmsRum.init({
    pid: 'cx6tej1sww@d6f65d868c5232b',
    endpoint: 'https://cx6tej1sww-default-cn.rum.aliyuncs.com',
    // 设置环境信息，参考值：'prod' | 'gray' | 'pre' | 'daily' | 'local'
    env: 'prod',
    // 设置路由模式， 参考值：'history' | 'hash'
    spaMode: 'history',
    collectors: {
      // 页面性能指标监听开关，默认开启
      perf: true,
      // WebVitals指标监听开关，默认开启
      webVitals: true,
      // Ajax监听开关，默认开启
      api: false,
      // 静态资源开关，默认开启
      staticResource: false,
      // JS错误监听开关，默认开启
      jsError: true,
      // 控制台错误监听开关，默认开启
      consoleError: true,
      // 用户行为监听开关，默认开启
      action: true,
    },
    // 链路追踪配置开关，默认关闭
    tracing: false,
  });
};

export default ArmsRum;
