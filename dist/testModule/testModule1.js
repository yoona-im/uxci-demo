require('testModule/testModule1.css');
var testModule = testModule || {};
testModule.testModule1 = (() => {
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

  // src/testModule/testModule1.m.vue
  var testModule1_m_exports = {};
  __export(testModule1_m_exports, {
    default: () => testModule1_m
  });

  // src/widget/widgetComp.vue
  var import_plugin_vue2_normalizer = __toESM(__require("lib/vue2/normalizer.js"));
  var _sfc_main = {
    data() {
      return {};
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "widget-slogan" }, [_vm._v(" i am the Uxci ⭐️ ")]);
  };
  var _sfc_staticRenderFns = [];
  var __component__ = /* @__PURE__ */ (0, import_plugin_vue2_normalizer.default)(_sfc_main, _sfc_render, _sfc_staticRenderFns, false, null, "4e51c99c", null, null);
  var widgetComp = __component__.exports;

  // src/testModule/testModule1.m.vue
  var import_utils = __require("utils/index.js");
  var import_plugin_vue2_normalizer2 = __toESM(__require("lib/vue2/normalizer.js"));
  var _sfc_main2 = {
    components: {
      widgetComp
    },
    data() {
      return {
        text: "world",
        age: 0
      };
    },
    methods: {
      sayAge() {
        this.age = (0, import_utils.sum)(1, 2);
      }
    }
  };
  var _sfc_render2 = function render2() {
    var _vm = this, _c = _vm._self._c;
    return _c("article", { staticClass: "test-module__wrap" }, [_c("div", { staticClass: "test-module__title" }, [_vm._v("hello "), _c("span", { staticClass: "test-module__content" }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" 🌛")]), _c("widget-comp"), !!_vm.age ? _c("p", { staticClass: "test-module__age" }, [_vm._v("im " + _vm._s(_vm.age) + " months old ! 👶🏻")]) : _vm._e(), _c("el-button", { on: { "click": _vm.sayAge } }, [_vm._v("say")])], 1);
  };
  var _sfc_staticRenderFns2 = [];
  var __component__2 = /* @__PURE__ */ (0, import_plugin_vue2_normalizer2.default)(_sfc_main2, _sfc_render2, _sfc_staticRenderFns2, false, null, "07fa088b", null, null);
  var testModule1_m = __component__2.exports;
  return __toCommonJS(testModule1_m_exports);
})();
//# sourceMappingURL=testModule/testModule1.js.map