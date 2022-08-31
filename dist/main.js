var main = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/main.m.js
  var main_m_exports = {};
  __export(main_m_exports, {
    bootstrap: () => bootstrap,
    unmount: () => unmount
  });
  var render = (root, vue) => {
    vue.config.productionTip = false;
    new vue({
      render: (h) => h(App)
    }).$mount(document.querySelector(root) || "#mircoAppContainer");
  };
  Vue.prototype.$echarts = echarts;
  var isbeehive = window.__POWERED_BY_BEEHIVE__;
  console.log(111);
  if (!isbeehive) {
    render("", Vue);
  }
  var bootstrap = (props) => {
    render(props.rootEl, props.libs.Vue, props.libs.Element);
  };
  var unmount = () => {
    console.log("unmount");
  };
  return __toCommonJS(main_m_exports);
})();
//# sourceMappingURL=main.js.map