import React, { SyntheticEvent } from 'react';

const CostumeMenu = ({ char, costume, setCostume, costumeMenus }) => {
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
    <select id='costumeMenu' className='menuOptions' value={costume} name='costumes' onChange={switchCostume}>
      {charCostumes}
    </select>
  )
}

export default CostumeMenu;