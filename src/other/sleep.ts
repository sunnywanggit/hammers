/**
 * @description 睡眠魔法，ms 毫秒后执行后续操作
 * @param {number} ms 毫秒数
 */
export const sleep = (ms: number) => new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});
