import Router from 'koa-router';

import firebase, {db, sanitiseId} from '../instance/firebase';

import {search} from '../instance/google-kgsearch';
import {mediawiki} from '../instance/nodemw';

const location = db.ref('ingredient');

const router = Router();

router.get('/', async (ctx, next) => {
  await location.once('value').then((snapshot) => {
    ctx.body = snapshot.val();
    return next();
  }, error => {
    ctx.status = 500;
    ctx.body = error;
    return next();
  });
});

router.get('/:id', async (ctx, next) => {
  await location.child(ctx.params.id).once('value').then((snapshot) => {
    ctx.body = snapshot.val();
    return next();
  }, error => {
    ctx.status = 500;
    ctx.body = error;
    return next();
  });
});

router.post('/', async (ctx, next) => {
  console.log('ctx.request.body', ctx.request.body);
  if(ctx.request.body && ctx.request.body.length) {

  }
  await location.set(ctx.request.body).then((snapshot) => {
    ctx.body = snapshot.val();
    return snapshot.val();
  }, error => {
    ctx.status = 500;
    ctx.body = error;
    return next();
  });
});

router.put('/:id', async (ctx, next) => {
  await location.child(id).update(value).then((snapshot) => {
    return snapshot.val();
  }, error => {
    ctx.status = 500;
    ctx.body = error;
    return next();
  });
});

router.del('/:id', async (ctx, next) => {
  await location.child(id).remove(value).then((snapshot) => {
    return snapshot.val();
  }, error => {
    ctx.status = 500;
    ctx.body = error;
    return next();
  });
});

export default router;
