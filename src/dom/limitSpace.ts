import { EventInterface } from '../../index';

// TODO 单元测试
/**
 * @description 空格输入限制
 * @param { EventInterface } e 事件对象
 */
export const limitSpace = (e: EventInterface) => {
  if (e.keyCode === 32) {
    // 检测是否是复制粘贴操作
    if (e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
  }
};
