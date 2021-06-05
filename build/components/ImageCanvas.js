import React, {useEffect, useRef} from "../_snowpack/pkg/react.js";
import {simplePositions, findSpecialPosition} from "../utils/portraitPositions.js";
const ImageCanvas = ({portrait, text, font, char, emote, costume, box}) => {
  const portraitCanvas = useRef(null);
  const boxCanvas = useRef(null);
  const textCanvas = useRef(null);
  const character = useRef(null);
  const dialogueBox = useRef(null);
  let pCtx;
  let bCtx;
  let tCtx;
  useEffect(() => {
    tCtx = textCanvas.current.getContext("2d");
    tCtx.fillStyle = "#FFFFFF";
    tCtx.font = `18pt ${font}`;
    tCtx.clearRect(0, 0, 1275, 500);
    const rows = text.split("\n");
    if (rows[1] === void 0)
      rows[1] = "";
    if (rows[2] === void 0)
      rows[2] = "";
    if (rows[0] && rows[1] && !rows[2]) {
      tCtx.fillText(rows[0], 500, 387);
      tCtx.fillText(rows[1], 500, 417);
      return;
    }
    tCtx.fillText(rows[0], 500, 373);
    tCtx.fillText(rows[1], 500, 403);
    tCtx.fillText(rows[2], 500, 433);
    return;
  }, [text, font]);
  const drawPortrait = (charImage, portraitXY, w, h) => {
    pCtx = portraitCanvas.current.getContext("2d");
    pCtx.clearRect(0, 0, 1275, 500);
    let x;
    let y;
    if (!simplePositions[char]) {
      const specialPosition = findSpecialPosition(char, emote, costume);
      x = specialPosition[0];
      y = specialPosition[1];
    } else {
      x = portraitXY[0];
      y = portraitXY[1];
    }
    pCtx.drawImage(charImage, x, y, w, h);
    return;
  };
  const drawBox = (boxImage) => {
    bCtx = boxCanvas.current.getContext("2d");
    const width = boxImage.width;
    const height = boxImage.height;
    const heightOffset = height - 250;
    bCtx.clearRect(0, 0, 1275, 500);
    bCtx.drawImage(boxImage, 320, 250 - heightOffset, width, height);
    return;
  };
  return /* @__PURE__ */ React.createElement("main", {
    id: "canvasDiv"
  }, /* @__PURE__ */ React.createElement("canvas", {
    ref: portraitCanvas,
    id: "portraitCanvas",
    width: "1275",
    height: "500"
  }, "Sorry! This generator requires a browser that supports HTML5!"), /* @__PURE__ */ React.createElement("canvas", {
    ref: boxCanvas,
    id: "boxCanvas",
    width: "1275",
    height: "500"
  }, "Sorry! This generator requires a browser that supports HTML5!"), /* @__PURE__ */ React.createElement("canvas", {
    ref: textCanvas,
    id: "textCanvas",
    width: "1275",
    height: "500"
  }, "Sorry! This generator requires a browser that supports HTML5!"), /* @__PURE__ */ React.createElement("img", {
    alt: "Potrait",
    ref: character,
    id: "portrait",
    className: "hidden",
    src: portrait,
    onLoad: () => drawPortrait(character.current, simplePositions[char], 500, 500)
  }), /* @__PURE__ */ React.createElement("img", {
    alt: "Dialogue box",
    ref: dialogueBox,
    id: "box",
    className: "hidden",
    src: box,
    onLoad: () => drawBox(dialogueBox.current)
  }));
};
export default ImageCanvas;
