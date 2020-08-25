'use strict'

const Service = require('egg').Service
const DataTableName = require('../../config/dbname')

class UserService extends Service {
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
   * @查询数据
   */
  async getAll() {
    // 查询没有条件
    return await this.app.mysql.select(DataTableName.USER_TABLE)

  }
  /**
   * @保存数据
   * @param {} data
   */
  async save(data) {
    const userInfo = {
      username: data.username,
      phone: data.phone,
      address: data.address
    }
    return await this.app.mysql.insert(DataTableName.USER_TABLE, userInfo)
  }
  /**
   * @数据库查询删除记录
   * @param {*} id
   */
  async deleteOne(id) {
    return await this.app.mysql.delete(DataTableName.USER_TABLE, {
      id
    })
  }
}

module.exports = UserService
