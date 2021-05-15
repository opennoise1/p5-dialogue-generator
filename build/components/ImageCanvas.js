import React, {useEffect, useRef, useState} from "../_snowpack/pkg/react.js";
const ImageCanvas = ({portrait, text, font}) => {
  const [isBoxLoaded, setBoxLoaded] = useState(false);
  const portraitCanvas = useRef(null);
  const textCanvas = useRef(null);
  const character = useRef(null);
  const box = useRef(null);
  let pCtx;
  let tCtx;
  useEffect(() => {
    pCtx = portraitCanvas.current.getContext("2d");
    tCtx = textCanvas.current.getContext("2d");
    tCtx.fillStyle = "#FFFFFF";
    return tCtx.font = font;
  });
  useEffect(() => {
    tCtx.clearRect(0, 0, 1300, 500);
    const rows = text.split("\n");
    if (!rows[1])
      rows[1] = "";
    if (!rows[2])
      rows[2] = "";
    tCtx.fillText(rows[0], 475, 375);
    tCtx.fillText(rows[1], 475, 400);
    return tCtx.fillText(rows[2], 475, 425);
  }, [text]);
  const draw = (image, x, y, w, h) => {
    const boxHeight = 250;
    const boxRatio = 800 / 226;
    const boxWidth = boxHeight * boxRatio;
    pCtx.clearRect(x, y, w, h);
    pCtx.drawImage(image, x, y, w, h);
    return isBoxLoaded ? pCtx.drawImage(box.current, 320, 250, boxWidth, boxHeight) : null;
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "canvasDiv"
  }, /* @__PURE__ */ React.createElement("canvas", {
    ref: portraitCanvas,
    id: "portraitCanvas",
    width: "1300",
    height: "500"
  }, "Sorry! This generator requires a browser that supports HTML5!"), /* @__PURE__ */ React.createElement("canvas", {
    ref: textCanvas,
    id: "textCanvas",
    width: "1300",
    height: "500"
  }, "Sorry! This generator requires a browser that supports HTML5!"), /* @__PURE__ */ React.createElement("img", {
    ref: character,
    id: "portrait",
    onLoad: () => draw(character.current, 0, 0, 500, 500),
    src: portrait,
    className: "hidden"
  }), /* @__PURE__ */ React.createElement("img", {
    ref: box,
    id: "box",
    src: "../images/db@2x.png",
    onLoad: () => setBoxLoaded(true),
    className: "hidden"
  }));
};
export default ImageCanvas;
