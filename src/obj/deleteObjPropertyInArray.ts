import { ObjectInterface } from '../../index';

/**
 * @description 删除数组中对象的某一个属性(改变的是对象的引用）
 * @param { Array } array 数组对象
 * @param { string } property 要删除的属性名
 */
export const deleteObjPropertyInArray = (array: Array<ObjectInterface>, property:string) => {
  array.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    delete item[property];
  });
};
