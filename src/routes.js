import { Router } from 'express';

import UserControler from './controllers/UserController';

const routes = Router();

routes.get('/users', UserControler.index);
routes.post('/users', UserControler.create);

export default routes;