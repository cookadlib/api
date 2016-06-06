import Body from 'koa-bodyparser';
import Koa from 'koa';
import Router from 'koa-router';

// import dish from './router/dish';
import ingredient from './router/ingredient';
// import nutrient from './router/nutrient';
// import query from './router/query';
// import recipe from './router/recipe';
// import user from './router/user';

const app = new Koa();
const router = Router();
const bodyParser = Body();

// logger
app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(bodyParser);

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

// router.use('/dish', dish.routes(), dish.allowedMethods());
router.use('/ingredient', ingredient.routes(), ingredient.allowedMethods());
// router.use('/nutrient', nutrient.routes(), nutrient.allowedMethods());
// router.use('/query', query.routes(), query.allowedMethods());
// router.use('/recipe', recipe.routes(), recipe.allowedMethods());
// router.use('/user', user.routes(), user.allowedMethods());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log('server started 3000'));

export default app;
