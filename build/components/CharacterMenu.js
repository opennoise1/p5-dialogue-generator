import React, {useEffect} from "../_snowpack/pkg/react.js";
const CharacterMenu = ({char, setChar, setEmoteMenus}) => {
  const switchChar = (e) => {
    setChar(e.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:3000/emotions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({char: `../images/portraits/${char}/`})
    }).then((data) => data.json()).then((parsed) => setEmoteMenus(parsed)).catch((err) => console.log(err));
  }, [char]);
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
