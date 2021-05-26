import React, {useState} from "./_snowpack/pkg/react.js";
import ImageCanvas from "./components/ImageCanvas.js";
import TextAndTools from "./components/TextAndTools.js";
const App = () => {
  const [char, setChar] = useState("Ann");
  const [emote, setEmote] = useState("Angry");
  const [costume, setCostume] = useState("Casual");
  const [text, setText] = useState("");
  const [font, setFont] = useState("18pt KoreanKRSM");
  const [portrait, setPortrait] = useState(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
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
    setFont
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "imageTools"
  }, /* @__PURE__ */ React.createElement(ImageCanvas, {
    ...appProps
  }), /* @__PURE__ */ React.createElement(TextAndTools, {
    ...appProps
  }));
};
export default App;
