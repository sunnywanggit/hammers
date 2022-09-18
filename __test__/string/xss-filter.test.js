import { xssFilter } from '../../src/string/xssFilter';

describe('xssFilter', () => {
  it('过滤普通的script注入', () => {
    const result = xssFilter('<script src=http://3w.org/XSS/xss.js></script>');
    const validator = '&lt;script src=http://3w.org/XSS/xss.js&gt;&lt;/script&gt;';
    expect(result).toBe(validator);
  });

  it('过滤table攻击', () => {
    const result = xssFilter('<table background="javascript:alert(\'XSS\')">');
    const validator = '<table>';
    expect(result).toBe(validator);
  });

  it('过滤alert攻击', () => {
    const result = xssFilter('<script>alert("弹出我")</script>');
    const validator = '&lt;script&gt;alert("弹出我")&lt;/script&gt;';
    expect(result).toBe(validator);
  });

  it('过滤iframe攻击', () => {
    const result = xssFilter('<iframe src="https://www.baidu.com"></iframe>');
    const validator = '&lt;iframe src="https://www.baidu.com"&gt;&lt;/iframe&gt;';
    expect(result).toBe(validator);
  });
});
