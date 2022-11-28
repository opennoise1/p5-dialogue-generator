import { useState, useEffect } from 'react';
import CharacterMenu from './CharacterMenu';
import EmotionMenu from './EmotionMenu';
import CostumeMenu from './CostumeMenu';
import BoxMenu from './BoxMenu';

const Menus = ({ char, setChar, emote, setEmote, costume, 
  setCostume, setPortrait, font, box, name, setName, setBox, boxSize, setBoxSize, boxType, setBoxType }) => {
  const [emoteMenus, setEmoteMenus] = useState<string[]>([]);
  const [costumeMenus, setCostumeMenus] = useState<string[]>([]);

  const menuProps: any = {
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
    name,
    setName,
    font,
    box,
    setBox,
    boxSize,
    setBoxSize,
    boxType,
    setBoxType,
  };

  useEffect(() => {
    setPortrait(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
    return;
  }, [char, emote, costume]);

  return (
    <>
      <div className='menus'>
        <CharacterMenu {...menuProps} />
        <EmotionMenu {...menuProps} />
        <CostumeMenu {...menuProps} />
        <BoxMenu {...menuProps} />
      </div>
    </>
  );
};

export default Menus;