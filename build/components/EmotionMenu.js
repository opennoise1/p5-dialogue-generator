import React, {useEffect} from "../_snowpack/pkg/react.js";
const EmotionMenu = ({char, emote, setEmote, setCostume, costume, emoteMenus, setCostumeMenus}) => {
  let charEmotes = [];
  if (emoteMenus.length) {
    charEmotes = emoteMenus.map((emotion) => {
      return /* @__PURE__ */ React.createElement("option", {
        key: `${char}: ${emotion}`,
        value: emotion
      }, emotion);
    });
  }
  useEffect(() => {
    fetch("http://localhost:3000/costumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({emotion: `../images/portraits/${char}/${emote}/`})
    }).then((data) => data.json()).then((parsed) => {
      setCostumeMenus(parsed);
      if (!parsed.includes(costume)) {
        setCostume(parsed[0]);
      }
    }).catch((err) => console.log(err));
  }, [char, emote]);
  const switchEmote = (e) => {
    return setEmote(e.target.value);
  };
  return /* @__PURE__ */ React.createElement("select", {
    id: "emoteMenu",
    className: "menus",
    value: emote,
    name: "emotions",
    onChange: switchEmote
  }, charEmotes);
};
export default EmotionMenu;
