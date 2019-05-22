import createAPI from '@/util/createAPIst';

// 登录
export const login = (params={}) => {
  return createAPI('/account', 'get', {
    params
  });
};
