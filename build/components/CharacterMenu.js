import React, {useEffect} from "../_snowpack/pkg/react.js";
const CharacterMenu = ({char, emote, setBox, setChar, setEmote, setEmoteMenus, font}) => {
  const switchChar = (e) => {
    setChar(e.target.value);
    setBox(`../images/boxes/db-${char}-${font}.png`);
  };
  useEffect(() => {
    fetch("http://localhost:3000/emotions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({char: `../images/portraits/${char}/`})
    }).then((data) => data.json()).then((parsed) => {
      setEmoteMenus(parsed);
      if (!parsed.includes(emote)) {
        setEmote(parsed[0]);
      }
    }).catch((err) => console.log(err));
  }, [char]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "menuDivs"
  }, /* @__PURE__ */ React.createElement("div", null, "Character: "), /* @__PURE__ */ React.createElement("select", {
    id: "charMenu",
    className: "menuOptions knife",
    value: char,
    name: "characters",
    onChange: switchChar
  }, /* @__PURE__ */ React.createElement("option", {
    value: "Ann"
  }, "Ann Takamaki"), /* @__PURE__ */ React.createElement("option", {
    value: "Caroline"
  }, "Caroline"), /* @__PURE__ */ React.createElement("option", {
    value: "Chihaya"
  }, "Chihaya Mifune"), /* @__PURE__ */ React.createElement("option", {
    value: "Hiraguchi"
  }, "Coach Hiraguchi"), /* @__PURE__ */ React.createElement("option", {
    value: "Futaba"
  }, "Futaba Sakura"), /* @__PURE__ */ React.createElement("option", {
    value: "Akechi"
  }, "Goro Akechi"), /* @__PURE__ */ React.createElement("option", {
    value: "Haru"
  }, "Haru Okumura"), /* @__PURE__ */ React.createElement("option", {
    value: "Hifumi"
  }, "Hifumi Togo"), /* @__PURE__ */ React.createElement("option", {
    value: "Ohya"
  }, "Ichiko Ohya"), /* @__PURE__ */ React.createElement("option", {
    value: "Madarame"
  }, "Ichiryusai Madarame"), /* @__PURE__ */ React.createElement("option", {
    value: "Igor"
  }, "Igor"), /* @__PURE__ */ React.createElement("option", {
    value: "Jose"
  }, "Jose"), /* @__PURE__ */ React.createElement("option", {
    value: "Kaneshiro"
  }, "Junya Kaneshiro"), /* @__PURE__ */ React.createElement("option", {
    value: "Justine"
  }, "Justine"), /* @__PURE__ */ React.createElement("option", {
    value: "Okumura"
  }, "Kunikazu Okumura"), /* @__PURE__ */ React.createElement("option", {
    value: "Lavenza"
  }, "Lavenza"), /* @__PURE__ */ React.createElement("option", {
    value: "Makoto"
  }, "Makoto Niijima"), /* @__PURE__ */ React.createElement("option", {
    value: "Shido"
  }, "Masayoshi Shido"), /* @__PURE__ */ React.createElement("option", {
    value: "Mika"
  }, "Mika"), /* @__PURE__ */ React.createElement("option", {
    value: "Morgana"
  }, "Morgana"), /* @__PURE__ */ React.createElement("option", {
    value: "Iwai"
  }, "Munehisa Iwai"), /* @__PURE__ */ React.createElement("option", {
    value: "Nakanohara"
  }, "Natsuhiko Nakanohara"), /* @__PURE__ */ React.createElement("option", {
    value: "Principal"
  }, "Principal Kobayakawa"), /* @__PURE__ */ React.createElement("option", {
    value: "Rumi"
  }, "Rumi"), /* @__PURE__ */ React.createElement("option", {
    value: "Ryuji"
  }, "Ryuji Sakamoto"), /* @__PURE__ */ React.createElement("option", {
    value: "Kawakami"
  }, "Sadayo Kawakami"), /* @__PURE__ */ React.createElement("option", {
    value: "Sae"
  }, "Sae Niijima"), /* @__PURE__ */ React.createElement("option", {
    value: "Shibusawa"
  }, "Shibusawa"), /* @__PURE__ */ React.createElement("option", {
    value: "Shiho"
  }, "Shiho Suzui"), /* @__PURE__ */ React.createElement("option", {
    value: "Shinichi"
  }, "Shinichi Yoshizawa"), /* @__PURE__ */ React.createElement("option", {
    value: "Shinya"
  }, "Shinya Oda"), /* @__PURE__ */ React.createElement("option", {
    value: "Teachers"
  }, "Shujin Teachers"), /* @__PURE__ */ React.createElement("option", {
    value: "Director"
  }, "SIU Director"), /* @__PURE__ */ React.createElement("option", {
    value: "Sojiro"
  }, "Sojiro Sakura"), /* @__PURE__ */ React.createElement("option", {
    value: "Sugimura"
  }, "Sugimura"), /* @__PURE__ */ React.createElement("option", {
    value: "Kamoshida"
  }, "Suguru Kamoshida"), /* @__PURE__ */ React.createElement("option", {
    value: "Sumire"
  }, "Sumire Yoshizawa"), /* @__PURE__ */ React.createElement("option", {
    value: "Takemi"
  }, "Tae Takemi"), /* @__PURE__ */ React.createElement("option", {
    value: "Maruki"
  }, "Takuto Maruki"), /* @__PURE__ */ React.createElement("option", {
    value: "Tanaka"
  }, "Tanaka"), /* @__PURE__ */ React.createElement("option", {
    value: "Yoshida"
  }, "Toranosuke Yoshida"), /* @__PURE__ */ React.createElement("option", {
    value: "Wakaba"
  }, "Wakaba Isshiki"), /* @__PURE__ */ React.createElement("option", {
    value: "Yusuke"
  }, "Yusuke Kitagawa"), /* @__PURE__ */ React.createElement("option", {
    value: "Mishima"
  }, "Yuuki Mishima")));
};
export default CharacterMenu;
