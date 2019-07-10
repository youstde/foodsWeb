import createAPI from '@/util/createAPIst';

// 门店信息
export const getStoreData = (params={}) => {
  return createAPI('/merchant', 'get', {
    params
  });
};


export const getAccountBase = (params={}) => {
  return createAPI('/account', 'get', {
    params
  })
};



// goods
export const getGoodsBase = (params={}) => {
  return createAPI('/goods', 'get', {
    params
  })
};
