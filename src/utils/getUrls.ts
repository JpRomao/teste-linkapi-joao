function getPipedriveUrl(
  path = 'deals',
  query = 'status=won',
  start = 0,
  limit = 500
) {
  let url = `https://${process.env.PIPEDRIVE_COMPANY_NAME}.pipedrive.com/api/v1`;

  url += path ? `/${path}` : '';

  url += `?api_token=${process.env.PIPEDRIVE_API_KEY}`;

  url += `&${query}&start=${start}&limit=${limit}`;

  return url;
}

const url = {
  pipedrive: {
    get: getPipedriveUrl,
  },
  bling: {
    post: `${process.env.BLING_API_URL}/pedido/json/?apikey=${process.env.BLING_API_KEY}`,
    get: `${process.env.BLING_API_URL}/pedidos/json/?apikey=${process.env.BLING_API_KEY}`,
  },
};

export default url;
