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

  /**
   * @删除用户
   */
  async deleteUser() {
    const { ctx, app } = this
    let authToken = ctx.header.authorization
    if (authToken) {
      authToken = authToken.substring(7)
      // 解析token是否过期
      const decoded = app.jwt.verify(authToken);
      console.log(decoded)
    }
    const id = ctx.params.id
    const result = await this.service.user.deleteOne(id)
    ctx.body = {
      statusCode: 1,
      message: '删除成功',
      result
    }
  }

  async login() {
    const { ctx } = this
    const username = ctx.params.username
    const password = ctx.params.password
    ctx.body = await this.service.user.userlogin(username, password)
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