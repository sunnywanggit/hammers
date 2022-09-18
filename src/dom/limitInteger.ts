// TODO 单元测试
import { integerLimitKey } from '../constant';
import { EventInterface } from '../../index';

/**
 * @description 整型输入限制
 * @param { EventInterface } e 事件对象
 */

export const limitInteger = (e: EventInterface) => {
  if (!integerLimitKey.includes(e.keyCode)) {
    // 检测是否是复制粘贴操作
    if (e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
  }
};
