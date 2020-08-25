'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  // 查询获取所有数据
  async index() {
    const { ctx } = this
    ctx.body = await this.service.user.getAll()
  }
  async new() {
    const { ctx } = this
    ctx.body = '删除了'
  }
  async create() {
    const { ctx } = this
    const body = ctx.request.body
    const data = await this.service.user.save(body)
    ctx.body = data
  }
  async destroy() {
    const { ctx } = this
    const id = ctx.params.id
    ctx.body = await this.service.user.deleteOne(id)
  }
}

module.exports = UserController


/**@get传值
 * const query = this.ctx.query
 */
/**
 * @动态路由
 * router.get('/login/:username', )
 * const params = this.ctx.params
 */