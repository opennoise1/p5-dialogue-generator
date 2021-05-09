import React from "../_snowpack/pkg/react.js";
import Menus from "./Menus.js";
const TextAndTools = ({char, setChar, emote, setEmote, costume, setCostume, setPortrait, text, setText, setFont}) => {
  const toolProps = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("textarea", {
    id: "textField",
    placeholder: "Enter dialogue here...",
    autoFocus: true,
    rows: 3,
    cols: 40,
    defaultValue: text,
    onChange: (e) => setText(e.target.value)
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Menus, {
    ...toolProps
  })), /* @__PURE__ */ React.createElement("div", {
    id: "buttonDiv"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "vanillaFont",
    className: "fonts",
    onClick: () => setFont("32pt KoreanKRSM")
  }, "KoreanKRSM (Persona 5)"), /* @__PURE__ */ React.createElement("div", {
    id: "royalFont",
    className: "fonts",
    onClick: () => setFont("20pt Optima nova LT")
  }, "Optima Nova Black (Persona 5 Royal)")));
};
export default TextAndTools;
