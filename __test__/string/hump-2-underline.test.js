import { hump2Underline } from '../../src/string/hump2Underline';

describe('hump2Underline', () => {
  it('一个单词驼峰转下划线', () => {
    const result = hump2Underline('da');
    expect(result).toBe('da');
  });

  it('一个字母驼峰转下划线', () => {
    const result = hump2Underline('d');
    expect(result).toBe('d');
  });

  it('两个单词驼峰转下划线', () => {
    const result = hump2Underline('daChui');
    expect(result).toBe('da_chui');
  });

  it('两个字母驼峰转下划线', () => {
    const result = hump2Underline('dC');
    expect(result).toBe('d_c');
  });

  it('多个单词驼峰转下划线', () => {
    const result = hump2Underline('daChuiNameIsWangZhen');
    console.log('result', result);
    expect(result).toBe('da_chui_name_is_wang_zhen');
  });

  it('多个字母驼峰转下划线', () => {
    const result = hump2Underline('dCNIWZ');
    expect(result).toBe('d_c_n_i_w_z');
  });
});
