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
    value: "Ann"
  }, "Ann Takamaki"), /* @__PURE__ */ React.createElement("option", {
    value: "Futaba"
  }, "Futaba Sakura"), /* @__PURE__ */ React.createElement("option", {
    value: "Akechi"
  }, "Goro Akechi"), /* @__PURE__ */ React.createElement("option", {
    value: "Haru"
  }, "Haru Okumura"), /* @__PURE__ */ React.createElement("option", {
    value: "Makoto"
  }, "Makoto Niijima"), /* @__PURE__ */ React.createElement("option", {
    value: "Morgana"
  }, "Morgana"), /* @__PURE__ */ React.createElement("option", {
    value: "Ryuji"
  }, "Ryuji Sakamoto"), /* @__PURE__ */ React.createElement("option", {
    value: "Sae"
  }, "Sae Niijima"), /* @__PURE__ */ React.createElement("option", {
    value: "Sojiro"
  }, "Sojiro Sakura"), /* @__PURE__ */ React.createElement("option", {
    value: "Sumire"
  }, "Sumire Yoshizawa"), /* @__PURE__ */ React.createElement("option", {
    value: "Yusuke"
  }, "Yusuke Kitagawa"));
};
export default CharacterMenu;
