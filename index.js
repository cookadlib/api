import Koa from 'koa';
import Router from 'koa-router';

import {container} from 'needlepoint';

import * as Config from './config';

import {Firebase as Database} from './database/adaptor/firebase';

// import DishRouter from './router/dish';
import IngredientRouter from './router/ingredient';
// import NutrientRouter from './router/nutrient';
// import QueryRouter from './router/query';
// import RecipeRouter from './router/recipe';
// import UserRouter from './router/user';

// import DishModel from './model/dish';
import IngredientModel from './model/ingredient';
// import NutrientModel from './model/nutrient';
// import QueryModel from './model/query';
// import RecipeModel from './model/recipe';
// import UserModel from './model/user';

const app = new Koa();
const router = new Router();

// const ingredient = new Ingredient(config);
const ingredientModel = container.resolve(IngredientModel);
const ingredientRouter = container.resolve(IngredientRouter);

// logger
app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

// app.use(ctx => {
//   ctx.body = 'Hello World';
// });

// app.use(ctx => {
//   console.log('ctx', ctx);
//   if (ctx.is('text/html')) {
//     ctx.throw(415, 'JSON only');
//   } else if (!ctx.is('application/json')) {
//     ctx.throw(415, 'JSON only');
//   }
// });

router.get('/', async (ctx, next) => {
  ctx.body = '{title: "Cook AdLib API"}';
  await next();
});

// router.use('/dish', dishRouter.routes(), dishRouter.allowedMethods());
router.use('/ingredient', ingredientRouter.routerRouter.routes(), ingredientRouter.routerRouter.allowedMethods());
// router.use('/nutrient', nutrientRouter.routes(), nutrientRouter.allowedMethods());
// router.use('/query', queryRouter.routes(), queryRouter.allowedMethods());
// router.use('/recipe', recipeRouter.routes(), recipeRouter.allowedMethods());
// router.use('/user', userRouter.routes(), userRouter.allowedMethods());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
