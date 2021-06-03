import React from "../_snowpack/pkg/react.js";
import Menus from "./Menus.js";
const TextAndTools = ({char, setChar, emote, setEmote, costume, setCostume, setPortrait, text, setText, font, setFont, box, setBox}) => {
  const toolProps = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait,
    box,
    setBox,
    font
  };
  const downloadImage = () => {
    const downloadCanvas = document.createElement("canvas");
    downloadCanvas.width = 1275;
    downloadCanvas.height = 500;
    const portraitCanvas = document.getElementById("portraitCanvas");
    const boxCanvas = document.getElementById("boxCanvas");
    const textCanvas = document.getElementById("textCanvas");
    const dCtx = downloadCanvas.getContext("2d");
    dCtx.drawImage(portraitCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(boxCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(textCanvas, 0, 0, 1275, 500);
    const link = document.createElement("a");
    link.download = `${char}-${text}.png`;
    link.href = downloadCanvas.toDataURL("image/png");
    link.click();
    return;
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "textAndTools"
  }, /* @__PURE__ */ React.createElement(Menus, {
    ...toolProps
  }), /* @__PURE__ */ React.createElement("div", {
    id: "textAndDownload"
  }, /* @__PURE__ */ React.createElement("textarea", {
    id: "textField",
    placeholder: "HOLD IT! Portraits contain spoilers",
    autoFocus: true,
    rows: 3,
    cols: 40,
    defaultValue: text,
    onChange: (e) => setText(e.target.value)
  }), /* @__PURE__ */ React.createElement("div", {
    id: "download",
    className: "knife",
    onClick: downloadImage
  }, /* @__PURE__ */ React.createElement("img", {
    src: "../images/down-arrow.png",
    alt: "Download button",
    width: "40",
    height: "48"
  }), /* @__PURE__ */ React.createElement("div", null, "Download"))), /* @__PURE__ */ React.createElement("div", {
    id: "fontDiv"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "vanillaFont",
    className: "fonts KRSMDivs knife",
    onClick: () => setFont("KoreanKRSM")
  }, "KoreanKRSM (Persona 5)"), /* @__PURE__ */ React.createElement("div", {
    id: "royalFont",
    className: "fonts optimaDivs knife",
    onClick: () => setFont("Optima nova LT")
  }, "Optima Nova Black (Persona 5 Royal)"), /* @__PURE__ */ React.createElement("div", {
    id: "japaneseFont",
    className: "fonts slumpDivs knife",
    onClick: () => setFont("SlumpSTD")
  }, "Slump DB (ペルソナ5 - 日本語)")));
};
export default TextAndTools;
