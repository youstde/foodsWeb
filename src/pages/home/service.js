import createAPI from '@/util/createAPIst';

// 首页数据
export const getHomeData = (params={}) => {
  return createAPI('/home', 'get', {
    params
  });
};
