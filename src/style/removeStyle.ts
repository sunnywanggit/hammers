/**
 * @description 移除指定id的样式
 * @param { string } id 需要被移除样式的元素id
 */
export const removeStyle = (id:string) => {
  const elem = document.getElementById(id);
  if (elem) {
    const head = document.getElementsByTagName('head')[0];
    head.removeChild(elem);
  }
};
