var enums = enums || {};
enums.enums = (() => {
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

  // src/enums/enums.m.js
  var enums_m_exports = {};
  __export(enums_m_exports, {
    statusEnum: () => statusEnum
  });
  var statusEnum = {
    TEST: {
      code: "0",
      name: "正式"
    },
    FORMAL: {
      code: "1",
      name: "测试"
    }
  };
  return __toCommonJS(enums_m_exports);
})();
//# sourceMappingURL=enums/enums.js.map