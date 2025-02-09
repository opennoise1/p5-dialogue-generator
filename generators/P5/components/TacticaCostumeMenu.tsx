import { SyntheticEvent, useEffect } from "react";

const TacticaCostumeMenu = ({ charOne, charTwo, charThree, charFour, costumeOne, costumeTwo,
  costumeThree, costumeFour, setCostumeOne, setCostumeTwo, setCostumeThree, setCostumeFour,
  costumeOneMenus, costumeTwoMenus, costumeThreeMenus, costumeFourMenus, selectedPortrait }) => {

    let charCostumeOptionsOne: string[];
    let charCostumeOptionsTwo: string[];
    let charCostumeOptionsThree: string[];
    let charCostumeOptionsFour: string[];

    let currentCostumeOptions: any[] = [];
    let currentCostumeMenus: string[] = [];
    let currentChar: string;
    let currentCostume: string;

    useEffect(() => {
      switch(selectedPortrait) {
        case 'tacticaBoxOne': { 
          currentCostumeOptions = charCostumeOptionsOne;
          currentCostumeMenus = costumeOneMenus;
          currentChar = charOne;
          currentCostume = costumeOne;
        }
        case 'tacticaBoxTwo': { 
          currentCostumeOptions = charCostumeOptionsTwo;
          currentCostumeMenus = costumeTwoMenus;
          currentChar = charTwo;
          currentCostume = costumeTwo;
        }
        case 'tacticaBoxThree': { 
          currentCostumeOptions = charCostumeOptionsThree;
          currentCostumeMenus = costumeThreeMenus;
          currentChar = charThree;
          currentCostume = costumeThree;
        }
        case 'tacticaBoxFour': { 
          currentCostumeOptions = charCostumeOptionsFour;
          currentCostumeMenus = costumeFourMenus;
          currentChar = charFour;
          currentCostume = costumeFour;
        }
        default: {
          currentCostumeOptions = charCostumeOptionsOne;
          currentCostumeMenus = costumeOneMenus;
          currentChar = charOne;
          currentCostume = costumeOne;
        }
      }
    }, [selectedPortrait])

    // Check to see if the costume menus have been generated from the fetch request
    // before attempting to map over them
    if (currentCostumeMenus.length) {
      currentCostumeOptions = currentCostumeMenus.map(currentCostume => {
        return (
          <option key={`${currentChar}: ${currentCostume}`} value={currentCostume}>
            {currentCostume}
          </option>
        );
      });
    };

    const switchCostumeOne = (e: SyntheticEvent<HTMLSelectElement>) => {
      setCostumeOne((e.target as HTMLSelectElement).value);
      return;
    };
    const switchCostumeTwo = (e: SyntheticEvent<HTMLSelectElement>) => {
      setCostumeTwo((e.target as HTMLSelectElement).value);
      return;
    };
    const switchCostumeThree = (e: SyntheticEvent<HTMLSelectElement>) => {
      setCostumeThree((e.target as HTMLSelectElement).value);
      return;
    };
    const switchCostumeFour = (e: SyntheticEvent<HTMLSelectElement>) => {
      setCostumeFour((e.target as HTMLSelectElement).value);
      return;
    };

    // Maybe this is something that goes in useEffect?
    const switchCostumeMenu = () => {
      switch (selectedPortrait) {
        case 'tacticaBoxOne': {
          return (
            <select id='tacticaCostumeOneMenu' className='menuOptions knife' value={costumeOne} name='firstCostumes' onChange={switchCostumeOne}>
              {charCostumeOptionsOne}
            </select>
          )
        }
        case 'tacticaBoxTwo': {
          return (
            <select id='tacticaCostumeTwoMenu' className='menuOptions knife' value={costumeTwo} name='secondCostumes' onChange={switchCostumeTwo}>
              {charCostumeOptionsTwo}
            </select>
          )
        }
        case 'tacticaBoxThree': {
          return (
            <select id='tacticaCostumeThreeMenu' className='menuOptions knife' value={costumeThree} name='thirdCostumes' onChange={switchCostumeThree}>
              {charCostumeOptionsThree}
            </select>
          )
        }
        case 'tacticaBoxFour': {
          return (
            <select id='tacticaCostumeFourMenu' className='menuOptions knife' value={costumeFour} name='fourthCostumes' onChange={switchCostumeFour}>
              {charCostumeOptionsFour}
            </select>          
          )
        }
        default: 'Costume menus not loading'
      }
    }
  
    return (
      <div className='menuDivs'>
        <div className='menuLabels'>Costume</div>
        {switchCostumeMenu()}
      </div>
    );
};

export default TacticaCostumeMenu;