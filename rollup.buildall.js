// 打包 packages 里面的所有包
const fs = require('fs');
// 使用 execa 开启子进行去执行打包命令
// eslint-disable-next-line import/no-extraneous-dependencies
const execa = require('execa');

const allFilepath = []; // 用来存放单个 ts 文件的路径,方便后续开启多进程分别打包
const allFilename = []; // 用来存放单个 ts 文件的名称

// 找到我们需要打包的项目目录
const targets = fs.readdirSync('src').filter((fileName) => {
  if (!fs.statSync(`src/${fileName}`).isDirectory() || fileName === 'constant') {
    return false;
  }
  return true;
});

targets.forEach((item) => {
  fs.readdirSync(`src/${item}`).forEach((fileName) => {
    if (fileName !== 'index.ts') {
      allFilepath.push(`src/${item}/${fileName}`);
      allFilename.push(fileName);
    }
  });
});

// 对每一个单独的项目进行打包
async function build(targetPath, filename) {
  await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `TARGET:${targetPath}`,
        `FILENAME:${filename}`,
        'TYPE:single',
      ],
    ],
    { stdio: 'inherit' }, // 将子进行打包的信息共享给父进程
  );
}

// 将项目整体进行打包
async function run() {
  await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        'TYPE: all',
      ],
    ],
    { stdio: 'inherit' }, // 将子进程打包的信息共享给父进程
  );
}

// 对我们的项目进行依次打包，并行打包
function runParallel(builtFiles, iteratorFn) {
  const res = [];
  // eslint-disable-next-line no-restricted-syntax
  allFilepath.forEach((item, index) => {
    // p -> build 函数返回的是一个 promise
    // 注意：这里不能加 await，否则就不是并行打包了
    const p = iteratorFn(item, allFilename[index]);
    res.push(p);
  });

  return Promise.all(res);
}

runParallel(allFilepath, build);
run();
