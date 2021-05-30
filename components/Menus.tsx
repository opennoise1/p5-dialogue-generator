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
    costume: string,
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
    costume,
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
  
  return (
    <>
      <div className='menus'>
        Character:
          <CharacterMenu {...menuProps} />
        Emotion:
          <EmotionMenu {...menuProps} />
        Costume:
          <CostumeMenu {...menuProps} />
      </div>
    </>
  )
};

export default Menus;