import React, { useEffect } from 'react';

const EmotionMenu = ({ char, emote, setEmote, emoteMenus, setCostumeMenus }) => {

  const charEmotes = emoteMenus.map(emotion => {
    return (
      <option 
        key={`${char}: ${emotion}`} 
        value={emotion}>{emotion}
      </option>
    );
  })

  useEffect(() => {
    fetch('http://localhost:3000/costumes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'emotion': `../images/portraits/${char}/${emote}/` })
    })
    .then(data => data.json())
    .then(parsed => setCostumeMenus(parsed))
    .catch(err => console.log(err));
  }, [emote]);


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