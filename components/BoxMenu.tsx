import { SyntheticEvent } from 'react';
import { boxFinder } from '../utils/boxFinder';

const BoxMenu = ({ char, boxFont, selection, setSelection, setBox }) => {

  const options: JSX.Element = boxFinder(char);

  const switchBox = (e: SyntheticEvent<HTMLSelectElement>) => {
    setSelection((e.target as HTMLSelectElement).value);
    setBox(`../images/boxes/db-${selection}-${boxFont}.png`)
  };

  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Box: </div>
      <select id='boxMenu' className='menuOptions knife' value={selection} onChange={switchBox}>
        {options}
      </select>
    </div>
  );
};

export default BoxMenu;