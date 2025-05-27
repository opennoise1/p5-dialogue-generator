import { useEffect, SyntheticEvent } from 'react';

const CharacterMenu = ({ char, emote, setChar, setEmote, setEmoteMenus, setName }) => {

  const switchChar = (e: SyntheticEvent<HTMLSelectElement>) => {
    setChar((e.target as HTMLSelectElement).value);
    // Erase name if "No Portrait" is selected, switch to selected character's name otherwise
    if ((e.target as HTMLSelectElement).value !== 'None') {
      setName((e.target as HTMLSelectElement).value);
      (document.getElementById('nameField') as HTMLTextAreaElement).value = (e.target as HTMLSelectElement).value;
    } else {
      setName('');
      (document.getElementById('nameField') as HTMLTextAreaElement).value = '';
    }
    return;
  };

  useEffect(() => {
    fetch('/emotions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'char': `../generators/P3/images/portraits/${char}/` })
    })
    .then(data => data.json())
    .then(parsed => {
      setEmoteMenus(parsed);
      // If the newly selected character doesn't have the previously selected emotion...
      if (!parsed.includes(emote)) {
        // ...change the current emotion to the top-most emotion on the newly fetched menu
        setEmote(parsed[0]);
      }
    })
    .catch(err => console.log(err));
    return;
  }, [char]);

  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Character</div>
      <select id='charMenu' className='menuOptions cursor' value={char} name='characters' onChange={switchChar}>
        <option value='Akihiko'>Akihiko Sanada</option>
        <option value='Yukari'>Yukari Takeba</option>
      </select>
    </div>
  );
};

export default CharacterMenu;