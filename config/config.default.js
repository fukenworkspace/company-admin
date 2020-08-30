/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597590617795_1386';
  /**
   * @middleware
   */
  config.middleware = [];

  const userConfig = {
    // myAppName: 'egg',
  };
  /**
   * @数据库默认配置
   */
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'remark',
    },
    app: true,
    agent: false
  }

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: ['http://localhost:8080'],
  }
  /**
   * @token
   */
  config.jwt = {
    secret: '123456',
  }
  /**
   * @跨域配置
   */
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  }
  /**
   * @传输文件大小
   */
  config.bodyParser = {
    jsonLimit: '100mb',
    formLimit: '100mb',
  }
  /**
   * @Swagger2
   */
  config.swagger2 = {
    enable: true, // http://127.0.0.1:7001/public/swagger/index.html
    base: {
      schemes: [
        'http', 'https'
      ],
      host: '127.0.0.1:7001',
      basePath: '/',
      consumes: [
        'application/json',
      ],
      produces: [
        'application/json',
      ],
      info: {
        description: '企业后台管理品台',
        version: '1.0.0',
        title: 'admin',
        contact: {
          email: 'shichaoxin@qq.com',
        }
      },
      definitions: {
        // model definitions
      },
      securityDefinitions: {
        // security definitions
      }
    },
  }
  return {
    ...config,
    ...userConfig,
  };
};
