import Router from 'koa-router';

// import {container} from 'needlepoint';

import Ingredient from '../classes/ingredient';

const router = new Router();

const ingredient = new Ingredient();

router.get('/', async (ctx, next) => {
  return ingredient.find().then(function(data) {
    console.log('data', data);
    ctx.body = data;
    return next();
  });

  ctx.body = 'Fuck unique';

  await next();
});

router.get('/:id', async (ctx, next) => {
  return ingredient.find(ctx.params.id).then(function(data) {
    console.log('data', data);
    ctx.body = data;
    return next();
  });

  ctx.body = 'Fuck again';

  await next();
});

router.post('/', async (ctx, next) => {

  ctx.body = 'Yeah! unique';

  await next();
});

router.put('/:id', async (ctx, next) => {

  ctx.body = 'Yubin! yummm';

  await next();
});

router.del('/:id', async (ctx, next) => {

  ctx.body = 'Yeah!';

  await next();
});

export default router;
