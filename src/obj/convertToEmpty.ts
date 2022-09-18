import { ObjectInterface } from '../../index';

/**
 * @description 将对象所有属性的值改为空（改变的是对象的引用，暂不支持改变嵌套对象）
 * @param { Object } obj 目标对象
 * 注意：该函数没有返回值，改变的是对象的引用！！！
 */
export const convertToEmpty = (obj: ObjectInterface) => {
  Object.keys(obj).forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    obj[item] = '';
  });
};
