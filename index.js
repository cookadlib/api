import Koa from 'koa';
import Router from 'koa-router';

import {container} from 'needlepoint';

import ingredient from './routers/ingredient';

const app = new Koa();
const router = new Router();

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

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello Voield';
  await next();
});

router.use('/ingredient', ingredient.routes(), ingredient.allowedMethods());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
