import { urlAnalyze } from '../url/urlAnalyze';
import { isImageOnOss } from './isImageOnOss';
import { ossAssign } from './ossAssign';
import { urlRestore } from '../url/urlRestore';
import { isSupportWebp } from './isSupportWebp';
import { ossKeyName } from '../constant';

/**
 * @desc 将图片进行压缩，自动设定压缩宽度
 * @param { string } url 图片 url 链接
 * @param { number } width 图片宽度（如果有强制性宽度则加上强制性宽度）
 * @return { string } 设置完图片压缩参数后的图片链接
 */
export const imageZip = (url:string, width = 750) => {
  // 如果图片链接非oss链接，直接返回
  if (!isImageOnOss(url)) {
    return url;
  }
  // 先进行url分析
  const analyzes = urlAnalyze(url);
  // 强制缩放、格式转换及水印覆盖
  const { query } = analyzes;
  const ossOptions = query[ossKeyName] || [{ name: 'image', values: [] }];
  // 强制宽度缩放
  ossAssign(ossOptions, {
    name: 'resize',
    values: [
      {
        name: 'w', value: Math.max(parseInt(String(width), 10) || 0, 0) || 750,
      },
    ],
  });
  // 强制格式转换为webp，前提是支持webp
  if (isSupportWebp) {
    ossAssign(ossOptions, {
      name: 'format',
      values: [
        {
          name: 'webp', value: '',
        },
      ],
    });
  }
  query[ossKeyName] = ossOptions;
  return urlRestore(analyzes);
};
