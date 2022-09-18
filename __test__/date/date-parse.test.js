import { dateParse } from '../../src/date/dateParse';

describe('dateParse入参为数字', () => {
  it('普通时间戳', () => {
    const time = new Date(2021, 2, 14, 23, 23, 23);
    const timeStamp = time.getTime();
    const result = dateParse(timeStamp);
    expect(result).toEqual(time);
  });

  it('无具体时间的时间戳', () => {
    const time = new Date(2021, 2, 14);
    const timeStamp = time.getTime();
    const result = dateParse(timeStamp);
    expect(result).toEqual(time);
  });
});

describe('dateParse入参为对象', () => {
  it('普通对象', () => {
    const time = new Date(2021, 2, 14, 23, 23, 23);
    const result = dateParse(time);
    expect(result).toEqual(time);
  });

  it('无具体时间的对象', () => {
    const time = new Date(2021, 2, 14);
    const result = dateParse(time);
    expect(result).toEqual(time);
  });
});

describe('dateParse入参为字符串', () => {
  it('普通时间字符串', () => {
    const time = '2021-4-19 18:44:30';
    const result = dateParse(time);
    const validator = new Date(2021, 3, 19, 18, 44, 30);
    expect(result).toEqual(validator);
  });

  it('无具体时间的时间字符串', () => {
    const time = '2021-4-19';
    const result = dateParse(time);
    const validator = new Date(2021, 3, 19);
    expect(result).toEqual(validator);
  });
});

describe('dateParse入参为空值', () => {
  it('入参为空值', () => {
    const time = new Date();
    const result = dateParse();
    expect(result).toEqual(time);
  });
});
