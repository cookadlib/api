import Router from 'koa-router';

// import {container} from 'needlepoint';
// import Database from '../database/adaptor/firebase';
import Model from '../resource/ingredient';

// const ingredient = new IngredientModel(config);
//
// const router = new Router();
//
// router.get('/', async (ctx, next) => {
//   await ingredient.find().then(function(data) {
//     ctx.body = data;
//     next();
//   });
// });
//
// router.get('/:id', async (ctx, next) => {
//   await ingredient.findById(ctx.params.id).then(function(data) {
//     ctx.body = data;
//     next();
//   });
// });
//
// router.post('/', async (ctx, next) => {
//   await ingredient.insert(ctx.params.id).then(function(data) {
//     ctx.body = data;
//     next();
//   });
//   ctx.body = 'Yeah! unique';
//
//   next();
// });
//
// router.put('/:id', async (ctx, next) => {
//
//   ctx.body = 'Yubin! yummm';
//
//   next();
// });
//
// router.del('/:id', async (ctx, next) => {
//
//   ctx.body = 'Yeah!';
//
//   next();
// });
//
// export default router;

export default class Ingredient {

  constructor(config) {
    // super(config);

    this.model = new Model(config);
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
      ctx.body = 'Yeah! unique';

      next();
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
