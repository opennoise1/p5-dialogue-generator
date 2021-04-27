import React, {useEffect, useRef, useState} from "../_snowpack/pkg/react.js";
const ImageCanvas = ({portrait, text}) => {
  const [isBoxLoaded, setBoxLoaded] = useState(false);
  const canvas = useRef(null);
  const character = useRef(null);
  const box = useRef(null);
  let ctx;
  const boxHeight = 135;
  const boxRatio = 800 / 226;
  const boxWidth = boxHeight * boxRatio;
  useEffect(() => ctx = canvas.current.getContext("2d"));
  useEffect(() => {
    ctx.fillStyle = "#FFFFFF";
    return ctx.fillText(text, 320, 370);
  }, [text]);
  const draw = (image, x, y, w, h) => {
    ctx.clearRect(x, y, w, h);
    ctx.drawImage(image, x, y, w, h);
    return isBoxLoaded ? ctx.drawImage(box.current, 240, 295, boxWidth, boxHeight) : null;
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("canvas", {
    ref: canvas,
    id: "canvas",
    width: "800",
    height: "450"
  }, "Sorry! This generator requires a browser that supports HTML5!"), /* @__PURE__ */ React.createElement("img", {
    ref: character,
    id: "portrait",
    onLoad: () => draw(character.current, 20, 130, 320, 320),
    src: portrait,
    className: "hidden"
  }), /* @__PURE__ */ React.createElement("img", {
    ref: box,
    id: "box",
    src: "../images/dialoguebox.png",
    onLoad: () => setBoxLoaded(true),
    className: "hidden"
  }));
};
export default ImageCanvas;
