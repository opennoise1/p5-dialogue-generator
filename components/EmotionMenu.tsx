import React, { useEffect, SyntheticEvent } from 'react';

const EmotionMenu = ({ char, emote, setEmote, setCostume, costume, emoteMenus, setCostumeMenus }) => {
let charEmotes = [];

if (emoteMenus.length) {
  charEmotes = emoteMenus.map(emotion => {
    return (
      <option 
        key={`${char}: ${emotion}`} 
        value={emotion}>{emotion}
      </option>
    );
  })
}

  useEffect(() => {
    fetch('http://localhost:3000/costumes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'emotion': `../images/portraits/${char}/${emote}/` })
    })
    .then(data => data.json())
    .then(parsed => {
      setCostumeMenus(parsed);
      // If the newly selected character doesn't have the previously selected costume...
      if (!parsed.includes(costume)) {
        // ...change the current costume to the top-most costume on the newly fetched menu
        setCostume(parsed[0]);
      }  
    })
    .catch(err => console.log(err));
  }, [char, emote]);


  const switchEmote = (e: SyntheticEvent<HTMLSelectElement>) => {
    return setEmote((e.target as HTMLSelectElement).value);
  }

  return (
    <>
    Emotion:
      <select id='emoteMenu' className='menuOptions knife' value={emote} name='emotions' onChange={switchEmote}>
        {charEmotes}
      </select>
    </>
  )
}

export default EmotionMenu;