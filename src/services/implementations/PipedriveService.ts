import axios from 'axios';

import { IPipedriveService } from '../IPipedriveService';
import url from '../../utils/getUrls';

class PipedriveService implements IPipedriveService {
  async getAllDealsWithEarnings() {
    const dealsWonUrl = url.pipedrive.get();

    const { data: responseData } = await axios.get(dealsWonUrl);

    if (!responseData.data) {
      throw new Error('Pipedrive has no deals won');
    }

    return responseData.data;
  }
}

export default new PipedriveService();
