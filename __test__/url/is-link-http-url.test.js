import { isLinkHttpUrl } from '../../src/url/isLinkHttpUrl';

describe('isLinkHttpUrl', () => {
  it('http链接', () => {
    const result = isLinkHttpUrl('http://big.bb.local/admin/images');
    expect(result).toBeTruthy();
  });

  it('https链接', () => {
    const result = isLinkHttpUrl('https://fanyi.baidu.com');
    expect(result).toBeTruthy();
  });

  it('原生统跳链接', () => {
    const result = isLinkHttpUrl('bba://xxxx.com');
    expect(result).toBeFalsy();
  });

  it('bbf统跳链接', () => {
    const result = isLinkHttpUrl('bbf://xxxx.com');
    expect(result).toBeFalsy();
  });

  it('bbn统跳链接', () => {
    const result = isLinkHttpUrl('bbn://xxxx.com');
    expect(result).toBeFalsy();
  });

  it('bbmp统跳链接', () => {
    const result = isLinkHttpUrl('bbmp://xxxx.com');
    expect(result).toBeFalsy();
  });
});
