'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  /**
   * @Sql配置
   */
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  /**
   * @Token配置
   */
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  /**
   * @swagger
   */
  swagger2: {
    enable: true,
    package: 'egg-swagger2'
  }
};
