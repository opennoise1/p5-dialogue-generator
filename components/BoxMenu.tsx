import React, { SyntheticEvent } from 'react';
import { boxFinder } from '../utils/boxFinder';

const BoxMenu = ({ char, setSelection, selection, setBox, font }) => {

  const options = boxFinder(char);

  const switchBox = (e: SyntheticEvent<HTMLSelectElement>) => {
    const newSelection = (e.target as HTMLSelectElement).value;
    setSelection(newSelection);
    setBox(`../images/boxes/db-${selection}-${font}.png`)
  };

  return (
    <div className='menuDivs'>
      <div>Box: </div>
      <select id='boxMenu' className='menuOptions knife' value={selection} onChange={switchBox}>
        {options}
      </select>
    </div>
  );
};

export default BoxMenu;