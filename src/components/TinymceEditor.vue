<template>
  <div>
    <editor v-model="editorValue" :init="init"></editor>
  </div>
</template>
<script>
// import tinymce from 'tinymce/tinymce'
// import editor from '@tinymce/tinymce-vue'
import { tinymce,
    editor } from '../utils/tinymce.m'
// 引入富文本编辑器主题的js和css
import 'tinymce/themes/silver/theme.min.js'
import 'tinymce/skins/ui/oxide/skin.min.css'
import "tinymce/icons/default/icons";
// import "tinymce/models/dom/model.js";
//引入插件
// import "tinymce/plugins/link/plugin.min.js";
// import "tinymce/plugins/code/plugin.min.js";
// import "tinymce/plugins/image/plugin.min.js"; //图片上传需要
// import "tinymce/plugins/paste/plugin.min.js"; //图片粘贴自动上传需要
// import "tinymce/plugins/media/plugin.min.js";
// import "tinymce/plugins/table/plugin.min.js";
// import "tinymce/plugins/lists/plugin.min.js";
// import "tinymce/plugins/contextmenu/plugin.min.js";
// import "tinymce/plugins/wordcount/plugin.min.js";
// import "tinymce/plugins/textcolor/plugin.min.js";
// import "tinymce/plugins/fullscreen/plugin.min.js"; //全屏
// import "tinymce/plugins/searchreplace/plugin.min.js";
// import "tinymce/plugins/emoticons/plugin.min";
export default {
  components: {
    editor
  },
  data() {
    return {
      editorValue: '',
      plugins: {
        type: [String, Array],
        default: 'link lists image code table textcolor wordcount contextmenu paste media fullscreen searchreplace '
      },
      toolbar: {
        type: [String, Array],
        default: 'undo redo |fontsizeselect  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat |　paste | code | fullscreen | searchreplace '
      },
      init: {
        language_url: require('../assets/tinymce/langs/zh_CN'),
        language: 'zh_CN',
        // skin_url: "tinymce/skins/ui/oxide", //皮肤：浅色
        // content_css: 'tinymce/skins/content/default/content.css',// vue-cli2.x
        height: 500,
        width: 500,
        min_height: 500,
        max_height: 500,
        toolbar_mode: "wrap",
        plugins: this.plugins,
        toolbar: this.toolbar,
        content_style: "p {margin: 5px 0;}",
        fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        font_formats:
          "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",
        branding: false,
      }
    }
  }
}
</script>