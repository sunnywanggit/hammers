import { dateFormat } from '../../src/date/dateFormat';

describe('dateFormat入参为对象', () => {
  const time = new Date(2021, 2, 14, 23, 23, 23);

  it('yyyy-MM-dd hh:mm:ss', () => {
    const result = dateFormat(time, 'yyyy-MM-dd hh:mm:ss');
    expect(result).toBe('2021-03-14 23:23:23');
  });

  it('yyyy-M-dd hh:mm:ss', () => {
    const result = dateFormat(time, 'yyyy-M-dd hh:mm:ss');
    expect(result).toBe('2021-3-14 23:23:23');
  });

  it('YYYY-MM-dd hh:mm:ss', () => {
    const result = dateFormat(time, 'YYYY-MM-dd hh:mm:ss');
    expect(result).toBe('2021-03-14 23:23:23');
  });

  it('YYYY-MM-DD hh:mm:ss', () => {
    const result = dateFormat(time, 'YYYY-MM-DD hh:mm:ss');
    expect(result).toBe('2021-03-14 23:23:23');
  });

  it('YYYY-MM-DD HH:mm:ss', () => {
    const result = dateFormat(time, 'YYYY-MM-DD HH:mm:ss');
    expect(result).toBe('2021-03-14 23:23:23');
  });

  it('yyyy年MM月dd日 hh:mm:ss', () => {
    const result = dateFormat(time, 'yyyy年MM月dd日 hh:mm:ss');
    expect(result).toBe('2021年03月14日 23:23:23');
  });

  it('yyyy年M月dd日 hh:mm:ss', () => {
    const result = dateFormat(time, 'yyyy年M月dd日 hh:mm:ss');
    expect(result).toBe('2021年3月14日 23:23:23');
  });

  it('yyyy/MM/dd hh:mm:00', () => {
    const result = dateFormat(time, 'yyyy/MM/dd hh:mm:00');
    expect(result).toBe('2021/03/14 23:23:00');
  });

  it('yyyy/MM/dd hh:00:00', () => {
    const result = dateFormat(time, 'yyyy/MM/dd hh:00:00');
    expect(result).toBe('2021/03/14 23:00:00');
  });

  it('yyyy/MM/dd', () => {
    const result = dateFormat(time, 'yyyy/MM/dd');
    expect(result).toBe('2021/03/14');
  });

  it('hh:mm:ss', () => {
    const result = dateFormat(time, 'hh:mm:ss');
    expect(result).toBe('23:23:23');
  });
});

describe('dateFormat入参为数字', () => {
  it('普通时间戳', () => {
    const time = new Date(2021, 2, 14, 23, 23, 23);
    const timeStamp = time.getTime();
    const result = dateFormat(timeStamp, 'yyyy-MM-dd hh:mm:ss');
    expect(result).toBe('2021-03-14 23:23:23');
  });

  it('无具体时间的时间戳', () => {
    const time = new Date(2021, 2, 14);
    const timeStamp = time.getTime();
    const result = dateFormat(timeStamp, 'yyyy-MM-dd hh:mm:ss');
    expect(result).toEqual('2021-03-14 00:00:00');
  });
});

describe('dateFormat入参为字符串', () => {
  it('普通时间字符串', () => {
    const time = '2021-4-19 18:44:30';
    const result = dateFormat(time, 'yyyy-MM-dd hh:mm:ss');
    expect(result).toEqual('2021-04-19 18:44:30');
  });

  it('无具体时间的时间字符串', () => {
    const time = '2021-4-19';
    const result = dateFormat(time, 'yyyy-MM-dd hh:mm:ss');
    expect(result).toEqual('2021-04-19 00:00:00');
  });
});

describe('dateFormat入参为特殊值', () => {
  it('入参为空值', () => {
    const result = dateFormat('', 'yyyy-MM-dd hh:mm:ss');
    expect(result).toBeTruthy();
  });

  it('入参为null', () => {
    const result = dateFormat(null, 'yyyy-MM-dd hh:mm:ss');
    expect(result).toBeTruthy();
  });
});
