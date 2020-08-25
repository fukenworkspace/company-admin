'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 第一个参数是访问的api,第二个参数是controller中的加载的方法
  // router.get('/list', controller.home.list)

  // router.get('/aaa', controller.user.index)
  // 采用restfull风格
  router.resources('/api/v1/user', controller.user)
};
