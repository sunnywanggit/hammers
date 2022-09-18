import { ossKeyName } from '../constant';
import { ObjectInterface } from '../../index';

/**
 * @description 将getOSSParams解析的结果还原至 url 中
 * @param { string } url 原链接
 * @param { ObjectInterface } query 参数对象
 * @returns { string } 融合参数之后的 url 链接
 */
export const restoreOSSParams = (url: string, query: ObjectInterface) => {
  if (!query || JSON.stringify(query) === '{}') return url;
  const search = Object.keys(query)
    .map((key) => {
      if (key === ossKeyName) {
        // 如果query是oss压缩参数则将其拼接
        const directives = query[key];
        const value = directives
          .map((directive: ObjectInterface) => {
            const { name, values } = directive;
            if (values.length) {
              const valuesStr = values.map((v: { name: any; value: any; }) => `${v.name}${v.value ? `_${v.value}` : ''}`);
              return `${name},${valuesStr.join(',')}`;
            }
            return name;
          })
          .join('/');
        return `${key}=${value}`;
      }
      return `${key}=${query[key]}`;
    })
    .join('&');
  return (url.indexOf('?') > 0 ? url : `${url}?`).replace(/\?.*$/, `?${search}`);
};
