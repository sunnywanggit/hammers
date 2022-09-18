import { ObjectInterface } from '../../index';

/**
 * @description 获取url中的参数
 * @param { string } url 目标url
 * @return { Object } 参数对象
 */
export const getUrlParams = (url: string) => {
  let search = url;
  // 先将hash字符串去除
  const indexOfHash = search.indexOf('#');
  if (indexOfHash >= 0) {
    search = search.substr(0, indexOfHash);
  }
  // 再寻找query位置
  const indexOfQuery = search.indexOf('?');
  const result: ObjectInterface = {};
  if (indexOfQuery >= 0) {
    search = search.substr(indexOfQuery + 1);
    search.split('&').forEach((keyValue) => {
      const [key, value = ''] = keyValue.split('=');
      result[key] = decodeURIComponent(value);
    });
  }
  return result;
};
