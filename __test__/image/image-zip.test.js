import { imageZip } from '../../src/image/imageZip';

describe('imageZip ', () => {
  it('oss链接加参', () => {
    const result = imageZip(
      'https://s1.billionbottle.com/billionbottle/activity/0ec317c509d9b9fa76ce845b9742e961_1920x1080.jpg',
      300,
    );
    expect(result).toBe(
      'https://s1.billionbottle.com/billionbottle/activity/0ec317c509d9b9fa76ce845b9742e961_1920x1080.jpg?x-oss-process=image/resize,w_300',
    );
  });

  it('oss链接加参且已存在对应参数', () => {
    const result = imageZip(
      'https://s1.billionbottle.com/billionbottle/activity/0ec317c509d9b9fa76ce845b9742e961_1920x1080.jpg?x-oss-process=image/resize,w_300',
      300,
    );
    expect(result).toBe(
      'https://s1.billionbottle.com/billionbottle/activity/0ec317c509d9b9fa76ce845b9742e961_1920x1080.jpg?x-oss-process=image/resize,w_300',
    );
  });

  it('非oss链接加参', () => {
    const result = imageZip('https://pic1.zhimg.com/v2-52fcf1ea216d24645558b581ad6e69f9_1440w.jpg?source=172ae18b');
    expect(result).toBe('https://pic1.zhimg.com/v2-52fcf1ea216d24645558b581ad6e69f9_1440w.jpg?source=172ae18b');
  });
});
