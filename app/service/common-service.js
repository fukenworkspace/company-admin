'use strict';

const Service = require('egg').Service;
const uuid = require('uuid')
class CommonService extends Service {
  /**
   * @获取所有信息
   */
  async list(page, size) {
    const { app: { mysql }, entity } = this

    const list = await mysql.select(entity, {
      orders: [['id', 'desc']], // 排序方式[ [], []]
      offset: +page, // 数据偏移量
      limit: +size, // 返回数据量
    })
    const total = await mysql.count(entity)
    return { list, total }
  }

  /**
   * @保存数据
   */
  async saveEntity(body) {
    const { app: { mysql }, entity } = this
    body.id = uuid.v4()
    return mysql.insert(entity, body)
  }

  /**
   * @查询数据根据id
   */
  async getListById(id) {
    const { app: { mysql }, entity } = this
    return mysql.select(entity, {
      where: { id }
    })
  }

  /**
   * @getByIdAndDelete
   */
  async getByIdAndDelete(id) {
    const { app: { mysql }, entity } = this
    return mysql.delete(entity, { id })
  }

  /**
   * @更新
   */
  async geyByIdAndUpdate(newBody, id) {
    const { app: { mysql }, entity } = this
    return mysql.update(entity, newBody, { where: { id } })
  }

  /**
   * @分页查询
   */
}

module.exports = CommonService
