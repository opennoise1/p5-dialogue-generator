import React from "../_snowpack/pkg/react.js";
const CharacterMenu = ({setChar}) => {
  const switchChar = (e) => {
    return setChar(e.target.value);
  };
  return /* @__PURE__ */ React.createElement("select", {
    id: "charMenu",
    name: "characters",
    onChange: switchChar,
    className: "menus"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "ann"
  }, "Ann Takamaki"), /* @__PURE__ */ React.createElement("option", {
    value: "futaba"
  }, "Futaba Sakura"), /* @__PURE__ */ React.createElement("option", {
    value: "akechi"
  }, "Goro Akechi"), /* @__PURE__ */ React.createElement("option", {
    value: "haru"
  }, "Haru Okumura"), /* @__PURE__ */ React.createElement("option", {
    value: "yoshizawa"
  }, "Kasumi Yoshizawa"), /* @__PURE__ */ React.createElement("option", {
    value: "makoto"
  }, "Makoto Niijima"), /* @__PURE__ */ React.createElement("option", {
    value: "morgana"
  }, "Morgana"), /* @__PURE__ */ React.createElement("option", {
    value: "ryuji"
  }, "Ryuji Sakamoto"), /* @__PURE__ */ React.createElement("option", {
    value: "saw"
  }, "Sae Niijima"), /* @__PURE__ */ React.createElement("option", {
    value: "sojiro"
  }, "Sojiro Sakura"), /* @__PURE__ */ React.createElement("option", {
    value: "yusuke"
  }, "Yusuke Kitagawa"));
};
export default CharacterMenu;
