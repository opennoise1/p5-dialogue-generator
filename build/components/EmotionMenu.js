import React from "../_snowpack/pkg/react.js";
const EmotionMenu = ({char, setEmote}) => {
  const emoteMenuCreator = (currChar) => {
    switch (currChar) {
      case "ann":
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
          value: "neutral"
        }, "Neutral"), /* @__PURE__ */ React.createElement("option", {
          value: "happy"
        }, "Happy"), /* @__PURE__ */ React.createElement("option", {
          value: "angry"
        }, "Angry"), /* @__PURE__ */ React.createElement("option", {
          value: "shocked"
        }, "Shocked"), /* @__PURE__ */ React.createElement("option", {
          value: "hurt"
        }, "Hurt"), /* @__PURE__ */ React.createElement("option", {
          value: "sad"
        }, "Sad"));
      case "futaba":
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
          value: "neutral"
        }, "Neutral"), /* @__PURE__ */ React.createElement("option", {
          value: "happy"
        }, "Happy"), /* @__PURE__ */ React.createElement("option", {
          value: "angry"
        }, "Angry"), /* @__PURE__ */ React.createElement("option", {
          value: "shocked"
        }, "Shocked"), /* @__PURE__ */ React.createElement("option", {
          value: "hurt"
        }, "Hurt"), /* @__PURE__ */ React.createElement("option", {
          value: "sad"
        }, "Sad"));
      case "akechi":
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
          value: "neutral"
        }, "Neutral"), /* @__PURE__ */ React.createElement("option", {
          value: "happy"
        }, "Happy"), /* @__PURE__ */ React.createElement("option", {
          value: "angry"
        }, "Angry"), /* @__PURE__ */ React.createElement("option", {
          value: "shocked"
        }, "Shocked"), /* @__PURE__ */ React.createElement("option", {
          value: "hurt"
        }, "Hurt"), /* @__PURE__ */ React.createElement("option", {
          value: "sad"
        }, "Sad"));
      case "yusuke":
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
          value: "neutral"
        }, "Neutral"), /* @__PURE__ */ React.createElement("option", {
          value: "happy"
        }, "Happy"), /* @__PURE__ */ React.createElement("option", {
          value: "angry"
        }, "Angry"), /* @__PURE__ */ React.createElement("option", {
          value: "shocked"
        }, "Shocked"), /* @__PURE__ */ React.createElement("option", {
          value: "hurt"
        }, "Hurt"), /* @__PURE__ */ React.createElement("option", {
          value: "sad"
        }, "Sad"), /* @__PURE__ */ React.createElement("option", {
          value: "hidden"
        }, "Hidden"));
      default:
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
          value: "neutral"
        }, "Neutral"), /* @__PURE__ */ React.createElement("option", {
          value: "happy"
        }, "Happy"), /* @__PURE__ */ React.createElement("option", {
          value: "angry"
        }, "Angry"), /* @__PURE__ */ React.createElement("option", {
          value: "shocked"
        }, "Shocked"), /* @__PURE__ */ React.createElement("option", {
          value: "hurt"
        }, "Hurt"), /* @__PURE__ */ React.createElement("option", {
          value: "sad"
        }, "Sad"));
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
