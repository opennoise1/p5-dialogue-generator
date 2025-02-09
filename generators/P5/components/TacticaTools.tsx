import { SyntheticEvent, useEffect, useState } from 'react';
import TacticaMenus from './TacticaMenus';

const TacticaTools = ({ name, setName, char, setChar, emote, setEmote, costume, setCostume, charOne, 
  setCharOne, charTwo, setCharTwo, charThree, setCharThree, charFour, setCharFour, 
  emoteOne, setEmoteOne, emoteTwo, setEmoteTwo, emoteThree, setEmoteThree, emoteFour, setEmoteFour, 
  costumeOne, setCostumeOne, costumeTwo, setCostumeTwo, costumeThree, setCostumeThree, 
  costumeFour, setCostumeFour, setPortrait, setTacticaOne, 
  setTacticaTwo, setTacticaThree, setTacticaFour }) => {

  const [selectedPortrait, setSelectedPortrait] = useState<string>('tacticaBoxOne');

  const menuProps: any = {
    name,
    setName,
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    charOne,
    setCharOne,
    charTwo,
    setCharTwo,
    charThree,
    setCharThree,
    charFour,
    setCharFour,
    emoteOne,
    setEmoteOne,
    emoteTwo,
    setEmoteTwo,
    emoteThree,
    setEmoteThree,
    emoteFour,
    setEmoteFour,
    costumeOne,
    setCostumeOne,
    costumeTwo,
    setCostumeTwo,
    costumeThree,
    setCostumeThree,
    costumeFour,
    setCostumeFour,
    setPortrait,
    setTacticaOne,
    setTacticaTwo,
    setTacticaThree,
    setTacticaFour,
    selectedPortrait,
  }

  const changeSelection = (e: SyntheticEvent<HTMLFieldSetElement>) => {
    setSelectedPortrait((e.target as HTMLInputElement).value);
  }

  return (
    <div id='tacticaTools'>
      <fieldset id='tacticaPortraitFocus' onChange={(e) => changeSelection(e)}>
        <legend>Select a portrait</legend>
        {/* Four radio buttons selecting each character */}
        <div id='tacticaOneDiv'>
          <input type='radio' id='tacticaBoxOne' value='tacticaBoxOne' name='tacticaBoxes' defaultChecked={true}></input>
          <label htmlFor='tacticaBoxOne'>1</label>
        </div>
        <div id='tacticaTwoDiv'>
          <input type='radio' id='tacticaBoxTwo' value='tacticaBoxTwo' name='tacticaBoxes'></input>
          <label htmlFor='tacticaBoxTwo'>2</label>
        </div>
        <div id='tacticaThreeDiv'>
          <input type='radio' id='tacticaBoxThree' value='tacticaBoxThree' name='tacticaBoxes'></input>
          <label htmlFor='tacticaBoxThree'>3</label>
        </div>
        <div id='tacticaFourDiv'>
          <input type='radio' id='tacticaBoxFour' value='tacticaBoxFour' name='tacticaBoxes'></input>
          <label htmlFor='tacticaBoxFour'>4</label>
        </div>
      </fieldset>
      {/* Four sliders, one beneath each checkbox */}
      <fieldset id='tacticaPortraitSliders'>
        <legend>Select portrait positions</legend>
        <div id='sliderOneDiv'>
          <input type="range" id="portraitOneSlider" name="portraitOneSlider" min="0" max="1275" />
        </div>
        <div id='sliderTwoDiv'>
          <input type="range" id="portraitTwoSlider" name="portraitTwoSlider" min="0" max="1275" />
        </div>
        <div id='sliderThreeDiv'>
          <input type="range" id="portraitThreeSlider" name="portraitThreeSlider" min="0" max="1275" />
        </div>
        <div id='sliderFourDiv'>
          <input type="range" id="portraitFourSlider" name="portraitFourSlider" min="0" max="1275" />
        </div>
      </fieldset>
      {/* Same portrait menus as before, change depending on which character is selected,
        and default to no portrait*/}
      <div id='tacticaPortraitMenus'>
        <TacticaMenus {...menuProps} />
      </div>
    </div>
  );

};

export default TacticaTools;