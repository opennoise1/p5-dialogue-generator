import { SyntheticEvent } from 'react';

const CostumeMenu = ({ char, costume, setCostume, costumeMenus }) => {
  let charCostumes: string[] = [];

  // Check to see if the costume menus have been generated from the fetch request
  // before attempting to map over them
  if (costumeMenus.length) {
    charCostumes = costumeMenus.map(costume => {
      return (
        <option key={`${char}: ${costume}`} value={costume}>
          {costume}
        </option>
      );
    });
  };

  const switchCostume = (e: SyntheticEvent<HTMLSelectElement>) => {
    setCostume((e.target as HTMLSelectElement).value);
    return;
  };

  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Costume</div>
      <select id='costumeMenu' className='menuOptions cursor' value={costume} name='costumes' onChange={switchCostume}>
        {charCostumes}
      </select>
    </div>
  );
};

export default CostumeMenu;