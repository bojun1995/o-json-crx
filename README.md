<p align="center">
  <a href="https://github.com/bojun1995/o-json-crx" target="_blank">
    <img width="180" src="https://github.com/bojun1995/o-json-crx/blob/master/backup/LOGO PNG/o-tools%20%E7%99%BD%E5%BA%95.png" alt="logo">
  </a>
</p>

> Chrome Extension of JSON Formatter, Convert JSON to TypeScript Interfaces

![GitHub last commit](https://img.shields.io/github/last-commit/bojun1995/o-json-crx?style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/bojun1995/o-json-crx?style=for-the-badge)
![GitHub Release Date](https://img.shields.io/github/release-date/bojun1995/o-json-crx?style=for-the-badge)
<!-- ![GitHub all releases](https://img.shields.io/github/downloads/bojun1995/o-json-crx/total?style=for-the-badge) -->

# o-json

[EN](https://github.com/bojun1995/o-json-crx/blob/master/README.md) | [中文](https://github.com/bojun1995/o-json-crx/blob/master/README-CN.md)

## Install Instructions

#### 1. Download in [Chrome Web Store](https://chrome.google.com/webstore/detail/o-json/pjgmamaikjfkchcapppciiabhcgihaha)

#### 2. Install Locally

* Download the [Releases](https://github.com/bojun1995/o-json-crx/releases)
* Unpack the file.
* Open [chrome://extensions/](chrome://extensions/) in Chrome
* Load the unpacked releases folder
  

## Building locally
```
#yarn
yarn

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

## Technology Stack
- Powered by Vite + Vue3
- Powered by Scss、Pinia
- Powered by ESLint + Prettier + Husky
- Packaged with [rollup-plugin-zip](https://www.npmjs.com/package/rollup-plugin-zip)

## Thanks
- Framework [vite-crx-vue](https://github.com/keyding/vite-crx-vue)
- Learning from [chrome-plugin-demo](https://github.com/sxei/chrome-plugin-demo)
- Editor [jsoneditor](https://github.com/josdejong/jsoneditor)
