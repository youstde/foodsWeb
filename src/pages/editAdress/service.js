import createAPI from '@/util/createAPIst';

// 获取城市信息
export const getRegions = (params={}) => {
  return createAPI('/general', 'get', {
    params
  });
};
