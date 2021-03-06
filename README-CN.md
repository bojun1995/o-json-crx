<p align="center">
  <a href="https://github.com/bojun1995/o-json-crx" target="_blank">
    <img width="180" src="https://github.com/bojun1995/o-json-crx/blob/master/backup/LOGO PNG/o-tools%20%E7%99%BD%E5%BA%95.png" alt="logo">
  </a>
</p>

> JSON解析格式化Chrome插件，JSON转换TypeScript Interfaces

![GitHub last commit](https://img.shields.io/github/last-commit/bojun1995/o-json-crx?style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/bojun1995/o-json-crx?style=for-the-badge)
![GitHub Release Date](https://img.shields.io/github/release-date/bojun1995/o-json-crx?style=for-the-badge)

# o-json

[EN](https://github.com/bojun1995/o-json-crx/blob/master/README.md) | [中文](https://github.com/bojun1995/o-json-crx/blob/master/README-CN.md)

## 使用方式

#### 1. [Chrome插件商店](https://chrome.google.com/webstore/detail/o-json/pjgmamaikjfkchcapppciiabhcgihaha)

#### 2. 本地文件

- 下载[最新releases文件](https://github.com/bojun1995/o-json-crx/releases)
- 解压
- Chrome访问 [chrome://extensions/](chrome://extensions/)
- 加载已解压的扩展程序 选择文件夹


## 开发方式
#### 安装依赖
```
#yarn
yarn

#npm
npm i
```
#### 本地开发
```
1. yarn dev
# 编译后路径为 /dist

2. 按照上方使用方式-本地文件模式选择项目/dist路径
```
#### 本地打包插件
```
yarn releases
# 编译后路径为 /releases
```

## 技术栈
- ✨ Vite + Vue3
- 使用Scss、Pinia
- 使用ESLint + Prettier + Husky
- 插件打包压缩包使用[rollup-plugin-zip](https://www.npmjs.com/package/rollup-plugin-zip)

## 致谢
- 脚手架 [vite-crx-vue](https://github.com/keyding/vite-crx-vue)
- 开发教程 [chrome-plugin-demo](https://github.com/sxei/chrome-plugin-demo)
- 编辑器 [jsoneditor](https://github.com/josdejong/jsoneditor)
