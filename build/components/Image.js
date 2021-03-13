import React, {useEffect} from "../_snowpack/pkg/react.js";
const Image = ({portrait}) => {
  useEffect(() => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const portrait2 = this.refs.portrait;
    const box = this.refs.box;
    img.onload = () => {
      ctx.drawImage(box, 0, 0);
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("canvas", {
    ref: "canvas",
    width: "800",
    length: "450"
  }), /* @__PURE__ */ React.createElement("img", {
    ref: "portrait",
    src: portrait,
    className: "hidden"
  }), /* @__PURE__ */ React.createElement("img", {
    ref: "box",
    src: "../images/dialoguebox.png",
    className: "hidden"
  }));
};
export default Image;
