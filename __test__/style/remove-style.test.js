import { screen } from '@testing-library/dom';
import { removeStyle } from '../../src/style/removeStyle';

describe('removeStyle', () => {
  it('移除样式', () => {
    document.head.innerHTML = '<div id=\'test\'>remove style</div>';
    removeStyle('test');
    const result = document.getElementById('__test__');
    expect(result).toBeNull();
  });
});
