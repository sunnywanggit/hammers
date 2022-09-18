/**
 * 比较两个版本号的大小
 * @param {string} v1
 * @param {string} v2
 * @return {number} v1>v2返回1 相等返回0 否则-1
 */

export const compareVersion = (v1:string, v2:string) => {
  // 先将版本号拆解
  const v1Codes = v1.split('.').map((val) => parseInt(val, 10));
  const v2Codes = v2.split('.').map((val) => parseInt(val, 10));
  for (let i = 0; i < v1Codes.length && i < v1Codes.length; i += 1) {
    if (v1Codes[i] > v2Codes[i]) {
      return 1;
    }
    if (v1Codes[i] < v2Codes[i]) {
      return -1;
    }
  }
  // 如果前几位都相等则比较各自长度
  if (v1Codes.length > v2Codes.length) {
    return 1;
  }
  if (v1Codes.length < v2Codes.length) {
    return -1;
  }
  return 0;
};
