import Clipboard from 'clipboard';

// TODO 单元测试
/**
 * @description 复制内容到剪贴板
 * @param { string } content 复制的内容
 * @param { string } selector 元素的选择器
 */
export const copyIntoClipboard = (content: string, selector: string) => {
  try {
    const clipboard = new Clipboard(selector, {
      text() {
        return content;
      },
    });
    clipboard.on('success', () => {
      // 释放内存
      clipboard.destroy();
    });
    clipboard.on('error', (e: Event) => {
      window.console.error('复制失败', e);
      // 释放内存
      clipboard.destroy();
    });
  } catch (err) {
    // 使用 console.error 打印，方便被捕获
    /* eslint-disable no-console */
    console.error('err', err);
  }
};
