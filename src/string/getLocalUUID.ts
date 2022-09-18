// 因为没有与 uuid 匹配的类型声明文件，所以这里使用了 ts-ignore
// @ts-ignore
import v5 from 'uuid/dist/v5';
import { getRandomStr } from './getRandomStr';

/**
 * @description 获取本地的唯一标识
 * @return { string } 唯一标识
 */
export const getLocalUUID = () => {
  let performanceRandom;
  if (window.performance && typeof window.performance.now === 'function') {
    performanceRandom = window.performance.now();
  } else {
    performanceRandom = getRandomStr(16);
  }
  return v5(`${getRandomStr(5)}-${Date.now()}-${performanceRandom}`, v5.URL);
};
