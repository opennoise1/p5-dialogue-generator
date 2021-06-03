import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import CharacterMenu from "./CharacterMenu.js";
import EmotionMenu from "./EmotionMenu.js";
import CostumeMenu from "./CostumeMenu.js";
import BoxMenu from "./BoxMenu.js";
import {boxDirectory} from "../utils/boxFinder.js";
const Menus = ({char, setChar, emote, setEmote, costume, setCostume, setPortrait, font, box, setBox}) => {
  const [emoteMenus, setEmoteMenus] = useState([]);
  const [costumeMenus, setCostumeMenus] = useState([]);
  const menuProps = {
    char,
    emote,
    costume,
    setChar,
    setEmote,
    setCostume,
    emoteMenus,
    setEmoteMenus,
    costumeMenus,
    setCostumeMenus,
    font,
    box,
    setBox
  };
  useEffect(() => {
    setPortrait(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  }, [char, emote, costume]);
  useEffect(() => {
    setBox(`../images/boxes/db-${char}-${font}.png`);
  }, [char]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "menus"
  }, /* @__PURE__ */ React.createElement(CharacterMenu, {
    ...menuProps
  }), /* @__PURE__ */ React.createElement(EmotionMenu, {
    ...menuProps
  }), /* @__PURE__ */ React.createElement(CostumeMenu, {
    ...menuProps
  }), boxDirectory[char] ? /* @__PURE__ */ React.createElement(BoxMenu, {
    ...menuProps
  }) : null));
};
export default Menus;
