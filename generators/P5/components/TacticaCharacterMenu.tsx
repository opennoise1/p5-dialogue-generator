import { SyntheticEvent, useEffect } from "react";
import { findNameAfterCharSelect } from "../utils/findName";

const TacticaCharacterMenu = ({setName, charOne, setCharOne, charTwo, setCharTwo, charThree,
  setCharThree, charFour, setCharFour, emoteOne, setEmoteOne, emoteTwo, setEmoteTwo, emoteThree,
  setEmoteThree, emoteFour, setEmoteFour, setEmoteOneMenus, setEmoteTwoMenus, setEmoteThreeMenus, 
  setEmoteFourMenus, selectedPortrait }) => {

    let currentChar: string;

    // depending on selection of radio button, select a different char.
    const switchChar = (e: SyntheticEvent<HTMLSelectElement>) => {
      switch (selectedPortrait) {
        case 'tacticaBoxOne': { setCharOne((e.target as HTMLSelectElement).value); }
        case 'tacticaBoxTwo': { setCharTwo((e.target as HTMLSelectElement).value); }
        case 'tacticaBoxThree': { setCharThree((e.target as HTMLSelectElement).value); }
        case 'tacticaBoxFour': { setCharFour((e.target as HTMLSelectElement).value); }
        default: { setCharOne((e.target as HTMLSelectElement).value); }
      }
      
      switchName(e);
      return;
    };

    const switchName = (e: SyntheticEvent<HTMLSelectElement>) => {
        // Erase name if "No Portrait" is selected, switch to selected character's name otherwise
        if ((e.target as HTMLSelectElement).value !== 'None') {
          const newName = findNameAfterCharSelect((e.target as HTMLSelectElement).value)
          setName(newName);
          (document.getElementById('nameField') as HTMLTextAreaElement).value = newName;
        } else {
          setName('');
          (document.getElementById('nameField') as HTMLTextAreaElement).value = '';
        return;
      }
    }

    useEffect(() => {
      fetch('/emotions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'char': `../generators/P5/images/portraits/${currentChar}/` })
      })
      .then(data => data.json())
      .then(parsed => {
        switch (selectedPortrait) {
          case 'tacticaBoxOne': {
            setEmoteOneMenus(parsed);
            // If the newly selected character doesn't have the previously selected emotion,
            // change the current costume to the top-most costume on the newly fetched menu
            if (!parsed.includes(emoteOne)) setEmoteOne(parsed[0]);
          }
          case 'tacticaBoxTwo': {
            setEmoteTwoMenus(parsed);
            if (!parsed.includes(emoteTwo)) setEmoteTwo(parsed[0]);
          }
          case 'tacticaBoxThree': {
            setEmoteThreeMenus(parsed);
            if (!parsed.includes(emoteThree)) setEmoteThree(parsed[0]);
          }
          case 'tacticaBoxFour': {
            setEmoteFourMenus(parsed);
            if (!parsed.includes(emoteFour)) setEmoteFour(parsed[0]);
          }
          default: {
            setEmoteOneMenus(parsed);
            if (!parsed.includes(emoteOne)) setEmoteOne(parsed[0]);
          }
        }
      })
      .catch(err => console.log(err));
    }, [charOne, charTwo, charThree, charFour]);

    const tacticaCharOptions = () => {
      console.log("in char options");
      return (
        <>
          <option value='Ann'>Ann Takamaki</option>
          <option value='Futaba'>Futaba Sakura</option>
          <option value='Akechi'>Goro Akechi</option>
          <option value='Haru'>Haru Okumura</option>
          <option value='Lavenza'>Lavenza</option>
          <option value='Makoto'>Makoto Niijima</option>
          <option value='Morgana'>Morgana</option>
          <option value='None'>No Portrait</option>
          <option value='Joker'>Protagonist</option>
          <option value='Ryuji'>Ryuji Sakamoto</option>
          <option value='Sojiro'>Sojiro Sakura</option>
          <option value='Sumire'>Sumire Yoshizawa</option>
          <option value='Yusuke'>Yusuke Kitagawa</option>
        </>
      )
    }

    const switchCharacterMenu = () => {
      switch (selectedPortrait) {
        case 'tacticaBoxOne': {
          return (
            <select id='charMenuOne' className='menuOptions knife' value={charOne} name='firstChars' onChange={switchChar}>
              {tacticaCharOptions()}
            </select>
          )
        }
        case 'tacticaBoxTwo': {
          return (
            <select id='charMenuTwo' className='menuOptions knife' value={charTwo} name='secondChars' onChange={switchChar}>
              {tacticaCharOptions()}
            </select>
          )
        }
        case 'tacticaBoxThree': {
          return (
            <select id='charMenuThree' className='menuOptions knife' value={charThree} name='thirdChars' onChange={switchChar}>
              {tacticaCharOptions()}
            </select>
          )
        }
        case 'tacticaBoxFour': {
          return (
            <select id='charMenuFour' className='menuOptions knife' value={charFour} name='fourthChars' onChange={switchChar}>
              {tacticaCharOptions()}
            </select>          
          )
        }
        default: 'Character menus not loading'
      }
    }

    return (
      <div className='tacticaCharMenuDivs'>
        <div className='tacticaCharMenuLabels'>Character</div>
        {switchCharacterMenu()}
      </div>
    );
};

export default TacticaCharacterMenu;