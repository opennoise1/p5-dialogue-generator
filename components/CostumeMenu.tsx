import React, { SyntheticEvent } from 'react';

const CostumeMenu = ({ char, setCostume, costumeMenus }) => {
  let charCostumes = [];

  if (costumeMenus.length) {
    charCostumes = costumeMenus.map(costume => {
      return (
        <option key={`${char}: ${costume}`} value={costume}>
          {costume}
        </option>
      );
    });
  }


  const switchCostume = (e: SyntheticEvent<HTMLSelectElement>) => {
    return setCostume((e.target as HTMLSelectElement).value);
  }

  return (
    <select 
    id='costumeMenu' 
    name='costumes' onChange={switchCostume}
    className='menus'>
      {charCostumes}
    </select>
  )
}

export default CostumeMenu;