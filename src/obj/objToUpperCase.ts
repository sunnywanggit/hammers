import { ObjectInterface } from '../../index';

/**
 * @description 对象属性下划线转驼峰, 注意：暂不支持深层次对象转换
 * @param { Object } obj 需要被转换的对象
 * @return { Object } handleObj 转换完成的对象
 */
export const objToUpperCase = (obj: ObjectInterface) => {
  const result: ObjectInterface = {}; // 处理后的对象
  Object.keys(obj).forEach((key) => {
    const humpKey = key.replace(/(_)([a-z]{1})/g, ($1) => $1.replace('_', '').toUpperCase());
    const objType = Object.prototype.toString.call(obj[key]);
    if (objType === '[object Object]' || objType === '[object Array]') {
      result[humpKey] = objToUpperCase(obj[key]);
    } else {
      result[humpKey] = obj[key];
    }
  });
  return result;
};
