import { randomStr } from '../constant';

/**
 * @description 获取随机字符串
 * @param { number } length 随机字符串的长度
 * @return { string } 获取的随机字符串
 */
export const getRandomStr = (length: number) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += randomStr.charAt(Math.floor(Math.random() * randomStr.length));
  }
  return result;
};
