import { ObjectInterface } from '../../index';
import { hump2Underline } from '../string/hump2Underline';
import { deepClone } from './deepClone';

/**
 * @description 将对象中所有的驼峰属性名转下划线
 * @param { Object } obj 目标对象
 * @param {boolean} isNew 是否返回一个新对象
 */

// eslint-disable-next-line consistent-return
export const jsonToUnderline = (obj: Array<any> | ObjectInterface, isNew?:false) => {
  const localObj = isNew ? deepClone(obj) : obj;
  if (localObj instanceof Array) {
    localObj.forEach((v: any) => {
      jsonToUnderline(v, isNew);
    });
  } else if ((localObj as ObjectInterface) instanceof Object) {
    Object.keys(localObj).forEach((key) => {
      const newKey = hump2Underline(key);
      if (newKey !== key) {
        // eslint-disable-next-line no-param-reassign
        localObj[newKey] = localObj[key];
        // eslint-disable-next-line no-param-reassign
        delete localObj[key];
      }
      jsonToUnderline(localObj[newKey], isNew);
    });
  }
  if (isNew) {
    return localObj;
  }
};
