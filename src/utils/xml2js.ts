import { Builder } from 'xml2js';

import { pipedriveItem } from '../types';

export default function xml2Js(item: pipedriveItem) {
  const xmlBuilder = new Builder({
    rootName: 'pedido',
    renderOpts: { pretty: false, indent: '', newline: '' },
  });

  const object = {
    cliente: {
      nome: item.person_name,
    },
    numero: item.id,
    itens: {
      item: {
        codigo: item.id,
        descricao: item.title,
        un: 'un',
        qtde: item.products_count,
        vlr_unit:
          item.products_count > 0
            ? item.value / item.products_count
            : item.value,
      },
      parcelas: {
        parcela: {
          vlr: item.value,
          data: new Date(item.won_time),
        },
      },
    },
  };

  const xml = xmlBuilder.buildObject(object);

  return xml;
}
