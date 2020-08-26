/**
 * restfulf风格下的 CRUD
 * @定义基类
 */

'use strict';

const Controller = require('egg').Controller
class CommonController extends Controller {
  /**
   * @GetMapping
   */
  async index() {
    const { ctx, service, entity } = this
    const page = ctx.query.page
    const size = ctx.query.size
    ctx.body = await service[entity].list(page, size)
  }

  /**
   * @GetMappiingIdIds查询
   */
  async show() {
    const { ctx, service, entity } = this
    // 获取参数
    ctx.body = await service[entity].getListById(ctx.params.id)
  }

  /**
   * @PostMapping
   */
  async create() {
    const { ctx, service, entity } = this
    const data = ctx.request.body
    ctx.body = await service[entity].saveEntity(data)
  }

  /**
   * @UpDateMapping
   */
  async update() {
    const { ctx, service, entity } = this
    const data = ctx.request.body
    const id = ctx.params.id
    ctx.body = await service[entity].geyByIdAndUpdate(data, id)
  }


  /**
   * @DeleteMapping
   */
  async destroy() {
    const { ctx, service, entity } = this
    // 获取参数
    ctx.body = await service[entity].getByIdAndDelete(ctx.params.id)
  }
}

module.exports = CommonController;
