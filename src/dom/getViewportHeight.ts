/**
 * @description 获取视窗高度
 * @return { number } 视窗高度
 */
export const getViewportHeight = () => {
  if (window.innerHeight) {
    return window.innerHeight;
  }
  if (document.compatMode === 'BackCompat') {
    return document.body.clientHeight;
  }
  return document.documentElement.clientHeight;
};
