import { transformChainToArray } from '../string/transromChainToArray';

/**
 * @description 链式获取值
 * @param {any} obj 获取值的源
 * @param {string} keys 链式语法
 */
export const deepGet = <T>(obj: any, keys: string): T | undefined => {
  let result = obj;
  if (!result) return;
  const arrKeys = transformChainToArray(keys);
  for (let i = 0; i < arrKeys.length; i += 1) {
    const key = arrKeys[i];
    if (!result[key]) {
      result = result[key];
      break;
    }
    result = result[key];
  }
  // eslint-disable-next-line consistent-return
  return result;
};
