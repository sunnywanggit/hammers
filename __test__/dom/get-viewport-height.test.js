import { getViewportHeight } from '../../src/dom/getViewportHeight';

describe('getViewportHeight', () => {
  it('获取当前视窗高度', () => {
    const result = getViewportHeight();
    console.log('result', result);
    // 如果当前视窗的高度存在则视为测试处通过
    expect(result).toBeTruthy();
  });
});
