import { getUrlParams } from '../../src/url/getUrlParams';

describe('getUrlParams', () => {
  it('获取无query链接的查询参数', () => {
    const result = getUrlParams('http://localhost:8080/admin/version/reinforce');
    expect(result).toEqual({});
  });

  it('获取有query链接的查询参数', () => {
    const result = getUrlParams('http://localhost:8080/admin/version/reinforce?id=6045e903558f8b52c878e1db');
    expect(result).toEqual({ id: '6045e903558f8b52c878e1db' });
  });

  it('获取带有哈希链接的查询参数', () => {
    const result = getUrlParams('https://fanyi.baidu.com/?aldtype=16047#en/zh/synchronous');
    expect(result).toEqual({ aldtype: '16047' });
  });
});
