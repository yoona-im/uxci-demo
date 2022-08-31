<template>
  <div>
    <textarea :value="value" id="tinymce"></textarea>
  </div>
</template>
<script>
import tinymce from "tinymce/tinymce";
import 'tinymce/themes/silver/theme.min.js'
import "tinymce/icons/default/icons";
import 'tinymce/skins/ui/oxide/skin.min.css'
import '../assets/tinymce/langs/zh_CN';
export default {
  components: {
    // editor
  },
  data() {
    return {
      value: '',
      plugins: '',
      toolbar: 'undo redo |fontsizeselect  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat |　paste | code | fullscreen | searchreplace ',
    }
  },
  methods: {
    tinymceinit() {
      const _this = this;
      const setting = {
        selector: "#tinymce",
        // language_url: require('../assets/tinymce/langs/zh_CN'),
        language: 'zh_CN',
        // skin_url: "./tinymce/skins/ui/oxide", //皮肤：浅色
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
      };
      Object.assign(setting, _this.setting);
      tinymce.init(setting);
    },
  },
  mounted() {
    this.tinymceinit();
  }
}
</script>
<style scoped>
</style>