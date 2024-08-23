if (process.env.NODE_ENV === 'production') {
  const BrowserLogger = require('@arms/js-sdk');
  BrowserLogger.singleton({
    pid: 'cx6tej1sww@def27c1f09cc8b2',
    appType: 'web',
    imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
    sendResource: true,
    enableLinkTrace: true,
    behavior: true,
  });
}
