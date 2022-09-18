
## 使用方法

```js
import { dateFormat } from '@bb/hammers';
// 或者
import * as hammers from '@bb/hammers';
hammers.deteFromat();
```

## 函数介绍

### Array 相关
**binarySearch**

二分法查找数组中的指定元素

* 入参
```js
{ Array } arr 原数组
{ string } target 查找的元素
```

* 返回值
```js
{ number } 要查找元素的数组下标
```
**uniqueArr**

数组去重

* 入参
```js
{ Array } array 原数组
```

* 返回值
```js
{ Array } 去重之后的数组
```
### Date 相关
**dateFormat** 

格式化日期

* 入参
```js
{ number | string | Date } date 日期
{ string } fmt 格式化方式(可参照 dayjs 规则)
```

* 返回值
```js
{ string } 格式化之后的时间字符串
```

**dateParse**

将时间字符串|时间|Date对象戳转换成时间

* 入参
```js
{ string | number | Object } date 日期
```

* 返回值
```js
{ Date } Date 对象
```

**getOffsetDate**

返回设置的指定日期

* 入参
```js
{ number } d 天数 1明天 0今天 -1昨天(默认为0)
```

* 返回值
```js
{ string } 指定日期的时间字符串
```  

### Dom 相关
**addMouseWheelEventListener**

添加鼠标滚轮监听事件

* 入参
```js
{ Element } elem 监听对象
{ Function } listener 事件回调
```

* 返回值
```js
无
```

**getViewportHeight**

获取视窗高度

* 入参
```js
无
```

* 返回值
```js
{ number } 视窗高度
```

**limitFloat**

浮点型输入限制

* 入参
```js
{ EventInterface } e 事件对象
```

* 返回值
```js
无
```

**limitInteger**

整型输入限制

* 入参
```js
{ EventInterface } e 事件对象
```

* 返回值
```js
无
```

**limitSpace**

空格输入限制

* 入参
```js
{ EventInterface } e 事件对象
```

* 返回值
```js
无
```

**removeMouseWheelEventListener** 

移除鼠标滚轮监听事件

* 入参
```js
interface RemoveMouseWheelEventListenerElement extends Element {
    detachEvent?(event: string, listener: EventListener): void;
}

{ RemoveMouseWheelEventListenerElement } elem 监听对象
{ EventListener } listener 事件回调
```

* 返回值
```js
无
```

**scrollSmoothTo**

将容器的内容平滑地滚动到指定位置

* 入参
```js
{ ElementInterface } elem 待滚动的容器
{ number } top 要到达的高度
```

* 返回值
```js
无
```

### Image 相关

**getLocalImageBase64**

获取本地图片base64码

* 入参
```js
{ Blob } file 图片
```

* 返回值
```js
{ Promise<string> } 图片 base64 编码
```

**imageZip**

将图片进行压缩，自动设定压缩宽度

* 入参
```js
{ string } url 图片url
{ number } width 图片宽度 (默认值为750)
```

* 返回值
```js
{ string } 设置完图片压缩参数后的图片链接
```

**isImageOnOss**

图片是否存储在oss上&&图片链接是否是我们的内部链接

* 入参
```js
{ string } url 图片url
```

* 返回值
```js
{ boolean } 链接是否存在于oss上
```

**isSupportWebp**

判断当前浏览器是否支持webp

* 入参
```js
无
```

* 返回值
```js
{ boolean } 是否支持 webp
```

**ossAssign**

将一级子属性融合进oss属性中

* 入参
```js
{ Array } options oss属性
{ Object } childOption 一级子属性
```

* 返回值
```js
{ Array } 含有属性对象的数组
```

**restoreOSSParams**

将getOSSParams解析的结果还原至 url 中

* 入参
```js
{ string } url 原链接
{ Object } query 参数对象
```

* 返回值
```js
{ string } 融合参数之后的 url 链接
```

**scaleImage**

进行图片缩放

* 入参
```js
{ Object } file 图片
{ number } maxWidth 最大宽度
{ number } maxHeight 最大高度
```

* 返回值
```js
{ Object } 文件对象
```

### Number 相关
**centToYuan**

分转换成元

* 参数
```js
{ number } num 需要被转换的数值
```

* 返回值
```js
{ string } 转换完成之后的值
```

**toFixed**

保留指定小数位数

* 参数
```js
{ number } number 需要保留指定小数位数的值
{ number } digit 小数位数
```

* 返回值
```js
{ number } 小数位数保留成功之后的值
```

**注意：** 该函数默认保留两位小数！

**toPrice**

将数字转换成价格

* 入参
```js
{ number | string } number 数字
{ boolean } penny 传入的数字是否是单位是分 (默认值为true)
{ string } unit 价格单位，默认人名币 (默认值为 ￥)
{ boolean } unitAtFront 单位是否加在数字前面（默认值为 true）
```

* 返回值
```js
{ string } 转换完成后的值
```

**toThousand**

千分位格式化

* 入参
```js
{ number } number 数值
```

* 返回值
```js
{ string } 格式化完成后的值
```

**toW**

数字转W（万元）

* 入参
```js
{ number } n 数字
```

* 返回值
```js
{ number | string } 转换完成后的值
```

**yuanToCent**

元转换成分

* 入参
```js
{ number } yuan 需要被转换的数值
{ number } digit 精度
```

* 返回值
```js
{ number } 转换完成后的值
```

### Object 相关
**compareObject**

比较两个对象是否相等（支持深层次对象进行比较）

