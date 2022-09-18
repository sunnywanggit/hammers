import { ossKeyName } from '../constant';
import { ObjectInterface } from '../../index';

/**
 * @description 分析url，会返回 去参url、参数、hash字符串
 * @param { string } url 目标url
 * @return { Object } 参数对象
 */

export const urlAnalyze = (url: string) => {
  let fullPath = url;
  // 先检测hash串，参数总是在hash串前面
  const hashIndex = fullPath.indexOf('#');
  let hash = '';
  if (hashIndex >= 0) {
    hash = fullPath.substr(hashIndex + 1);
    fullPath = fullPath.substr(0, hashIndex);
  }
  // 再检测搜索串是否存在
  const queryIndex = fullPath.indexOf('?');
  let query: ObjectInterface;
  let queryStr = '';
  if (queryIndex >= 0) {
    queryStr = fullPath.substr(queryIndex + 1);
    fullPath = fullPath.substr(0, queryIndex);
  }
  // 再解析query查询串
  if (queryStr) {
    query = queryStr.split('&').reduce((obj: { [x: string]: any }, keyValue) => {
      let firstEqualIndex = keyValue.indexOf('=');
      if (firstEqualIndex < 0) {
        firstEqualIndex = keyValue.length;
      }
      const key = keyValue.substr(0, firstEqualIndex);
      const value = keyValue.substr(firstEqualIndex + 1);
      const finalValue = value || '';
      // 如果发现query属性是oss压缩属性则对其进行再一次解析
      let returnedValue;
      if (key === ossKeyName) {
        // 将每个一级属性分离，一级属性分隔标志是/
        returnedValue = finalValue.split('/').map((nameValues) => {
          // 将二级属性分离，分割标志是,
          const directives = nameValues.split(',');
          const name = directives[0];
          const values = directives.slice(1).map((keyValue2) => {
            // 将三级属性分离，分割标志是_
            let firstUnderlineIndex = keyValue2.indexOf('_');
            if (firstUnderlineIndex < 0) {
              firstUnderlineIndex = keyValue2.length;
            }
            const key2 = keyValue2.substr(0, firstUnderlineIndex);
            const value2 = keyValue2.substr(firstUnderlineIndex + 1);
            return {
              name: key2,
              value: value2,
            };
          });
          return {
            name,
            values,
          };
        });
        // eslint-disable-next-line no-param-reassign
        obj[key] = returnedValue;
        return obj;
      }
      // eslint-disable-next-line no-param-reassign
      obj[key] = finalValue;
      return obj;
    }, {});
  } else {
    query = {};
  }
  return {
    fullPath,
    query,
    hash,
  };
};
