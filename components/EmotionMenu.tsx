import React from 'react';

const EmotionMenu = ({ char, setEmote }) => {

  const emoteMenuCreator = (currChar) => {
    // TODO: Refactor this to make it more DRY -- 
    // determine which people are missing the six basic emotions or have other, extra emotions like Akechi
    // then return all universal emotions no matter what and return only ones that are particular 
    // to the character in each case

    // TODO 2: Possibly use a node glob module or the node fs module to grab all the current images in the selected
    // character's folder. Then iterate through the files and grab the releveant emotion and costume information from
    // the filenames so that way we can create these options dynamically
    switch(currChar) {
      case 'ann':
        return (
          <>
            <option value='neutral'>Neutral</option>
            <option value='happy'>Happy</option>
            <option value='angry'>Angry</option>
            <option value='shocked'>Shocked</option>
            <option value='hurt'>Hurt</option>
            <option value='sad'>Sad</option>
          </>
        )
      case 'futaba':
        return (
          <>
            <option value='neutral'>Neutral</option>
            <option value='happy'>Happy</option>
            <option value='angry'>Angry</option>
            <option value='shocked'>Shocked</option>
            <option value='hurt'>Hurt</option>
            <option value='sad'>Sad</option>
          </>
        )
      case 'akechi':
        return (
          <>
            <option value='neutral'>Neutral</option>
            <option value='happy'>Happy</option>
            <option value='angry'>Angry</option>
            <option value='shocked'>Shocked</option>
            <option value='hurt'>Hurt</option>
            <option value='sad'>Sad</option>
          </>
        )
      case 'yusuke':
        return (
          <>
            <option value='neutral'>Neutral</option>
            <option value='happy'>Happy</option>
            <option value='angry'>Angry</option>
            <option value='shocked'>Shocked</option>
            <option value='hurt'>Hurt</option>
            <option value='sad'>Sad</option>
          </>
        )
      default:
        return (
          <>
            <option value='neutral'>Neutral</option>
            <option value='happy'>Happy</option>
            <option value='angry'>Angry</option>
            <option value='shocked'>Shocked</option>
            <option value='hurt'>Hurt</option>
            <option value='sad'>Sad</option>
          </>
        )
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