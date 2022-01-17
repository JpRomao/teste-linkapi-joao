import cron from 'cron';

import BlingService from '../services/implementations/BlingService';
import PipedriveService from '../services/implementations/PipedriveService';
import OpportunitiesService from '../services/implementations/OpportunitiesService';

export default function insertAllOrderedOnDay() {
  const job = new cron.CronJob(
    '0 0 0 * * *',
    async () => {
      console.log('Cron job executed');

      try {
        const allDealsWithEarnings =
          await PipedriveService.getAllDealsWithEarnings();

        await BlingService.insertPipedriveEarningsAsOrder(allDealsWithEarnings);
      } catch (error) {
        console.log(
          'Error inserting on bling or getting from PipeDrive => ',
          error
        );

        throw new Error(error.message);
      }

      try {
        await OpportunitiesService.createOpportunities();
      } catch (error) {
        throw new Error(error.message);
      }
    },
    null,
    null,
    'America/Sao_Paulo'
  );

  return job;
}
