import React, { useEffect } from 'react';
import CharacterMenu from './CharacterMenu';
import EmotionMenu from './EmotionMenu';
import CostumeMenu from './CostumeMenu';

const Menus = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait }) => {

  const menuProps: { 
    char: string, 
    emote: string, 
    setChar: any, 
    setEmote: any, 
    setCostume: any 
  } = {
    char,
    emote,
    setChar,
    setEmote,
    setCostume,
  }

  useEffect(() => {
    setPortrait(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`)
  }, [char, emote, costume])
  
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