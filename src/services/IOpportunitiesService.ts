import { OpportunityModel } from '../models/opportunity';

export interface IOpportunitiesService {
  indexOpportunities(): Promise<OpportunityModel[]>;
}
