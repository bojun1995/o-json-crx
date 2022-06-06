# o-json
JSON解析格式化Chrome插件
## 使用方式
#### 1. 本地文件
下载[最新releases文件](https://github.com/bojun1995/o-json-crx/releases)

```
1. 解压
2.1 Chrome访问 chrome://extensions/
2.2 或者 打开Chrome，点击右上角 拓展程序 图标(头像左侧)，点击弹窗下方 管理拓展程序
3. 加载已解压的扩展程序 选择文件夹

```


#### 2. Chrome插件商店下载(审核中)


## 开发方式
#### Install
```
#yarn
yarn i

#npm
npm i
```
#### Development
```
1. yarn dev
# 编译后路径为 /dist

2. 按照上方使用方式-本地文件模式选择项目/dist路径
```
#### Releases
```
yarn releases
# 编译后路径为 /releases
```

## 特征
- ✨ Vite + Vue3
- 使用Scss、Pinia
- 使用ESLint + Prettier + Husky
- 插件打包压缩包使用[rollup-plugin-zip](https://www.npmjs.com/package/rollup-plugin-zip)

## 致谢
- 脚手架 [vite-crx-vue](https://github.com/keyding/vite-crx-vue)
- 开发教程 [chrome-plugin-demo](chrome-plugin-demo)
- 编辑器 [jsoneditor](https://github.com/josdejong/jsoneditor)