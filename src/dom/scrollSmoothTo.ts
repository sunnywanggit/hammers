// TODO 单元测试
import { removeMouseWheelEventListener } from './removeMouseWheelEventListener';
import { addMouseWheelEventListener } from './addMouseWheelEventListener';

/**
 * @description 将容器的内容平滑地滚动到指定位置
 * @param { ElementInterface } elem 待滚动的容器
 * @param { number } top 要到达的高度
 */

export interface ElementInterface extends HTMLElement{
  attachEvent?(event: string, listener: EventListener): boolean;

  detachEvent?(event: string, listener: EventListener): void;

  scrollTop: number;
}

export const scrollSmoothTo = (elem: ElementInterface, top: number) => {
  // 为了兼容某些机型滚动的根元素是body而不是html，这里需要做特殊处理，寻找出有效的滚动容器
  let container: ElementInterface;
  if (elem === document.documentElement || elem === document.body) {
    const { documentElement, body } = document;
    if (documentElement.scrollTop > 0) {
      container = documentElement;
    } else if (body.scrollTop > 0) {
      container = body;
    } else {
      documentElement.scrollTop = 1;
      body.scrollTop = 1;
      if (documentElement.scrollTop === 1) {
        container = documentElement;
      } else if (body.scrollTop === 1) {
        container = body;
      } else {
        container = elem;
      }
      documentElement.scrollTop = 0;
      body.scrollTop = 0;
    }
  } else {
    container = elem;
  }
  // 不支持平滑滚动的话就用原生js处理平滑滚动...
  if (typeof window.getComputedStyle(container).scrollBehavior === 'undefined') {
    // 当前滚动高度
    let currentScrollTop = container.scrollTop;
    // 如果已经相等则无需滚动
    if (Math.abs(currentScrollTop - top) < 1) return;
    let scrollId: number;
    // 计算步长，必须在33帧内滚动完毕
    let step = 24;
    if ((top - currentScrollTop) / step > 33) {
      step = Math.ceil((top - currentScrollTop) / 33);
    }
    let onTouchStart: EventListener; let onMouseWheel: EventListener;
    // H5 端滚动
    if ('ontouchstart' in window) {
      // 滚动前监听触摸事件，发生触摸时停止滚动
      onTouchStart = () => {
        window.cancelAnimationFrame(scrollId);
        document.removeEventListener('touchstart', onTouchStart);
      };
      document.addEventListener('touchstart', onTouchStart);
    } else {
      // 滚动前监听滚轮事件，发生滚动时停止滚动
      onMouseWheel = () => {
        window.cancelAnimationFrame(scrollId);
        removeMouseWheelEventListener(container, onMouseWheel);
      };
      addMouseWheelEventListener(container, onMouseWheel);
    }
    // 每一帧滚动处理
    const scroll = () => {
      let scrollTop = currentScrollTop;
      if (scrollTop < top) {
        scrollTop += step;
        if (scrollTop > top) {
          scrollTop = top;
        }
      } else {
        scrollTop -= step;
        if (scrollTop < top) {
          scrollTop = top;
        }
      }
      // eslint-disable-next-line no-param-reassign
      container.scrollTop = scrollTop;
      currentScrollTop = container.scrollTop;
      if ('ontouchstart' in window) {
        if (Math.abs(currentScrollTop - scrollTop) >= 1 || Math.abs(currentScrollTop - top) < 1) {
          // 如果设置的值和获取的值相差超过1则代表滚动超出边界，立即停止
          document.removeEventListener('touchstart', onTouchStart);
          return;
        }
        // eslint-disable-next-line max-len
      } else if (Math.abs(currentScrollTop - scrollTop) >= 1 || Math.abs(currentScrollTop - top) < 1) {
        // 如果设置的值和获取的值相差超过1则代表滚动超出边界，立即停止
        removeMouseWheelEventListener(container, onMouseWheel);
        return;
      }
      scrollId = window.requestAnimationFrame(scroll);
    };
    scroll();
  } else {
    container.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
};
