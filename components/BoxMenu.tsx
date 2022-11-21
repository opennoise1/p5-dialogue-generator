import React from 'react';
import { SyntheticEvent } from 'react';
import { boxFinder } from '../utils/boxFinder';

const BoxMenu = ({ char, setBox }) => {

  const options: any = boxFinder(char);

  const switchBox = (e: SyntheticEvent<HTMLSelectElement>) => {
    // setBox(`../images/boxes/db-${selection}-${boxFont}.png`)
  };

  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Box</div>
      <select id='boxMenu' className='menuOptions knife' onChange={switchBox}>
        {options}
      </select>
    </div>
  );
};

export default BoxMenu;