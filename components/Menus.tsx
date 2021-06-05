import React, { useState, useEffect } from 'react';
import CharacterMenu from './CharacterMenu';
import EmotionMenu from './EmotionMenu';
import CostumeMenu from './CostumeMenu';
import BoxMenu from './BoxMenu';

import { boxDirectory } from '../utils/boxFinder'

const Menus = ({ char, setChar, emote, setEmote, costume, 
  setCostume, setPortrait, font, box, boxFont, setBox, selection, setSelection }) => {
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
    font,
    box,
    setBox,
    selection,
    setSelection,
  };

  useEffect(() => {
    setBox(`../images/boxes/db-${selection}-${boxFont}.png`);
    setPortrait(`../images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
    return;
  }, [char, emote, costume, selection]);

  useEffect(() => {
    setSelection(char);
  }, [char]);

  return (
    <>
      <div className='menus'>
        <CharacterMenu {...menuProps} />
        <EmotionMenu {...menuProps} />
        <CostumeMenu {...menuProps} />
        {/* Only display the box menu if the character has multiple box options */}
        {boxDirectory[char]
          ? <BoxMenu {...menuProps} />
          : null
        }
      </div>
    </>
  );
};

export default Menus;