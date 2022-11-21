import { useState, useEffect } from 'react';
import CharacterMenu from './CharacterMenu';
import EmotionMenu from './EmotionMenu';
import CostumeMenu from './CostumeMenu';

const Menus = ({ char, setChar, emote, setEmote, costume, 
  setCostume, setPortrait, font, box, name, setName, setBox }) => {
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
      </div>
    </>
  );
};

export default Menus;