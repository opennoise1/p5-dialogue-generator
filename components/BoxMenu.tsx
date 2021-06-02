import React, {SyntheticEvent} from 'react';

const BoxMenu = ({}) => {

  const switchBox = (e: SyntheticEvent<HTMLSelectElement>) => {
    // return setBox((e.target as HTMLSelectElement).value);
  }

  return (
    <div className='menuDivs'>
      <div>Box: </div>
      <select id='boxMenu' className='menuOptions knife' >
        <option value='Sumire'>Sumire</option>
        <option value='Kasumi'>Kasumi</option>
      </select>
    </div>
  )
}

export default BoxMenu;