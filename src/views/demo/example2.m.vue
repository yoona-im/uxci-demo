<template>
  <div class="p20">
    <div class="sub_title">echarts</div>
    <bar-chart class="mt20"></bar-chart>
    <div class="sub_title">tinymce</div>
    <tinymce-editor></tinymce-editor>
    <div class="sub_title">codemirror</div>
    <code-mirror></code-mirror>
  </div>
</template>
<script>
import "../../style/main.m.scss";
import BarChart from '../../components/BarChart.vue';
import TinymceEditor from '../../components/TinymceEditor.vue';
import CodeMirror from '../../components/CodeMirror.vue';
import { statusEnum } from '../../enums/enums.m.js';
export default {
  components: {
    BarChart,
    TinymceEditor,
    CodeMirror
  },
  data() {
    return {
      statusEnum,
    }
  },
  methods: {
  },
  mounted() {
    // 都不生效
    // window.addEventListener('scroll', () => {
    //     console.log('scroll') 
    // })
    // window.onscroll = () => {
    //    console.log('onscroll')
    // }
  }
}
</script>
<style lang="scss" scoped>
.bar {
  width: 500px;
  height: 500px;
}
</style>