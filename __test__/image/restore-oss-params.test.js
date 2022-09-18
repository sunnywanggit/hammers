import { restoreOSSParams } from '../../src/image/restoreOSSParams';

describe('restoreOSSParams ', () => {
  it('无参数restore', () => {
    const result = restoreOSSParams(
      'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
    );
    const validator = 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg';
    expect(result).toBe(validator);
  });

  it('参数为空对象', () => {
    const result = restoreOSSParams(
      'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      {},
    );
    const validator = 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg';
    expect(result).toBe(validator);
  });

  it('单参数restore', () => {
    const result = restoreOSSParams(
      'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      { width: '100' },
    );
    const validator = 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg?width=100';
    expect(result).toBe(validator);
  });

  it('多参数restore', () => {
    const result = restoreOSSParams(
      'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      { width: '100', height: '200' },
    );
    const validator = 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg?width=100&height=200';
    expect(result).toBe(validator);
  });

  it('复杂参数restore', () => {
    const result = restoreOSSParams(
      'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg',
      {
        width: '100',
        height: '200',
        'x-oss-process': [
          { name: 'image', values: [] },
          { name: 'resize', values: [{ name: 'w', value: '500' }, { name: 'limit', value: '0' }] },
        ],
      },
    );
    const validator = 'https://s1.billionbottle.com/billionbottle/activity/a567c46a8f8c355d21c5b1f32fa0135b_1125x632.jpg?width=100&height=200&x-oss-process=image/resize,w_500,limit_0';
    expect(result).toBe(validator);
  });
});
