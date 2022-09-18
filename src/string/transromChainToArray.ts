/**
 * @description 将链式语法转换成数组 'a.b.c' -> ['a','b','c']
 * @param {string} chain 链式语法
 */
export const transformChainToArray = (chain: string) => {
  // 若是数组，则直接返回
  if (Array.isArray(chain)) return chain;
  // 若不是数组，则变成数组 'a.b.c' -> ['a','b','c']
  return chain.replace(/\[/g, '.').replace(/\]/g, '').split('.');
};
