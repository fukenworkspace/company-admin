'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, aaaaa';
  }

  async list() {
    const { ctx } = this;
    ctx.body = {
      success: 200
    };
  }
}

module.exports = HomeController


