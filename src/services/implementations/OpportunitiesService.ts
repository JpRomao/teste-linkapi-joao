import Opportunity from '../../models/opportunity';
import { IOpportunitiesService } from '../IOpportunitiesService';
import BlingService from './BlingService';

class OpportunitiesService implements IOpportunitiesService {
  async indexOpportunities() {
    try {
      const opportunities = await Opportunity.aggregate([
        {
          $group: {
            _id: '$date',
            total_amount: { $sum: '$value' },
            count: { $sum: 1 },
          },
        },
        { $sort: { count: 1 } },
      ]);

      return opportunities;
    } catch (error) {
      console.log('Index opportunities error => ', error);

      throw new Error(error.message);
    }
  }

  async createOpportunities() {
    try {
      const { pedidos: blingOrders } = await BlingService.getAllOrders();

      const opportunities = await Opportunity.find();

      const formatedOrders = blingOrders.map(({ pedido }) => {
        return {
          opportunity_id: `bling-${pedido.numero}`,
          value: pedido.totalvenda,
          date: pedido.data,
        };
      });

      try {
        const insertedOrders = formatedOrders.map(async order => {
          const existingOpportunity = opportunities.find(
            opportunity => opportunity.opportunity_id === order.opportunity_id
          );

          if (!existingOpportunity) {
            return Opportunity.create(order);
          }

          return existingOpportunity;
        });

        return insertedOrders;
      } catch (error) {
        throw new Error(
          `Error inserting orders on database => Error: ${error.message}`
        );
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new OpportunitiesService();
