'use strict'

const Service = require('egg').Service
const DataTableName = require('../../config/datatablename')

class UserService extends Service {
  /**
   * @查询数据
   */
  async getAll() {
    // 查询没有条件
    return await this.app.mysql.select(DataTableName.USER_TABLE)
    //  查询有条件
    // return await this.app.mysql.select(dataTableName.USER_TABLE, {
    //   where: { id: 2 },
    //   columns: ['author', 'title'], // 要查询的表字段
    //   orders: [['created_at', 'desc'], ['id', 'desc']], // 排序方式
    //   limit: 10, // 返回数据量
    //   offset: 0, // 数据偏移量
    // })
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
