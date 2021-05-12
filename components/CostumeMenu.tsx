import React from 'react';

const CostumeMenu = ({ char, setCostume, costumeMenus }) => {
  let charCostumes = [];

  if (costumeMenus.length) {
    charCostumes = costumeMenus.map(costume => {
      return (
        <option 
          key={`${char}: ${costume}`} 
          value={costume}>{costume}
        </option>
      );
    });
  }

  const switchCostume = (e: any) => {
    return setCostume(e.target.value);
  }

  return (
    <select id='costumeMenu' name='costumes' onChange={switchCostume} className='menus'>
      {charCostumes}
    </select>
  )
}

export default CostumeMenu;