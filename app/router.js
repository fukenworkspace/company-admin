'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const apiVersion = '/api/v1'

module.exports = app => {
  const { router, controller, jwt, swagger } = app

  // restfull
  router.resources('user', apiVersion + '/user', controller.user)
  /**
   * @删除用户信息需要token检测
  */
  router.delete(apiVersion + '/deleteUser/:id', jwt, controller.user.deleteUser)

  /**
   * 模糊查询用户信息表
   */
  router.get(apiVersion + '/searchUser', controller.user.searchUsers)
  /**
 * @用户登录
 */
  router.get(apiVersion + '/login/:username/:password', controller.user.login)
  swagger.get(apiVersion + '/login/{username}/{password}', {
    tags: [
      '用户信息类',
    ],
    summary: '用户登录',
    description: '',
    parameters: [
      {
        in: 'params',
        name: 'username',
        description: '用户名',
        required: true,
      },
      {
        in: 'params',
        name: 'password',
        description: '密码',
        required: true,
      },
    ],
    responses: {},
  });

};








  // 第一个参数是访问的api,第二个参数是controller中的加载的方法
  // router.get('/list', controller.home.list)

  // router.get('/aaa', controller.user.index)
  // 采用restfull风格
  // router.resources('/api/v1/user', controller.user)
