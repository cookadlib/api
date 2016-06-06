import Router from 'koa-router';

import {dependencies} from 'needlepoint';

@dependencies(IngredientModel)
export default class IngredientRouter {

  constructor(model) {
    this.model = model;
    this.router = new Router();

    this.defineRoutes();
  }

  defineRoutes() {

    this.router.get('/', async (ctx, next) => {
      await this.model.find().then(function(data) {
        ctx.body = data;
        next();
      });
    });

    this.router.get('/:id', async (ctx, next) => {
      await this.model.findById(ctx.params.id).then(function(data) {
        ctx.body = data;
        next();
      });
    });

    this.router.post('/', async (ctx, next) => {
      await this.model.insert(ctx.params.id).then(function(data) {
        ctx.body = data;
        next();
      });
    });

    this.router.put('/:id', async (ctx, next) => {
      ctx.body = 'Yubin! yummm';
      next();
    });

    this.router.del('/:id', async (ctx, next) => {
      ctx.body = 'Yeah!';
      next();
    });

  }

}
