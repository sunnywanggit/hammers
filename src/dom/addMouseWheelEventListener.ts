// TODO 单元测试
import { AddMouseWheelEventListenerElement } from '../../index';

/**
 * @description 添加鼠标滚轮监听事件
 * @param { Element } elem 监听对象
 * @param { Function } listener 事件回调
 */

export const addMouseWheelEventListener = (
  elem: AddMouseWheelEventListenerElement,
  listener: EventListener,
) => {
  /* IE、Opera注册事件 */
  if ((document as any).attachEvent) {
    // eslint-disable-next-line no-unused-expressions
    elem.attachEvent && elem.attachEvent('onmousewheel', listener);
  }
  // Firefox使用addEventListener添加滚轮事件
  if ((document as any).addEventListener) { // firefox
    elem.addEventListener('DOMMouseScroll', listener, false);
  }
  // Safari与Chrome属于同一类型
  elem.addEventListener('mousewheel', listener);
};
