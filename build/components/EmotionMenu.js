import React, {useEffect} from "../_snowpack/pkg/react.js";
const EmotionMenu = ({char, emote, setEmote, emoteMenus, setCostumeMenus}) => {
  const charEmotes = emoteMenus.map((emotion) => {
    return /* @__PURE__ */ React.createElement("option", {
      key: `${char}: ${emotion}`,
      value: emotion
    }, emotion);
  });
  useEffect(() => {
    fetch("http://localhost:3000/costumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({emotion: `../images/portraits/${char}/${emote}/`})
    }).then((data) => data.json()).then((parsed) => setCostumeMenus(parsed)).catch((err) => console.log(err));
  }, [emote]);
  const switchEmote = (e) => {
    return setEmote(e.target.value);
  };
  return /* @__PURE__ */ React.createElement("select", {
    id: "emoteMenu",
    name: "emotions",
    onChange: switchEmote,
    className: "menus"
  }, charEmotes);
};
export default EmotionMenu;
