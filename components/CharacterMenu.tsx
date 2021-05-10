import React, { useEffect } from 'react';

const CharacterMenu = ({ char, setChar, setEmoteMenus }) => {

  const switchChar = (e: any) => {
    setChar(e.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:3000/emotions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'char': `../images/portraits/${char}/` })
    })
    .then(data => data.json())
    .then(parsed => setEmoteMenus(parsed))
    .catch(err => console.log(err));
  }, [char]);

  return (
    <select id='charMenu' name='characters' onChange={switchChar} className='menus'>
      <option value='Ann'>Ann Takamaki</option>
      <option value='Futaba'>Futaba Sakura</option>
      <option value='Akechi'>Goro Akechi</option>
      <option value='Haru'>Haru Okumura</option>
      <option value='Makoto'>Makoto Niijima</option>
      <option value='Morgana'>Morgana</option>
      <option value='Ryuji'>Ryuji Sakamoto</option>
      <option value='Sae'>Sae Niijima</option>
      <option value='Sojiro'>Sojiro Sakura</option>
      <option value='Sumire'>Sumire Yoshizawa</option>
      <option value='Yusuke'>Yusuke Kitagawa</option>
    </select>
  );
}

export default CharacterMenu;