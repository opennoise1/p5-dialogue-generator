import { SyntheticEvent, useEffect } from 'react';

const TacticaEmotionMenu = ({charOne, charTwo, charThree, charFour, emoteOne, setEmoteOne,
  emoteTwo, setEmoteTwo, emoteThree, setEmoteThree, emoteFour, setEmoteFour, costumeOne,
  setCostumeOne, costumeTwo, setCostumeTwo, costumeThree, setCostumeThree, costumeFour,
  setCostumeFour, setCostumeOneMenus, setCostumeTwoMenus, setCostumeThreeMenus, setCostumeFourMenus, emoteOneMenus,
  emoteTwoMenus, emoteThreeMenus, emoteFourMenus, selectedPortrait }) => {
    
    let currentChar: string;
    let currentEmote: string;

    let charEmoteOptionsOne: string[];
    let charEmoteOptionsTwo: string[];
    let charEmoteOptionsThree: string[];
    let charEmoteOptionsFour: string[];

    let currentEmoteOptions: any[] = [];
    let currentEmoteMenus: string[] = [];

    useEffect(() => {
      switch(selectedPortrait) {
        case 'tacticaBoxOne': { 
          currentChar = charOne;
          currentEmote = emoteOne;
          currentEmoteOptions = charEmoteOptionsOne;
          currentEmoteMenus = emoteOneMenus;
        }
        case 'tacticaBoxTwo': { 
          currentChar = charTwo;
          currentEmote = emoteTwo;
          currentEmoteOptions = charEmoteOptionsTwo;
          currentEmoteMenus = emoteTwoMenus;
        }
        case 'tacticaBoxThree': { 
          currentChar = charThree;
          currentEmote = emoteThree; 
          currentEmoteOptions = charEmoteOptionsThree;
          currentEmoteMenus = emoteThreeMenus;
        }
        case 'tacticaBoxFour': { 
          currentChar = charFour; 
          currentEmote = emoteFour;
          currentEmoteOptions = charEmoteOptionsFour;
          currentEmoteMenus = emoteFourMenus;
        }
      }
    }, [selectedPortrait])

    // Check to see if the emotion menus have been generated from the fetch request
    // before attempting to map over them
    if (currentEmoteMenus.length) {
      currentEmoteOptions = currentEmoteMenus.map(currentEmote => {
        return (
          <option key={`${currentChar}: ${currentEmote}`} value={currentEmote}>
            {currentEmote}
          </option>
        );
      });
    };

    useEffect(() => {
      fetch('/costumes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'emotion': `../generators/P5/images/portraits/${currentChar}/${currentEmote}/` })
      })
      .then(data => data.json())
      .then(parsed => {
        switch (selectedPortrait) {
          case 'tacticaBoxOne': {
            setCostumeOneMenus(parsed);
            // If the newly selected character doesn't have the previously selected costume,
            // change the current costume to the top-most costume on the newly fetched menu
            if (!parsed.includes(costumeOne)) setCostumeOne(parsed[0]);
          }
          case 'tacticaBoxTwo': {
            setCostumeTwoMenus(parsed);
            if (!parsed.includes(costumeTwo)) setCostumeTwo(parsed[0]);
          }
          case 'tacticaBoxThree': {
            setCostumeThreeMenus(parsed);
            if (!parsed.includes(costumeThree)) setCostumeThree(parsed[0]);
          }
          case 'tacticaBoxFour': {
            setCostumeFourMenus(parsed);
            if (!parsed.includes(costumeFour)) setCostumeFour(parsed[0]);
          }
          default: {
            setCostumeOneMenus(parsed);
            if (!parsed.includes(costumeOne)) setCostumeOne(parsed[0]);
          }
        }
      })
      .catch(err => console.log(err));
    }, [charOne, charTwo, charThree, charFour, emoteOne, emoteTwo, emoteThree, emoteFour]);

  const switchEmoteOne = (e: SyntheticEvent<HTMLSelectElement>) => {
    setEmoteOne((e.target as HTMLSelectElement).value);
    return;
  };
  const switchEmoteTwo = (e: SyntheticEvent<HTMLSelectElement>) => {
    setEmoteTwo((e.target as HTMLSelectElement).value);
    return;
  };
  const switchEmoteThree = (e: SyntheticEvent<HTMLSelectElement>) => {
    setEmoteThree((e.target as HTMLSelectElement).value);
    return;
  };
  const switchEmoteFour = (e: SyntheticEvent<HTMLSelectElement>) => {
    setEmoteFour((e.target as HTMLSelectElement).value);
    return;
  };

  const switchEmotionMenu = () => {
    switch (selectedPortrait) {
      case 'tacticaBoxOne': {
        return (
          <select id='tacticaEmoteOneMenu' className='menuOptions knife' value={emoteOne} name='firstEmotes' onChange={switchEmoteOne}>
            {charEmoteOptionsOne}
          </select>
        )
      }
      case 'tacticaBoxTwo': {
        return (
          <select id='tacticaEmoteTwoMenu' className='menuOptions knife' value={emoteTwo} name='secondEmotes' onChange={switchEmoteTwo}>
            {charEmoteOptionsTwo}
          </select>
        )
      }
      case 'tacticaBoxThree': {
        return (
          <select id='tacticaEmoteThreeMenu' className='menuOptions knife' value={emoteThree} name='thirdEmotes' onChange={switchEmoteThree}>
            {charEmoteOptionsThree}
          </select>
        )
      }
      case 'tacticaBoxFour': {
        return (
          <select id='tacticaEmoteFourMenu' className='menuOptions knife' value={emoteFour} name='fourthEmotes' onChange={switchEmoteFour}>
            {charEmoteOptionsFour}
          </select>          
        )
      }
      default: 'Emotion menus not loading'
    }
  }


  return (
    <div className='menuDivs'>
      <div className='menuLabels'>Emotion</div>
      {switchEmotionMenu()}
    </div>
  )
};

export default TacticaEmotionMenu;