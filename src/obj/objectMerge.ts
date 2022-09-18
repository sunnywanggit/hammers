import { ObjectInterface } from '../../index';

/**
 * @description 合并两个对象，若是有相同的属性，后者会覆盖前者
 * @param { Object } target 目标对象
 * @param { Object } source 源对象
 * @returns { Object } merge 之后的对象
 */
export const objectMerge = (target:ObjectInterface, source:ObjectInterface) => {
  if (typeof target !== 'object') {
    // eslint-disable-next-line no-param-reassign
    target = {};
  }
  if (Array.isArray(source)) {
    return source.slice();
  }
  Object.keys(source).forEach((property) => {
    const sourceProperty = source[property];
    if (typeof sourceProperty === 'object') {
      // eslint-disable-next-line no-param-reassign
      target[property] = objectMerge(target[property], sourceProperty);
    } else {
      // eslint-disable-next-line no-param-reassign
      target[property] = sourceProperty;
    }
  });
  return target;
};
