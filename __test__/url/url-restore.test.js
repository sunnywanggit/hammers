import { urlRestore } from '../../src/url/urlRestore';

describe('urlRestore', () => {
  it('测试外部链接,仅有一个query值', () => {
    const result = urlRestore({
      fullPath: 'https://fanyi.baidu.com/',
      query: { aldtype: '16047' },
      hash: 'en/zh/synchronous',
    });
    const validator = 'https://fanyi.baidu.com/?aldtype=16047#en/zh/synchronous';
    expect(result).toBe(validator);
  });

  it('测试外部链接,有多个query值', () => {
    const result = urlRestore({
      fullPath: 'https://fanyi.baidu.com/',
      query: { aldtype: '16047', build: '1' },
      hash: 'en/zh/synchronous',
    });
    const validator = 'https://fanyi.baidu.com/?aldtype=16047&build=1#en/zh/synchronous';
    expect(result).toBe(validator);
  });

  it('测试内部连接', () => {
    const result = urlRestore({
      fullPath: 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      query: { width: '100', height: '100', 'x-oss-process': [{ name: 'image', values: [] }] },
      hash: '',
    });
    const validator = 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg?width=100&height=100&x-oss-process=image';

    expect(result).toBe(validator);
  });
});
