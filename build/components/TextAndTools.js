import React from "../_snowpack/pkg/react.js";
import Menus from "./Menus.js";
const TextAndTools = ({char, setChar, emote, setEmote, costume, setCostume, setPortrait, text, setText, setFont}) => {
  const toolProps = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait
  };
  function downloadImage() {
    const downloadCanvas = document.createElement("canvas");
    downloadCanvas.width = 1300;
    downloadCanvas.height = 500;
    const portraitCanvas = document.getElementById("portraitCanvas");
    const textCanvas = document.getElementById("textCanvas");
    const dCtx = downloadCanvas.getContext("2d");
    dCtx.drawImage(portraitCanvas, 0, 0, 1300, 500);
    dCtx.drawImage(textCanvas, 0, 0, 1300, 500);
    const link = document.createElement("a");
    link.download = `${char}-${text}.png`;
    link.href = downloadCanvas.toDataURL("image/png");
    link.click();
    return;
  }
  ;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("textarea", {
    id: "textField",
    placeholder: "Enter dialogue here...",
    autoFocus: true,
    rows: 3,
    cols: 40,
    defaultValue: text,
    onChange: (e) => setText(e.target.value)
  }), /* @__PURE__ */ React.createElement("div", {
    id: "menus"
  }, /* @__PURE__ */ React.createElement(Menus, {
    ...toolProps
  })), /* @__PURE__ */ React.createElement("div", {
    id: "buttonDiv"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "vanillaFont",
    className: "fonts",
    onClick: () => setFont("18pt KoreanKRSM")
  }, "KoreanKRSM (Persona 5)"), /* @__PURE__ */ React.createElement("div", {
    id: "royalFont",
    className: "fonts",
    onClick: () => setFont("18pt Optima nova LT")
  }, "Optima Nova Black (Persona 5 Royal)"), /* @__PURE__ */ React.createElement("div", {
    id: "japaneseFont",
    className: "fonts",
    onClick: () => setFont("18pt SlumpSTD")
  }, "Slump DB (Persona 5 - Japanese)")), /* @__PURE__ */ React.createElement("div", {
    id: "download",
    onClick: downloadImage
  }, "Download Dialogue"));
};
export default TextAndTools;
