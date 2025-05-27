import TacticaCharacterMenu from "./TacticaCharacterMenu";
import TacticaEmotionMenu from "./TacticaEmotionMenu";
import TacticaCostumeMenu from "./TacticaCostumeMenu";
import { useState, useEffect } from "react";

const TacticaMenus = ({ name, setName, char, setChar, emote, setEmote, costume, setCostume, charOne, 
  setCharOne, charTwo, setCharTwo, charThree, setCharThree, charFour, setCharFour, 
  emoteOne, setEmoteOne, emoteTwo, setEmoteTwo, emoteThree, setEmoteThree, emoteFour, setEmoteFour, 
  costumeOne, setCostumeOne, costumeTwo, setCostumeTwo, costumeThree, setCostumeThree, 
  costumeFour, setCostumeFour, setPortrait, setTacticaOne, 
  setTacticaTwo, setTacticaThree, setTacticaFour, selectedPortrait }) => {

  const [emoteOneMenus, setEmoteOneMenus] = useState<string[]>([]);
  const [emoteTwoMenus, setEmoteTwoMenus] = useState<string[]>([]);
  const [emoteThreeMenus, setEmoteThreeMenus] = useState<string[]>([]);
  const [emoteFourMenus, setEmoteFourMenus] = useState<string[]>([]);

  const [costumeOneMenus, setCostumeOneMenus] = useState<string[]>([]);
  const [costumeTwoMenus, setCostumeTwoMenus] = useState<string[]>([]);
  const [costumeThreeMenus, setCostumeThreeMenus] = useState<string[]>([]);
  const [costumeFourMenus, setCostumeFourMenus] = useState<string[]>([]);

  const menuProps: any = {
    name,
    setName,
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    charOne,
    setCharOne,
    charTwo,
    setCharTwo,
    charThree,
    setCharThree,
    charFour,
    setCharFour,
    emoteOne,
    setEmoteOne,
    emoteTwo,
    setEmoteTwo,
    emoteThree,
    setEmoteThree,
    emoteFour,
    setEmoteFour,
    costumeOne,
    setCostumeOne,
    costumeTwo,
    setCostumeTwo,
    costumeThree,
    setCostumeThree,
    costumeFour,
    setCostumeFour,
    setPortrait,
    setTacticaOne,
    setTacticaTwo,
    setTacticaThree,
    setTacticaFour,
    selectedPortrait,
    emoteOneMenus,
    setEmoteOneMenus,
    emoteTwoMenus,
    setEmoteTwoMenus,
    emoteThreeMenus,
    setEmoteThreeMenus,
    emoteFourMenus,
    setEmoteFourMenus,
    costumeOneMenus,
    setCostumeOneMenus,
    costumeTwoMenus,
    setCostumeTwoMenus,
    costumeThreeMenus,
    setCostumeThreeMenus,
    costumeFourMenus,
    setCostumeFourMenus,
  }

  useEffect(() => {
    switch (selectedPortrait) {
      case 'tacticaBoxOne': {
        // setTacticaOne(`https://testing-s3-p5.s3.amazonaws.com/portraits/${charOne}/${emoteOne}/${charOne}-${emoteOne}-${costumeOne}.png`);
        setTacticaOne(`../images/tactica portraits/${charOne}/${emoteOne}/${charOne}-${emoteOne}-${costumeOne}.png`)
      }
      case 'tacticaBoxTwo': {
        // setTacticaTwo(`https://testing-s3-p5.s3.amazonaws.com/portraits/${charTwo}/${emoteTwo}/${charTwo}-${emoteTwo}-${costumeTwo}.png`);
        setTacticaTwo(`../images/tactica portraits/${charTwo}/${emoteTwo}/${charTwo}-${emoteTwo}-${costumeTwo}.png`)
      }
      case 'tacticaBoxThree': {
        // setTacticaThree(`https://testing-s3-p5.s3.amazonaws.com/portraits/${charThree}/${emoteThree}/${charThree}-${emoteThree}-${costumeThree}.png`);
        setTacticaThree(`../images/tactica portraits/${charThree}/${emoteThree}/${charThree}-${emoteThree}-${costumeThree}.png`)
      }
      case 'tacticaBoxFour': {
        // setTacticaFour(`https://testing-s3-p5.s3.amazonaws.com/portraits/${charFour}/${emoteFour}/${charFour}-${emoteFour}-${costumeFour}.png`);
        setTacticaFour(`../images/tactica portraits/${charFour}/${emoteFour}/${charFour}-${emoteFour}-${costumeFour}.png`)
      }
    }
    return;
  }, [charOne, charTwo, charThree, charFour, 
      emoteOne, emoteTwo, emoteThree, emoteFour, 
      costumeOne, costumeTwo, costumeThree, costumeFour]);

  return (
    <div id='tacticaMenus'>
      <TacticaCharacterMenu {...menuProps} />
      <TacticaEmotionMenu {...menuProps} />
      <TacticaCostumeMenu {...menuProps} />
    </div>
  )
};

export default TacticaMenus;