import { Router } from 'express';

import opportunitiesRouter from './opportunitiesRoutes';

const mainRouter = Router();

mainRouter.get('/', (request, response) => {
  response.json({
    message: 'Olá, acesse /opportunities para ver as negociações feitas',
  });
});

mainRouter.use(opportunitiesRouter);

export default mainRouter;
