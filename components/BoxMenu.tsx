import React from 'react';
import { SyntheticEvent } from 'react';

const BoxMenu = ({ setBoxType }) => {

  const switchBox = (e: SyntheticEvent<HTMLSelectElement>) => {
    setBoxType((e.target as HTMLSelectElement).value);
  };

  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Box</div>
      <select id='boxMenu' className='menuOptions knife' onChange={switchBox}>
        <option value='main'>Persona 5&#47;Royal</option>
        <option value='noPortrait'>Persona 5 &#40;No Portrait&#41;</option>
        <option value='strikers'>Strikers&#47;Scramble</option>
        <option value='dancing'>Dancing in Starlight</option>
      </select>
    </div>
  );
};

export default BoxMenu;