import axios from 'axios';

import url from '../../utils/getUrls';
import { IBling } from '../IBling';
import xml2Js from '../../utils/xml2js';
import { pipedriveItem } from '../../types';
import PipedriveService from './PipedriveService';

interface BlingOrdersProps {
  retorno: {
    pedidos: {
      pedido: {
        numero: string;
        totalvenda: string;
        data: string;
      };
    }[];
  };
}

class BlingService implements IBling {
  async insertPipedriveEarningsAsOrder(
    pipedriveDealsWithEarnings: pipedriveItem[]
  ) {
    const insertOrders = url.bling.post;

    const orders = pipedriveDealsWithEarnings.map(async deal => {
      const xml = xml2Js(deal);

      try {
        const response = await axios.post<BlingOrdersProps>(
          `${insertOrders}&xml=${encodeURI(xml)}`
        );

        return response.data;
      } catch (error) {
        console.log(error);

        throw new Error('Error inserting order on bling.');
      }
    });

    return Promise.all(orders);
  }

  async getAllOrders() {
    const ordersUrl = url.bling.get;

    try {
      const dealWithEarnings = await PipedriveService.getAllDealsWithEarnings();

      this.insertPipedriveEarningsAsOrder(dealWithEarnings);

      const response = await axios.get<BlingOrdersProps>(ordersUrl);

      if (!response.data.retorno.pedidos) {
        throw new Error('Bling has no orders');
      }

      return response.data.retorno;
    } catch (error) {
      console.log(error);

      throw new Error(error.message);
    }
  }
}

export default new BlingService();
