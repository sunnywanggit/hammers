// TODO 单元测试
import { RemoveMouseWheelEventListenerElement } from '../../index';

/**
 * @description 移除鼠标滚轮监听事件
 * @param { RemoveMouseWheelEventListenerElement } elem 监听对象
 * @param { EventListener } listener 事件回调
 */

export const removeMouseWheelEventListener = (
  elem: RemoveMouseWheelEventListenerElement,
  listener: EventListener,
) => {
  /* IE、Opera注册事件 */
  if ((document as any).detachEvent) {
    // eslint-disable-next-line no-unused-expressions
    elem.detachEvent && elem.detachEvent('onmousewheel', listener);
  }
  // Firefox使用removeEventListener移除滚轮事件
  if ((document as any).removeEventListener) { // firefox
    elem.removeEventListener('DOMMouseScroll', listener, false);
  }
  // Safari与Chrome属于同一类型
  elem.removeEventListener('mousewheel', listener);
};
