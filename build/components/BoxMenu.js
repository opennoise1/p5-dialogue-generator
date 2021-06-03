import React from "../_snowpack/pkg/react.js";
import {menuFinder} from "../utils/boxFinder.js";
const BoxMenu = ({char, font, setBox}) => {
  const options = menuFinder(char);
  const switchBox = (e) => {
    const selection = e.target.value;
    return setBox(`../images/boxes/db-${selection}-${font}.png`);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "menuDivs"
  }, /* @__PURE__ */ React.createElement("div", null, "Box: "), /* @__PURE__ */ React.createElement("select", {
    id: "boxMenu",
    className: "menuOptions knife",
    onChange: switchBox
  }, options));
};
export default BoxMenu;
