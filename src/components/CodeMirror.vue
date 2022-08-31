<template>
  <div>
    <codemirror v-model="code" :options="options"></codemirror>
  </div>
</template>
<script>
import { codemirror } from 'vue-codemirror'
// 核心样式
import 'codemirror/lib/codemirror.css'
export default {
  components: {
    codemirror
  },
  data() {
    return {
      code: '',
      options: {
        tabSize: 2, // 缩进格式
        theme: 'rubyblue', // 主题，对应主题库 JS 需要提前引入
        lineNumbers: true, // 显示行号
        line: true,
        styleActiveLine: true, // 高亮选中行
        hintOptions: {
          completeSingle: true // 当匹配只有一项的时候是否自动补全
        }
      }
    }
  }
}
</script>