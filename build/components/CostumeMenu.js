import React from "../_snowpack/pkg/react.js";
const CostumeMenu = ({char, setCostume, costumeMenus}) => {
  let charCostumes = [];
  if (costumeMenus.length) {
    charCostumes = costumeMenus.map((costume) => {
      return /* @__PURE__ */ React.createElement("option", {
        key: `${char}: ${costume}`,
        value: costume
      }, costume);
    });
  }
  const switchCostume = (e) => {
    return setCostume(e.target.value);
  };
  return /* @__PURE__ */ React.createElement("select", {
    id: "costumeMenu",
    name: "costumes",
    onChange: switchCostume,
    className: "menus"
  }, charCostumes);
};
export default CostumeMenu;
