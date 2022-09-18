import { ossAssign } from '../../src/image/ossAssign';

describe('ossAssign', () => {
  it('属性值不为空', () => {
    const ossOptions = [{ name: 'image', values: [{ width: 10 }] }];
    const childOption = { name: 'resize', values: [{ name: 'w' }] };
    ossAssign(ossOptions, childOption);
    const validator = [
      { name: 'image', values: [{ width: 10 }] },
      { name: 'resize', values: [{ name: 'w' }] },
    ];
    expect(ossOptions).toEqual(validator);
  });

  it('多属性', () => {
    const ossOptions = [{ name: 'image', values: [{ width: 10 }] }, { name: 'colors', values: [{ color: 'red' }] }];
    const childOption = { name: 'resize', values: [{ name: 'w' }] };
    ossAssign(ossOptions, childOption);
    const validator = [
      { name: 'image', values: [{ width: 10 }] }, { name: 'colors', values: [{ color: 'red' }] },
      { name: 'resize', values: [{ name: 'w' }] },
    ];
    expect(ossOptions).toEqual(validator);
  });

  it('属性值空', () => {
    const ossOptions = [{ name: 'image', values: [] }];
    const childOption = { name: 'resize', values: [] };
    ossAssign(ossOptions, childOption);
    const validator = [
      { name: 'image', values: [] },
      { name: 'resize', values: [] },
    ];
    expect(ossOptions).toEqual(validator);
  });
});
