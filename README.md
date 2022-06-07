<p align="center">
  <a href="https://github.com/bojun1995/o-json-crx" target="_blank">
    <img width="180" src="https://github.com/bojun1995/o-json-crx/blob/master/backup/o-tools%20%E7%99%BD%E5%BA%95.png" alt="logo">
  </a>
</p>

> Chrome Extension of JSON Format

# o-json

[EN](https://github.com/bojun1995/o-json-crx/blob/master/README.md) | [中文](https://github.com/bojun1995/o-json-crx/blob/master/README-CN.md)

## Install Instructions
#### 1. Install Locally

* Download the [Releases](https://github.com/bojun1995/o-json-crx/releases)
* Unpack the file.
* Open [chrome://extensions/](chrome://extensions/) in Chrome
* Load the unpacked releases folder
  
#### 2. Download in [Chrome Web Store](https://chrome.google.com/)

## Building locally
```
#yarn
yarn i

#npm
npm i
```
#### Development
```
1. yarn dev
# path after compile is /dist

2. Select the projec /dist path according to the above usage - Install Locally
```
#### Releases
```
yarn releases
# path after compile is /releases
```

## Features
- Powered by Vite + Vue3
- Powered by Scss、Pinia
- Powered by ESLint + Prettier + Husky
- Packaged with [rollup-plugin-zip](https://www.npmjs.com/package/rollup-plugin-zip)

## Thanks
- Framework [vite-crx-vue](https://github.com/keyding/vite-crx-vue)
- Learning from [chrome-plugin-demo](chrome-plugin-demo)
- Editor [jsoneditor](https://github.com/josdejong/jsoneditor)