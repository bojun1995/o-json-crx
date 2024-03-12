<template>
  <div class="the-editor-box">
    <div id="input" class="custom-editor editor-input"></div>
    <div id="output" class="custom-editor editor-output"></div>
    <div class="ts-btn" @click="tsBtn.onClk">
      <span title="把JSON对象排序后转换为TS Interface">TS</span>
    </div>
  </div>
</template>
<script setup>
// https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
// sys
import { ref, onMounted } from 'vue'
// store
import { useAppStore } from '@/store/app'
//util
import useEditor from '@/utils/editor'
import { useConsoleUtil } from '@/utils/console'
import useTheme from '@/utils/theme'

const editorUtil = useEditor()
const consoleUtil = useConsoleUtil()
const themeUtil = useTheme()

const appStore = useAppStore()
const setConfig = appStore.getSetConfig()

const tsBtn = ref({
  onClk: () => {
    editorUtil.parseJsonToTs()
  },
})

// const initJson = {
//   game: '123123',
//   array: [1, 2, 3],
//   boolean: true,
//   colorMatrix: '#41b883',
//   colorSunlight: '#ff6768',
//   empty: '',
//   null: null,
//   number: 10086,
//   obj: {
//     value0: 0,
//     value1: 1,
//   },
//   string: 'str',
//   undefined: undefined,
// }

const initJson = {}

const inputOpts = {
  // name: 'input',
  mode: 'code',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onChangeText: (text) => {
    try {
      const jsonObj = Object.assign({}, JSON.parse(text))
      editorUtil.updateJson('output', jsonObj)
      consoleUtil.log(JSON.stringify(jsonObj))
      consoleUtil.log('sync text success')
    } catch (err) {
      // consoleUtil.err(`parse json error: ${text}`)
      consoleUtil.err(`parse fail = ${err}`)
    }
  },
  onModeChange: (newMode, oldMode) => editorUtil.onModeChg(newMode, oldMode, 'input'),
}
const outputOpts = {
  name: 'output',
  mode: 'tree',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'],
  onModeChange: (newMode, oldMode) => editorUtil.onModeChg(newMode, oldMode, 'output'),
}

// set default theme
themeUtil.chgThemeBySetConfig()

onMounted(() => {
  editorUtil.init('input', inputOpts, initJson)
  editorUtil.init('output', outputOpts, initJson)
  editorUtil.replaceEditorIcon()
  // jsoneditor没有给出渲染完成的事件
  setTimeout(() => {
    // 是否读取剪切板
    if (true == setConfig.useAutoReadClipboard) {
      editorUtil.readClipboard('input')
    }
  }, 200)
  // editor渲染完成后开启过渡时间，防止闪屏
  setTimeout(() => {
    window.document.documentElement.setAttribute('data-rendered', 'true')
  }, 500)
})
</script>
<script>
export default {
  name: 'TheEditorBox',
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import '@/style/business/editor.scss';

.the-editor-box {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  // 50px the-menu-bar height
  // 20px padding
  max-height: calc(100% - 50px - 20px);
  position: relative;
}
.editor-input {
  width: 30%;
  margin-right: 10px;
  :deep(.jsoneditor-menu) {
    padding-right: 50px;
  }
  :deep(.jsoneditor-search) {
    right: 40px;
  }
}
.editor-output {
  width: 70%;
  max-height: 100%;
}

.ts-btn {
  height: 26px;
  width: 26px;
  border-radius: 2px;
  position: absolute;
  left: 582px;
  top: 14px;
  line-height: 26px;
  text-align: center;

  user-select: none;
  @include font-color('fontColor');

  &:hover {
    background-color: #3179c7;
    color: #ffffff;
    @include is-rendered {
      transition: background-color $g_transitionParam;
    }
  }
}

.the-editor-rendering {
  height: 100vh;
  width: 100vw;
  position: fixed;
  @include background-color('layoutBgColor');
  z-index: 999;
}
</style>
