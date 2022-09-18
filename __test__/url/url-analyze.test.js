import { urlAnalyze } from '../../src/url/urlAnalyze';

describe('urlAnalyze 特殊值', () => {
  it('空链接', () => {
    const result = urlAnalyze('');
    // console.log('result', result);
    const validator = {
      fullPath: '',
      query: {},
      hash: '',
    };
    expect(result).toEqual(validator);
  });
});

describe('urlAnalyze 外部链接', () => {
  it('测试外部链接,无query值及hash值', () => {
    const result = urlAnalyze('https://fanyi.baidu.com/');
    const validator = {
      fullPath: 'https://fanyi.baidu.com/',
      query: {},
      hash: '',
    };
    expect(result).toEqual(validator);
  });

  it('测试外部链接,有query值无hash值', () => {
    const result = urlAnalyze('https://fanyi.baidu.com/?aldtype=16047');
    const validator = {
      fullPath: 'https://fanyi.baidu.com/',
      query: { aldtype: '16047' },
      hash: '',
    };
    expect(result).toEqual(validator);
  });

  it('测试外部链接,无query值有hash值', () => {
    const result = urlAnalyze('https://fanyi.baidu.com/#en/zh/synchronous');
    const validator = {
      fullPath: 'https://fanyi.baidu.com/',
      query: {},
      hash: 'en/zh/synchronous',
    };
    expect(result).toEqual(validator);
  });

  it('测试外部链接,单个query值及hash值', () => {
    const result = urlAnalyze('https://fanyi.baidu.com/?aldtype=16047#en/zh/synchronous');
    const validator = {
      fullPath: 'https://fanyi.baidu.com/',
      query: { aldtype: '16047' },
      hash: 'en/zh/synchronous',
    };
    expect(result).toEqual(validator);
  });

  it('测试外部链接,多个query值单个hash值', () => {
    const result = urlAnalyze('https://fanyi.baidu.com/?aldtype=16047&build=1#en/zh/synchronous');
    console.log('result', result);
    const validator = {
      fullPath: 'https://fanyi.baidu.com/',
      query: { aldtype: '16047', build: '1' },
      hash: 'en/zh/synchronous',
    };
    expect(result).toEqual(validator);
  });
});

describe('urlAnalyze 外部链接', () => {
  it('测试内部连接,无query值无hash值', () => {
    const result = urlAnalyze('https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg');
    console.log('result', result);
    const validator = {
      fullPath: 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      query: {},
      hash: '',
    };
    expect(result).toEqual(validator);
  });

  it('测试内部连接,有query值无hash值', () => {
    const result = urlAnalyze('https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg?width=100&height=100&x-oss-process=image');
    const validator = {
      fullPath: 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      query: { width: '100', height: '100', 'x-oss-process': [{ name: 'image', values: [] }] },
      hash: '',
    };
    expect(result).toEqual(validator);
  });

  it('测试内部连接,无query值有hash值', () => {
    const result = urlAnalyze('https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg#en/zh/synchronous');
    const validator = {
      fullPath: 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      query: {},
      hash: 'en/zh/synchronous',
    };
    expect(result).toEqual(validator);
  });

  it('测试内部连接,有query值有hash值', () => {
    const result = urlAnalyze('https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg?width=100&height=100&x-oss-process=image#en/zh/synchronous');
    const validator = {
      fullPath: 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      query: { width: '100', height: '100', 'x-oss-process': [{ name: 'image', values: [] }] },
      hash: 'en/zh/synchronous',
    };
    expect(result).toEqual(validator);
  });

  it('测试内部复杂连接,有query有hash', () => {
    const result = urlAnalyze('https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg?width=100&height=200&x-oss-process=image/resize,w_500,limit_0#en/zh/synchronous');
    const validator = {
      fullPath: 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      query: {
        width: '100',
        height: '200',
        'x-oss-process': [
          { name: 'image', values: [] },
          { name: 'resize', values: [{ name: 'w', value: '500' }, { name: 'limit', value: '0' }] },
        ],
      },
      hash: 'en/zh/synchronous',
    };
    expect(result).toEqual(validator);
  });
});
