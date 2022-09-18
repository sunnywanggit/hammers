// TODO 单元测试
/**
 * @description 当前浏览器是否支持webp
 * @return { boolean } 是否支持 webp
 */
export const isSupportWebp = (() => {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
  } catch (error) {
    return false;
  }
})();
