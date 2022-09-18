import { downloadFile } from '../../src/url/downloadFile';

describe('downloadFile', () => {
  it('download without params', () => {
    // https://github.com/jsdom/jsdom/issues/2112
    delete window.location;
    window.location = {}; // or stub/spy etc.
    downloadFile('https://s1.billionbottle.com/billionbottle/activity/0ec317c509d9b9fa76ce845b9742e961_1920x1080.jpg', {});
    expect(window.location.href).toBe('https://s1.billionbottle.com/billionbottle/activity/0ec317c509d9b9fa76ce845b9742e961_1920x1080.jpg?');
  });

  it('download with params', () => {
    delete window.location;
    window.location = {};
    downloadFile('https://s1.billionbottle.com/billionbottle/activity/0ec317c509d9b9fa76ce845b9742e961_1920x1080.jpg', { width: 100 });
    expect(window.location.href).toBe('https://s1.billionbottle.com/billionbottle/activity/0ec317c509d9b9fa76ce845b9742e961_1920x1080.jpg?width=100');
  });
});
