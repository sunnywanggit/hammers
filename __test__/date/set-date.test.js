import { getOffsetDate } from '../../src/date/getOffsetDate';
import { dateFormat } from '../../src/date/dateFormat';

describe('setDate', () => {
  const currentDate = new Date();

  it('-1', () => {
    const result = getOffsetDate(-1);
    const validator = dateFormat(new Date(currentDate.getTime() - 24 * 60 * 60 * 1000), 'yyyy-MM-dd'); // 前一天
    expect(result).toBe(validator);
  });

  it('0', () => {
    const result = getOffsetDate(0);
    const validator = dateFormat(currentDate, 'yyyy-MM-dd');
    expect(result).toBe(validator);
  });

  it('1', () => {
    const result = getOffsetDate(1);
    const validator = dateFormat(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000), 'yyyy-MM-dd'); // 后一天
    expect(result).toBe(validator);
  });

  it('2', () => {
    const result = getOffsetDate(2);
    const validator = dateFormat(new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd'); // 后一天
    expect(result).toBe(validator);
  });

  it('空值', () => {
    const result = getOffsetDate();
    const validator = dateFormat(currentDate, 'yyyy-MM-dd');
    expect(result).toBe(validator);
  });
});
