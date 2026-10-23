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
        <option value='Aigis'>Aigis</option>
        <option value='Akihiko'>Akihiko Sanada</option>
        <option value='Bebe'>Bebe (Andre Laurent Jean Geraux)</option>
        <option value='Chihiro'>Chihiro Fushimi</option>
        <option value='Emiri'>Emiri Kanou</option>
        <option value='Fuuka'>Fuuka Yamagishi</option>
        <option value='Hidetoshi'>Hidetoshi Odagiri</option>
        <option value='Toriumi'>Isako Toriumi</option>
        <option value='Ikutsuki'>Shuji Ikutsuki</option>
        <option value='Junpei'>Junpei Iori</option>
        <option value='Kazushi'>Kazushi Miyamoto</option>
        <option value='Keisuke'>Keisuke Hiraga</option>
        <option value='Ken'>Ken Amada</option>
        <option value='Kenji'>Kenji Tomochika</option>
        <option value='Koromaru'>Koromaru</option>
        <option value='Metis'>Metis</option>
        <option value='Mitsuru'>Mitsuru Kirijo</option>
        <option value='Edogawa'>Mr. Edogawa</option>
        <option value='Ekoda'>Mr. Ekoda</option>
        <option value='Miyahara'>Mr. Miyahara</option>
        <option value='Takenozuka'>Mr. Takenozuka</option>
        <option value='Terauchi'>Mrs. Terauchi</option>
        <option value='Ono'>Mr. Ono</option>
        <option value='Ounishi'>Ms. Ounishi</option>
        <option value='Natsuki'>Natsuki Moriyama</option>
        <option value='Nozomi'>Nozomi Suemitsu</option>
        <option value='MC'>Protagonist (Male)</option>
        <option value='FeMC'>Protagonist (Female)</option>
        <option value='Ryoji'>Ryoji Mochizuki</option>
        <option value='Shinji'>Shinjiro Aragaki</option>
        <option value='Yukari'>Yukari Takeba</option>
        <option value='Yuko'>Yuko Nishiwaki</option>
      </select>
    </div>
  );
};

export default CharacterMenu;