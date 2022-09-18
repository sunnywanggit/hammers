import { getRandomStr } from '../../src/string/getRandomStr';

describe('getRandomStr', () => {
  it('获取长度为0的随机字符串', () => {
    const result = getRandomStr(0);
    expect(result.length).toBe(0);
  });

  it('获取长度为3的随机字符串', () => {
    const result = getRandomStr(3);
    expect(result.length).toBe(3);
  });

  it('获取长度为100的随机字符串', () => {
    const result = getRandomStr(100);
    expect(result.length).toBe(100);
  });
});
