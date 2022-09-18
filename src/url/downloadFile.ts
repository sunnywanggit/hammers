import { ObjectInterface } from '../../index';

/**
 * 下载文件
 * @param { string } url 文件地址
 * @param { Object } params 请求参数
 */
export const downloadFile = (url: string, params: ObjectInterface) => {
  let str = '';
  Object.keys(params).forEach((key) => {
    str += `${key}=${params[key]}&`;
  });
  window.location.href = `${url}?${str.substr(0, str.length - 1)}`;
};
