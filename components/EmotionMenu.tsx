import React from 'react';

const EmotionMenu = ({ char, setEmote, emoteMenus }) => {

  const charEmotes = emoteMenus.map(emotion => {
    return (
      <option 
        key={`${char}: ${emotion}`} 
        value={emotion}>{emotion}
      </option>
    );
  })

  const switchEmote = (e: any) => {
    return setEmote(e.target.value);
  }

  return (
    <select id='emoteMenu' name='emotions' onChange={switchEmote} className='menus'>
      {charEmotes}
    </select>
  )
}

export default EmotionMenu;