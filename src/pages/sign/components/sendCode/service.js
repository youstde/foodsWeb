import createAPI from '@/util/createAPIst';

// 登录
export const sendCode = (params={}) => {
  return createAPI('/verify', 'get', {
    params
  });
};
