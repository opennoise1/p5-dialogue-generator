import React from "../_snowpack/pkg/react.js";
const CostumeMenu = ({char, costume, setCostume, costumeMenus}) => {
  let charCostumes = [];
  if (costumeMenus.length) {
    charCostumes = costumeMenus.map((costume2) => {
      return /* @__PURE__ */ React.createElement("option", {
        key: `${char}: ${costume2}`,
        value: costume2
      }, costume2);
    });
  }
  ;
  const switchCostume = (e) => {
    setCostume(e.target.value);
    return;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "menuDivs"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menuLabels"
  }, "Costume: "), /* @__PURE__ */ React.createElement("select", {
    id: "costumeMenu",
    className: "menuOptions knife",
    value: costume,
    name: "costumes",
    onChange: switchCostume
  }, charCostumes));
};
export default CostumeMenu;
