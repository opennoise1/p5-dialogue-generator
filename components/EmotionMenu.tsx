import React from 'react';

const baseEmotions = 
  <>
    <option value='neutral'>Neutral</option>
    <option value='happy'>Happy</option>
    <option value='angry'>Angry</option>
    <option value='shocked'>Shocked</option>
    <option value='hurt'>Hurt</option>
    <option value='sad'>Sad</option>
  </>;

const EmotionMenu = ({ char, setEmote }) => {

  const emoteMenuCreator = (currChar) => {
    // TODO: Refactor this to make it more DRY -- 
    // determine which people are missing the six basic emotions or have other, extra emotions like Akechi
    // then return all universal emotions no matter what and return only ones that are particular 
    // to the character in each case

    // TODO 2: Finish portraitNameParser later so we can create these menus dynamically by moving 
    // through the file names, assuming that it isn't too expensive
    switch(currChar) {
      case 'ann':
        return baseEmotions;
      case 'futaba':
        return baseEmotions;
      case 'akechi':
        return baseEmotions;
      case 'yusuke':
        return baseEmotions;
      default:
        return baseEmotions;
    }
  }

  const switchEmote = (e: any) => {
    return setEmote(e.target.value);
  }

  return (
    <select id='emoteMenu' name='emotions' onChange={switchEmote} className='menus'>
      {emoteMenuCreator(char)}
    </select>
  )
}

export default EmotionMenu;