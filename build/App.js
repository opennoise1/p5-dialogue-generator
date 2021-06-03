import React, {useState} from "./_snowpack/pkg/react.js";
import ImageCanvas from "./components/ImageCanvas.js";
import TextAndTools from "./components/TextAndTools.js";
const App = () => {
  const [char, setChar] = useState("Ann");
  const [emote, setEmote] = useState("Happy");
  const [costume, setCostume] = useState("Gym Clothes");
  const [text, setText] = useState("");
  const [font, setFont] = useState("KoreanKRSM");
  const [portrait, setPortrait] = useState(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  const [box, setBox] = useState(`../images/boxes/db-${char}-${font}.png`);
  const appProps = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    text,
    setText,
    portrait,
    setPortrait,
    font,
    setFont,
    box,
    setBox
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "allDivs"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "title"
  }, /* @__PURE__ */ React.createElement("img", {
    id: "p5logo",
    src: "./images/personalogo.png",
    width: 250,
    height: 151
  }), /* @__PURE__ */ React.createElement("div", {
    className: "generatorTitles"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "titleKRSM",
    className: "KRSMDivs"
  }, "DIALOGUE GENERATOR"), /* @__PURE__ */ React.createElement("div", {
    id: "titleOptima",
    className: "optimaDivs"
  }, "DIALOGUE GENERATOR"), /* @__PURE__ */ React.createElement("div", {
    id: "titleSlump",
    className: "slumpDivs"
  }, "対話ジェネレータ"))), /* @__PURE__ */ React.createElement("div", {
    id: "subhead"
  }, /* @__PURE__ */ React.createElement("p", {
    id: "credits"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/opennoise1/p5-dialogue-generator",
    target: "_blank"
  }, "Code"), " by ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/opennoise",
    target: "_blank"
  }, "@opennoise"), ". All artwork/content by ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/Atlus_West",
    target: "_blank"
  }, "Atlus"), "."))), /* @__PURE__ */ React.createElement(ImageCanvas, {
    ...appProps
  }), /* @__PURE__ */ React.createElement(TextAndTools, {
    ...appProps
  })));
};
export default App;
