import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessiconController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessiconController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/', (req, res) => {
    return res.json({ ola: 'ok' });
});

export default routes;
