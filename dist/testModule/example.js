require('testModule/example.css');
var testModule = testModule || {};
testModule.example = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/testModule/example.m.vue
  var example_m_exports = {};
  __export(example_m_exports, {
    default: () => example_m
  });
  var import_plugin_vue2_normalizer = __toESM(__require("lib/vue2/normalizer.js"));
  var _sfc_main = {
    components: {},
    data() {
      return {
        searchForm: {
          name: "",
          idCard: "",
          patientPhone: "",
          cardNo: ""
        },
        pageNo: 1,
        pageSize: 10,
        currentPage: 1,
        total: "",
        tableData: []
      };
    },
    methods: {
      queryMainIndexList() {
        let me = this;
        me.tableLoading = true;
        let params = {
          pageNum: me.pageNo,
          pageSize: me.pageSize,
          isTc: false
        };
        Object.assign(params, me.searchForm);
        $ajax({
          url: "api/mpiview.mpiManageRpcService/selectPatientInfoByParamsForPage",
          jsonData: [params]
        }).then(function(res) {
          if (res && res.code == 200) {
            me.tableData = res.body.list;
            me.pageSize = res.body.pageSize;
            me.total = res.body.total;
            me.pageNo = res.body.pageNum;
          }
          me.tableLoading = false;
        }).fail(function(e) {
          console.error(e);
          me.tableLoading = false;
        });
      }
    },
    created() {
      this.queryMainIndexList();
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "container" }, [_c("el-table", { ref: "multipleTable", staticClass: "search-table", attrs: { "data": _vm.tableData, "tooltip-effect": "dark", "size": "small", "header-cell-style": {
      background: "#EBF4FF",
      color: "#333",
      fontWeight: "bold",
      height: "40px",
      padding: 0,
      fontSize: "14px"
    }, "height": "500", "element-loading-text": "加载中", "element-loading-spinner": "el-icon-loading", "element-loading-background": "hsla(0,0%,100%,.9)", "cell-style": { color: "#333", fontSize: "14px" } } }, [_c("el-table-column", { attrs: { "type": "selection", "width": "55" } }), _c("el-table-column", { attrs: { "type": "index", "width": "50", "label": "序号" } }), _c("el-table-column", { attrs: { "prop": "mpiId", "label": "主索引号", "show-overflow-tooltip": "", "min-width": "220" } }), _c("el-table-column", { attrs: { "prop": "healthInsuranceCardId", "label": "社保卡号", "show-overflow-tooltip": "", "min-width": "100" } }), _c("el-table-column", { attrs: { "prop": "name", "label": "患者姓名", "min-width": "70", "show-overflow-tooltip": "" } }), _c("el-table-column", { attrs: { "prop": "sexName", "label": "性别", "min-width": "50" }, scopedSlots: _vm._u([{ key: "default", fn: function(scope) {
      return [_c("span", [_vm._v(_vm._s(scope.row.sexName || scope.row.sex))])];
    } }]) }), _c("el-table-column", { attrs: { "prop": "birthDate", "label": "出生日期", "min-width": "90" }, scopedSlots: _vm._u([{ key: "default", fn: function(scope) {
      return [_c("span", [_vm._v(_vm._s(scope.row.birthDate && scope.row.birthDate.slice(0, 10)))])];
    } }]) }), _c("el-table-column", { attrs: { "prop": "idCard", "label": "身份证号", "show-overflow-tooltip": "", "min-width": "120" } }), _c("el-table-column", { attrs: { "prop": "patientPhone", "label": "联系电话", "min-width": "100" } }), _c("el-table-column", { attrs: { "label": "操作", "class-name": "action" }, scopedSlots: _vm._u([{ key: "default", fn: function(scope) {
      return [_c("el-tooltip", { attrs: { "effect": "dark", "content": "详情", "placement": "bottom" } }, [_c("span", { staticClass: "operate-icon operate-icon1 hand" }, [_c("i", { staticClass: "iconfont icon-zidianxiang" })])]), _c("el-tooltip", { attrs: { "effect": "dark", "content": "交叉索引", "placement": "bottom" } }, [_c("span", { staticClass: "operate-icon hand" }, [_c("i", { staticClass: "iconfont icon--s-icon_jiaochasuoying" })])]), _c("el-tooltip", { attrs: { "effect": "dark", "content": "轨迹", "placement": "bottom" } }, [_c("span", { staticClass: "operate-icon hand" }, [_c("i", { staticClass: "iconfont icon--s-icon_guiji" })])])];
    } }]) })], 1)], 1);
  };
  var _sfc_staticRenderFns = [];
  var __component__ = /* @__PURE__ */ (0, import_plugin_vue2_normalizer.default)(_sfc_main, _sfc_render, _sfc_staticRenderFns, false, null, "94b0a630", null, null);
  var example_m = __component__.exports;
  return __toCommonJS(example_m_exports);
})();
//# sourceMappingURL=testModule/example.js.map