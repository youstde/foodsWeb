import request from '../util/request';

/**
 * 获取文章
 */
export const getArticle = () => {
  return request('/getArticle');
};
/**
 * 通过文章ID获取文章
 * @param params
 */
export const getArticleById = (params) => {
  return request('/getArticleById',{params: params});
};
/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request('/getUserInfo');
};
/**
 * 获取所有label
 */
export const getLabel = () => {
  return request('/label');
};
/**
 * 注册
 * @param params
 */
export const signUp = (params) => {
  return request('/signUp', {params: params,method: 'POST'});
}
/**
 * 登录
 * @param params
 */
export const signIn = (params) => {
  return request('/signIn', {params: params,method: 'POST'});
}
/**
 * 发布文章
 * @param params
 */
export const publicArticle = (params) => {
  return request('/publicArticle', {params: params,method: 'POST'});
}
/**
 * 图片上传
 * @param params
 */
export const imageUpload = (params) => {
  return request('/imageUpload', {params: params,method: 'POST'});
}