* 入参
```js
{ Object } o1 等待被比较的目标对象
{ Object } o2 等待被比较的目标对象

```

* 返回值
```js
{ boolean } 是否相等
```

**convertToEmpty**

将对象所有属性的值改为空（改变的是对象的引用，暂不支持改变嵌套对象）

* 入参
```js
{ Object } obj 目标对象
```

* 返回值
```js
无
```

**注意：** 该函数没有返回值，改变的是对象的引用！！！

**deepClone**

深克隆，支持环引用，支持各种类型拷贝。

* 入参
```js
{ Any } value 被克隆的值
```

* 返回值
```js
{ Any } 克隆后的值
```


**deleteObjPropertyInArray**

删除数组中对象的某一个属性(改变的是对象的引用）

* 入参
```js
{ Array } array 数组对象
{ string } property 要删除的属性名
```

* 返回值
```js
无
```
  
**getClassName**

获取类名

* 入参
```js
{ Object } obj 目标对象
```

* 返回值
```js
{ string } 类名
```
  
**jsonToUnderline**

将对象中所有的驼峰属性名转下划线

* 入参
```js
{ Object } obj 目标对象
```

* 返回值
```js
无
```

**注意：** 该函数没有返回值，改变的是对象的引用！！!

**objectMerge**

合并两个对象，若是有相同的属性，后者会覆盖前者

* 入参
```js
{ Object } target 目标对象
{ Object } source 源对象
```

* 返回值
```js
{ Object } merge 之后的对象
```

**removeEmptyField**

移除对象中的空值 如 '' null undefined，并返回一个新对象

* 入参
```js
{ Object } obj 需要被移除空值的对象
```

* 返回值
```js
{ Object } newObj 不存在空值得新对象
```

**shallowClone**

对象深拷贝 （如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失,把 NaN 变成 null)

* 入参
```js
{ Object } obj 目标对象
```

* 返回值
```js
{ Object } 拷贝后的对象
```

**注意：** 对于不能序列化的属性如 File，拷贝之后会丢失

### string 相关

**compareVersion**

比较两个版本号的大小

* 入参
```js
{ string } v1 版本号1
{ string } v2 版本号2
```

* 返回值
```js
v1 === v2 -> 0
v1 > v2 -> 1
v1 < v2 -> -1
```

**copyIntoClipboard**

复制内容到剪贴板

* 入参
```js
{ string } content 复制的内容
{ string } selector 元素的选择器
```

* 返回值
```js
无
```

**getLocalUUID**

获取本地的唯一标识

* 入参
```js
无
```

* 返回值
```js
{ string } 唯一标识
```

**getRandomStr**

获取随机字符串

* 入参
```js
{ number } length 随机字符串的长度
```

* 返回值
```js
{ string } 获取的随机字符串
```

**getStringFromDataView**

二进制流转字符串

* 入参
```js
{ DataView } dataView 流数据
{ number } start 读取开始位置
{ number } length 读取长度
```

* 返回值
```js
{ string } 转换完成后的字符串
```

**hump2Underline**

字符串驼峰转下划线

* 入参
```js
{ string } str 等待被转换的字符串
```

* 返回值
```js
{ string } 转换完成的字符串
```

**objToUpperCase**

对象属性下划线转驼峰, 注意：暂不支持深层次对象转换

* 入参
```js
{ Object } obj 需要被转换的对象
```

* 返回值
```js
{ Object } handleObj 转换完成的对象
```

**xssFilter**

将传入字符串进行xss攻击过滤

* 入参
```js
{ string } content 需要被过滤的字符串
```

* 返回值
```js
{ string } 过滤完成的字符串
```

### Style 相关
**insertStyle**

插入css样式

* 入参
```js
{ Object } styles styles是js对象，可以被转换成css规则，具体形式如下
{
   '.class-name': { // 选择器
       'overflow': 'hidden', // 各条属性
     },
   '@keyframes animation-name': { // 动画选择器
      'from': {
          'opacity': '1',
         },
       'to': {
            'opacity': '.6',
         }
     },
}
{ string } id 生成的style id，可以选择保存下来在页面生命周期结束时移除
```

**removeStyle**

移除指定id的样式

* 入参
```js
{ string } id 需要被移除样式的元素id
```

* 返回值
```js
无
```

### Url 相关
**downloadFile**

下载文件

* 入参
```js
{ string } url 文件地址
{ Object } params 请求参数
```

* 返回值
```js
无
```

**getUrlParams**

获取url中的参数

* 入参
```js
{ string } url 目标url
```

* 返回值
```js
{ Object } 参数对象
```

**getWechatRedirectURL**

获取微信重定向链接

* 入参
```js
{ string } url 微信重定向目标链接
{ string } wechatAppId 微信公众号 appid
{ boolean } isSilent 是否静默重定向，静默形式只能获取openid，用户授权（非静默）可以获取unionId
```

* 返回值
```js
{ string } 重定向之后的链接
```

**isLinkHttpUrl**

链接是否是http链接，区分web链接和原生统跳链接用

* 入参
```js
{ string } link 目标链接
```

* 返回值
```js
{ boolean }
```

**urlAnalyze**

分析url，会返回 去参url、参数、hash字符串

* 入参
```js
{ string } url 目标url
```

* 返回值
```js
{ Object } 参数对象
```

**urlRestore**

将上一个函数链接的解析结果恢复成链接

* 入参
```js
{ Object } analyzes 对象
```

* 返回值
```js
{ string } link url链接
```
