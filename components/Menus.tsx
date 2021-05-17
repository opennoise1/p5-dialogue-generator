import React, { useState, useEffect } from 'react';
import CharacterMenu from './CharacterMenu';
import EmotionMenu from './EmotionMenu';
import CostumeMenu from './CostumeMenu';

const Menus = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait }) => {
  const [emoteMenus, setEmoteMenus] = useState<string[]>([]);
  const [costumeMenus, setCostumeMenus] = useState<string[]>([]);

  const menuProps: { 
    char: string, 
    emote: string, 
    setChar: any, 
    setEmote: any, 
    setCostume: any,
    emoteMenus: any,
    setEmoteMenus: any,
    costumeMenus: any,
    setCostumeMenus: any, 
  } = {
    char,
    emote,
    setChar,
    setEmote,
    setCostume,
    emoteMenus,
    setEmoteMenus,
    costumeMenus,
    setCostumeMenus,
  }

  useEffect(() => {
    setPortrait(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`)
  }, [char, emote, costume])

  // useEffect(() => {
  //   fetch('http://localhost:3000/emotions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ 'char': `../images/portraits/${char}/` })
  //   })
  //   .then(data => data.json())
  //   .then(parsed => setEmoteMenus(parsed))
  //   .catch(err => console.log(err));

  //   fetch('http://localhost:3000/costumes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ 'emotion': `../images/portraits/${char}/${emote}/` })
  //   })
  //   .then(data => data.json())
  //   .then(parsed => setCostumeMenus(parsed))
  //   .catch(err => console.log(err));
  // }, []);

  
  
  return (
    <>
      Character:
        <CharacterMenu {...menuProps} />
      Emotion:
        <EmotionMenu {...menuProps} />
      Costume:
        <CostumeMenu {...menuProps} />
    </>
  )
};

export default Menus;