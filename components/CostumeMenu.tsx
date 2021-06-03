import React, { SyntheticEvent } from 'react';

const CostumeMenu = ({ char, setBox, font, costume, setCostume, costumeMenus }) => {
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
    setCostume((e.target as HTMLSelectElement).value);
    // Since the Shujin teacher characters are determined by the costume selection,
    // the box should be set when the costume is selected, rather than the character
    if (char === 'Teachers') {
      setBox(`../images/boxes/db-${costume}-${font}.png`)
    }
  }

  return (
    <div className='menuDivs'>
      <div>Costume: </div>
      <select id='costumeMenu' className='menuOptions knife' value={costume} name='costumes' onChange={switchCostume}>
        {charCostumes}
      </select>
    </div>
  )
}

export default CostumeMenu;