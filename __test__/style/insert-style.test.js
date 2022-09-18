import { insertStyle } from '../../src/style/insertStyle';

describe('insertStyle', () => {
  it('测试样式嵌入', () => {
    document.body.innerHTML = '<button data-testid=\'button\' class=\'button\'>submit</button>';
    insertStyle({ '.button': { color: 'red' } }, 'button');
    const result = document.getElementById('button');
    expect(result).toBeTruthy();
  });
});
