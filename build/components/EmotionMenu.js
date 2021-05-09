import React from "../_snowpack/pkg/react.js";
const baseEmotions = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
  value: "Neutral"
}, "Neutral"), /* @__PURE__ */ React.createElement("option", {
  value: "Happy"
}, "Happy"), /* @__PURE__ */ React.createElement("option", {
  value: "Angry"
}, "Angry"), /* @__PURE__ */ React.createElement("option", {
  value: "Shocked"
}, "Shocked"), /* @__PURE__ */ React.createElement("option", {
  value: "Hurt"
}, "Hurt"), /* @__PURE__ */ React.createElement("option", {
  value: "Sad"
}, "Sad"));
const EmotionMenu = ({char, setEmote}) => {
  const emoteMenuCreator = (currChar) => {
    switch (currChar) {
      case "ann":
        return baseEmotions;
      case "futaba":
        return baseEmotions;
      case "akechi":
        return baseEmotions;
      case "yusuke":
        return baseEmotions;
      default:
        return baseEmotions;
    }
  };
  const switchEmote = (e) => {
    return setEmote(e.target.value);
  };
  return /* @__PURE__ */ React.createElement("select", {
    id: "emoteMenu",
    name: "emotions",
    onChange: switchEmote,
    className: "menus"
  }, emoteMenuCreator(char));
};
export default EmotionMenu;
