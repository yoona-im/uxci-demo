var testModule = testModule || {};
testModule.firstPage = (() => {
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

  // src/testModule/firstPage.m.vue
  var firstPage_m_exports = {};
  __export(firstPage_m_exports, {
    default: () => firstPage_m
  });
  var import_plugin_vue2_normalizer = __toESM(__require("lib/vue2/normalizer.js"));
  var _sfc_main = {
    components: {},
    data() {
      return {};
    },
    methods: {}
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", [_vm._v("第一个页面")]);
  };
  var _sfc_staticRenderFns = [];
  var __component__ = /* @__PURE__ */ (0, import_plugin_vue2_normalizer.default)(_sfc_main, _sfc_render, _sfc_staticRenderFns, false, null, null, null, null);
  var firstPage_m = __component__.exports;
  return __toCommonJS(firstPage_m_exports);
})();
//# sourceMappingURL=testModule/firstPage.js.map