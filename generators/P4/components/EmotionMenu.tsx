import { useEffect, SyntheticEvent } from 'react';

const EmotionMenu = ({ char, emote, setEmote, setCostume, costume, emoteMenus, setCostumeMenus }) => {
let charEmotes: string[] = [];

  // Check to see if the emotion menus have been generated from the fetch request
  // before attempting to map over them
if (emoteMenus.length) {
  charEmotes = emoteMenus.map(emotion => {
    return (
      <option key={`${char}: ${emotion}`} value={emotion}>
        {emotion}
      </option>
    );
  });
};

  useEffect(() => {
    fetch('/costumes', {
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
    return;
  }, [char, emote]);


  const switchEmote = (e: SyntheticEvent<HTMLSelectElement>) => {
    return setEmote((e.target as HTMLSelectElement).value);
  }

  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Emotion</div>
      <select id='emoteMenu' className='menuOptions cursor' value={emote} name='emotions' onChange={switchEmote}>
        {charEmotes}
      </select>
    </div>
  );
};

export default EmotionMenu;