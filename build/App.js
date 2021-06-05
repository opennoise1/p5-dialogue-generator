import React, {useState} from "./_snowpack/pkg/react.js";
import ImageCanvas from "./components/ImageCanvas.js";
import TextAndTools from "./components/TextAndTools.js";
import Header from "./components/Header.js";
const App = () => {
  const [char, setChar] = useState("Ann");
  const [emote, setEmote] = useState("Happy");
  const [costume, setCostume] = useState("Gym Clothes");
  const [text, setText] = useState("");
  const [font, setFont] = useState("KoreanKRSM");
  const [boxFont, setBoxFont] = useState("KoreanKRSM");
  const [selection, setSelection] = useState(char);
  const [portrait, setPortrait] = useState(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  const [box, setBox] = useState(`../images/boxes/db-${selection}-${font}.png`);
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
    boxFont,
    setBoxFont,
    box,
    setBox,
    selection,
    setSelection
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(ImageCanvas, {
    ...appProps
  }), /* @__PURE__ */ React.createElement(TextAndTools, {
    ...appProps
  }));
};
export default App;
