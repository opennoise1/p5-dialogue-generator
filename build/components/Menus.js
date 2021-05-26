import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import CharacterMenu from "./CharacterMenu.js";
import EmotionMenu from "./EmotionMenu.js";
import CostumeMenu from "./CostumeMenu.js";
const Menus = ({char, setChar, emote, setEmote, costume, setCostume, setPortrait}) => {
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
    setCostumeMenus
  };
  useEffect(() => {
    setPortrait(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  }, [char, emote, costume]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, "Character:", /* @__PURE__ */ React.createElement(CharacterMenu, {
    ...menuProps
  }), "Emotion:", /* @__PURE__ */ React.createElement(EmotionMenu, {
    ...menuProps
  }), "Costume:", /* @__PURE__ */ React.createElement(CostumeMenu, {
    ...menuProps
  }));
};
export default Menus;
