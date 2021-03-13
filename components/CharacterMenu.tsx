import React from 'react';

const CharacterMenu = ({ setChar }) => {

  const switchChar = (e: any) => {
    return setChar(e.target.value);
  }

  return (
    <select id='charMenu' name='characters' onChange={switchChar} className='menus'>
      <option value='ann'>Ann Takamaki</option>
      <option value='futaba'>Futaba Sakura</option>
      <option value='akechi'>Goro Akechi</option>
      <option value='haru'>Haru Okumura</option>
      <option value='yoshizawa'>Kasumi Yoshizawa</option>
      <option value='makoto'>Makoto Niijima</option>
      <option value='morgana'>Morgana</option>
      <option value='ryuji'>Ryuji Sakamoto</option>
      <option value='saw'>Sae Niijima</option>
      <option value='sojiro'>Sojiro Sakura</option>
      <option value='yusuke'>Yusuke Futagawa</option>
    </select>
  )
}

export default CharacterMenu;