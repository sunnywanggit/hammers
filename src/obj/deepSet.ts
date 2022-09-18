import { ObjectInterface } from '../../index';
import { transformChainToArray } from '../string/transromChainToArray';

/**
 * @description 链式赋值
 * @param {Object} obj 要被赋值的对象
 * @param {string} keys 链式语法
 * @param {any} value
 */
export const deepSet = (obj:ObjectInterface, keys:string, value: any) => {
  if (!obj) return;
  const arrKeys = transformChainToArray(keys);
  arrKeys.forEach((key, index) => {
    if (index === arrKeys.length - 1) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = value;
      return;
    }
    if (key in obj) {
      // eslint-disable-next-line no-param-reassign
      obj = obj[key];
      return;
    }
    // eslint-disable-next-line no-param-reassign
    obj[key] = /^[0-9]{1,}$/.test(arrKeys[index + 1]) ? [] : {};
    // eslint-disable-next-line no-param-reassign
    obj = obj[key];
  });
};
