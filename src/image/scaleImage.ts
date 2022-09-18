// 单元测试
import { getLocalImageBase64 } from './getLocalImageBase64';

/**
 * @description 进行图片缩放
 * @param { Object } file
 * @param { number } maxWidth 最大宽度
 * @param { number } maxHeight 最大高度
 */
export const scaleImage = async (file: File, maxWidth: number, maxHeight: number) => {
  // 先进行图片宽高判断，如果符合要求则直接返回
  const base64 = await getLocalImageBase64(file);
  const image = new Image();
  await new Promise((resolve) => {
    if (typeof base64 === 'string') {
      image.src = base64;
    }
    image.onload = resolve;
  });
  if (
    (!(maxWidth > 0) || image.width <= maxWidth)
      && (!(maxHeight > 0) || image.height <= maxHeight)
  ) {
    return { file, base64 };
  }
  // 如果图片宽高超过了最大值则进行重绘，我们计算最大宽度和最小宽度的等比缩放最小值
  const widthScale = maxWidth > 0 ? maxWidth / image.width : 1;
  const heightScale = maxHeight > 0 ? maxHeight / image.height : 1;
  const scale = Math.min(widthScale, heightScale);
  // 计算完缩放值之后开始计算画布大小
  const canvasWidth = Math.round(image.width * scale);
  const canvasHeight = Math.round(image.height * scale);
  // 生成一张画布
  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  // 开始作画
  const ctx = canvas.getContext('2d');
  // eslint-disable-next-line no-unused-expressions
  ctx && ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
  // 计算base64
  const newBase64 = canvas.toDataURL(file.type);
  // 将base64转成文件
  const arr = newBase64.split(',');
  const bStr = atob(arr[1]);
  const bStrLength = bStr.length;
  const u8arr = new Uint8Array(bStrLength);
  for (let n = 0; n < bStrLength; n += 1) {
    u8arr[n] = bStr.charCodeAt(n);
  }
  // 将结果返回
  return {
    file: new File([u8arr], file.name, { type: file.type }),
    base64: newBase64,
  };
};
