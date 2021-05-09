import React from 'react';

const CharacterMenu = ({ setChar }) => {

  const switchChar = (e: any) => {
    return setChar(e.target.value);
  }

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
  )
}

export default CharacterMenu;