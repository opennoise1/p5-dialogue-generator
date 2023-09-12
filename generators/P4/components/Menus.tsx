import { useState, useEffect } from 'react';
import CharacterMenu from './CharacterMenu';
import EmotionMenu from './EmotionMenu';
import CostumeMenu from './CostumeMenu';
// import BoxMenu from './BoxMenu';

const Menus = ({ char, setChar, emote, setEmote, costume, 
  setCostume, setPortrait, version, setVersion, boxBack, setBack, boxFront, setFront, name, setName }) => {
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
    version,
    setVersion,
    boxBack,
    setBack,
    boxFront,
    setFront,
    name,
    setName,
  };

  useEffect(() => {
    setPortrait(`https://p4generator.s3.amazonaws.com/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
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