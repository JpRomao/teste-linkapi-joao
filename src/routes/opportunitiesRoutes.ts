import { Router } from 'express';

import OpportunitiesService from '../services/implementations/OpportunitiesService';

const opportunitiesRouter = Router();

opportunitiesRouter.get('/opportunities', async (request, response) => {
  try {
    const Opportunities = await OpportunitiesService.indexOpportunities();

    return response.json(Opportunities);
  } catch (error) {
    console.log('Error => ', error);

    return response.status(400).json({ error: error.message });
  }
});

export default opportunitiesRouter;
