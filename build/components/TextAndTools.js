import React, {useEffect} from "../_snowpack/pkg/react.js";
import Menus from "./Menus.js";
const TextAndTools = ({
  char,
  setChar,
  emote,
  setEmote,
  costume,
  setCostume,
  setPortrait,
  text,
  setText,
  font,
  setFont,
  boxFont,
  setBoxFont,
  box,
  setBox,
  selection,
  setSelection
}) => {
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
    boxFont,
    setBoxFont,
    font,
    selection,
    setSelection
  };
  useEffect(() => {
    setBox(`../images/boxes/db-${selection}-${boxFont}.png`);
  }, [boxFont]);
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
  }, /* @__PURE__ */ React.createElement("div", {
    id: "enterDialogue"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dialogueHeader"
  }, "Dialogue"), /* @__PURE__ */ React.createElement("textarea", {
    id: "textField",
    placeholder: "Hey, Inmate! Character portraits contain spoilers!",
    rows: 3,
    cols: 50,
    defaultValue: text,
    onChange: (e) => setText(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    id: "download",
    className: "knife",
    onClick: downloadImage
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 24l-8-9h6v-15h4v15h6z"
  })), /* @__PURE__ */ React.createElement("div", null, "Download"))), /* @__PURE__ */ React.createElement("div", {
    id: "fontDiv"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "fontHeader"
  }, "Font Select"), /* @__PURE__ */ React.createElement("div", {
    id: "vanillaFont",
    className: "fonts KRSMDivs knife",
    onClick: () => {
      setFont("KoreanKRSM");
      setBoxFont("KoreanKRSM");
    }
  }, "KoreanKRSM (Persona 5)"), /* @__PURE__ */ React.createElement("div", {
    id: "royalFont",
    className: "fonts optimaDivs knife",
    onClick: () => {
      setFont("Optima nova LT");
      setBoxFont("Optima nova LT");
    }
  }, "Optima Nova Black (Persona 5 Royal)"), /* @__PURE__ */ React.createElement("div", {
    id: "japaneseFont",
    className: "fonts slumpDivs knife",
    onClick: () => setFont("SlumpDB"),
    lang: "ja"
  }, "Slump DB (ペルソナ5 - 日本語)")));
};
export default TextAndTools;
