/**
 * @description 数组去重
 * @param { Array } array 原数组
 * @returns { Array } 去重之后的数组
 */

export function uniqueArr(array:Array<any>) {
  return Array.from(new Set(array));
}
