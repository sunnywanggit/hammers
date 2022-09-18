import { getLocalUUID } from '../../src/string/getLocalUUID';

describe('getLocalUUID', () => {
  it('获取唯一标识符', () => {
    const result = getLocalUUID();
    expect(result).toBeTruthy();
  });
});
