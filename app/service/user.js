'use strict'

const CommonService = require('./common-service')
const DataTableName = require('../../config/dbname')

class UserService extends CommonService {

  constructor(...args) {
    super(...args)
    this.entity = DataTableName.USER_TABLE
  }
  /**
 * @Login
 */
  userlogin(username, password) {
    const token = this.app.jwt.sign({
      username, password
    }, this.app.config.jwt.secret,
      {
        // 设置过期时间
        expiresIn: 7200
      })
    return token
  }

  /**
   * 模糊查询
   */
  async search(username) {
    const { app: { mysql } } = this
    const sql = `SELECT * FROM ${DataTableName.USER_TABLE} WHERE username LIKE "%${username}%"`
    const list = await mysql.query(sql)
    const total = list.length
    return { list, total }
  }
}

module.exports = UserService
