import { ObjectInterface } from '../../index';

/**
 * @description 移除对象中的空值 如 '' null undefined，并返回一个新对象
 * @param { Object } obj 需要被移除空值的对象
 * @return { Object } newObj 不存在空值得新对象
 */

// eslint-disable-next-line consistent-return
export const removeEmptyField = (obj: ObjectInterface) => {
  try {
    let newObj: ObjectInterface = {};
    if (typeof obj === 'string') {
      // eslint-disable-next-line no-param-reassign
      obj = JSON.parse(obj);
    }
    if (obj instanceof Array) {
      newObj = [];
    }
    if (obj instanceof Object) {
      Object.keys(obj).forEach((attr) => {
        if (obj[attr] !== '' && obj[attr] !== null && obj[attr] !== undefined && !Number.isNaN(obj[attr])) {
          if (obj[attr] instanceof Object) {
            // 属性值为对象,则递归执行去除方法
            newObj[attr] = removeEmptyField(obj[attr]);
          } else if (
            typeof obj[attr] === 'string'
              && ((obj[attr].indexOf('{') > -1 && obj[attr].indexOf('}') > -1)
              || (obj[attr].indexOf('[') > -1 && obj[attr].indexOf(']') > -1))
          ) {
            // 属性值为JSON时
            try {
              const attrObj = JSON.parse(obj[attr]);
              if (attrObj instanceof Object) {
                newObj[attr] = removeEmptyField(attrObj);
              }
            } catch (e) {
              newObj[attr] = obj[attr];
            }
          } else {
            newObj[attr] = obj[attr];
          }
        }
      });
    }
    return newObj;
  } catch (e) {
    // todo
  }
};
