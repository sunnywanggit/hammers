import { ossKeyName } from '../constant';

interface ObjectInterface extends Object{
  [x: string]: any
}

/**
 * @description 将上一个函数链接的解析结果恢复成链接
 * @param { Object } analyzes
 * @return { string } link url链接
 */
interface Analyzes {
  fullPath: string,
  query: ObjectInterface,
  hash: string,
}

export const urlRestore = (analyzes: Analyzes) => {
  const { fullPath, query, hash } = analyzes;
  let link = fullPath;
  if (query) {
    let search = '';
    Object.keys(query).forEach((key, index) => {
      if (index > 0) {
        search += '&';
      }
      if (key === ossKeyName) {
        // 如果query是oss压缩参数则将其拼接
        const directives = query[key];
        const value = directives.map((directive: { name: any; values: any; }) => {
          const { name, values } = directive;
          if (values.length) {
            const valuesStr = values.map((v: { name: any; value: any; }) => `${v.name}${v.value ? `_${v.value}` : ''}`);
            return `${name},${valuesStr.join(',')}`;
          }
          return name;
        }).join('/');
        search += `${key}=${value}`;
      } else {
        search += `${key}=${encodeURIComponent(query[key])}`;
      }
    });
    if (search) {
      link += `?${search}`;
    }
  }
  if (hash) {
    link += `#${hash}`;
  }
  return link;
};
