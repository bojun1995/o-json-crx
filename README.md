# o-json
Chrome Extension of JSON Format
## Install Instructions
### 1. Install Locally

* Download the [Releases](https://github.com/bojun1995/o-json-crx/releases)

* Unzip the file.
* Load the unzipped releases folder in [Chrome extensions](chrome://extensions/)
  
### 2. Download in [Chrome Web Store](https://chrome.google.com/)

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