import { compareVersion } from '../../src/string/compareVersion';

describe('compareVersion', () => {
  it('v1 === v2', () => {
    const result = compareVersion('1.2.3', '1.2.3');
    expect(result).toBe(0);
  });

  it('v1 > v2', () => {
    const result = compareVersion('1.2.4', '1.2.3');
    expect(result).toBe(1);
  });

  it('v1 < v2', () => {
    const result = compareVersion('1.2.4', '1.2.5');
    expect(result).toBe(-1);
  });
});
