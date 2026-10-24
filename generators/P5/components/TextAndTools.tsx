import { SyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tools from './Tools';
import TacticaTools from './TacticaTools';

const TextAndTools = ({ char, setChar, charOne, setCharOne, charTwo, setCharTwo, charThree, 
  setCharThree, charFour, setCharFour, emote, setEmote, emoteOne, setEmoteOne, emoteTwo, 
  setEmoteTwo, emoteThree, setEmoteThree, emoteFour, setEmoteFour, costume, setCostume, 
  costumeOne, setCostumeOne, costumeTwo, setCostumeTwo, costumeThree, setCostumeThree, 
  costumeFour, setCostumeFour, setPortrait, setTacticaOne, setTacticaTwo, setTacticaThree, 
  setTacticaFour, setCustom, text, setText, name, setName, font, setFont, box, setBox, tactica, setTactica }) => {

  const toolProps: any = {
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
    box,
    setBox,
    font,
    setFont,
    name,
    setName,
  }

  const portraitCanvas: HTMLCanvasElement = 
    document.getElementById('portraitCanvas') as HTMLCanvasElement;
  const boxCanvas: HTMLCanvasElement = 
    document.getElementById('boxCanvas') as HTMLCanvasElement;
  const tileCanvas: HTMLCanvasElement = 
    document.getElementById('tileCanvas') as HTMLCanvasElement;
  const nameCanvas: HTMLCanvasElement = 
    document.getElementById('nameCanvas') as HTMLCanvasElement;
  const textCanvas: HTMLCanvasElement = 
    document.getElementById('textCanvas') as HTMLCanvasElement;
  const tacticaCharOneCanvas: HTMLCanvasElement = 
    document.getElementById('tacticaCharOneCanvas') as HTMLCanvasElement;
  const tacticaCharTwoCanvas: HTMLCanvasElement = 
    document.getElementById('tacticaCharTwoCanvas') as HTMLCanvasElement;
  const tacticaCharThreeCanvas: HTMLCanvasElement = 
    document.getElementById('tacticaCharThreeCanvas') as HTMLCanvasElement;
  const tacticaCharFourCanvas: HTMLCanvasElement = 
    document.getElementById('tacticaCharFourCanvas') as HTMLCanvasElement;


  const switchMode = (e: SyntheticEvent<HTMLInputElement>): void => {
    tactica ? setTactica(false) : setTactica(true);

    if (tactica) {
      portraitCanvas.getContext('2d').clearRect(0, 0, 1275, 500);
      boxCanvas.getContext('2d').clearRect(0, 0, 1275, 500);
      tileCanvas.getContext('2d').clearRect(0, 0, 1275, 500);
      nameCanvas.getContext('2d').clearRect(0, 0, 1275, 500);
      textCanvas.getContext('2d').clearRect(0, 0, 1275, 500);
    } else {
      tacticaCharOneCanvas.getContext('2d').clearRect(0, 0, 1275, 1000);
      tacticaCharTwoCanvas.getContext('2d').clearRect(0, 0, 1275, 1000);
      tacticaCharThreeCanvas.getContext('2d').clearRect(0, 0, 1275, 1000);
      tacticaCharFourCanvas.getContext('2d').clearRect(0, 0, 1275, 1000);
    }
  }

  const downloadImage = (): void => {
    const downloadCanvas: HTMLCanvasElement = document.createElement('canvas');
    downloadCanvas.width = 1275;
    downloadCanvas.height = 500;

    const nameField: HTMLTextAreaElement =
      document.getElementById('nameField') as HTMLTextAreaElement;
    
    const dCtx: CanvasRenderingContext2D = downloadCanvas.getContext('2d') as CanvasRenderingContext2D;
    dCtx.drawImage(portraitCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(boxCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(tileCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(nameCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(textCanvas, 0, 0, 1275, 500);
    const link: HTMLAnchorElement = document.createElement('a');
    link.download = `${nameField.value}-${text}.png`;
    link.href = downloadCanvas.toDataURL('image/png');
    link.click();
    return;
  };

  const customPortrait = (e: SyntheticEvent<HTMLInputElement>): void => {
    // If an uploaded file exists...
    if((e.target as HTMLInputElement).files[0]) {
      // ...create a URL from the file and set it as our portrait image's source
      setCustom(URL.createObjectURL((e.target as HTMLInputElement).files[0]));
    }
    return;
  }

  const changeName = (e: SyntheticEvent<HTMLTextAreaElement>): void => {
    let currName = (e.target as HTMLTextAreaElement).value;
    let newName = '';
    // Edge case: Prevents multiple whitespaces in a row so that
    // random number selectors don't get caught in infinite loops
    for (let i = 0; i < currName.length; i++) {
      if (currName[i] === ' ' && currName[i + 1] === ' ') continue;
      newName += currName[i];
    }
    (e.target as HTMLTextAreaElement).value = newName;
    setName(newName);
  }

  return (
    <div id='textAndTools'>
      <div id='textAndDownload'>
        <div id='allButLinks'>
          <div id='tacticaToggle'>
            <div id='toggleHeader'>Tactica Mode:</div>
            <label className='switch'>
              <input 
                id='modeToggle' 
                type='checkbox'
                onChange={(e) => switchMode(e)} 
              />
              <span className='slider knife'></span>
            </label>
          </div>
          <div id='enterName'>
            <div id='nameHeader'>Name</div>
            <textarea
              id='nameField'
              rows={1}
              cols={45}
              defaultValue={name}
              onChange={(e) => changeName(e)}
            />
          </div>
          <div id='enterDialogue'>
            <div id='dialogueHeader'>Dialogue</div>
            <textarea 
              id='textField' 
              placeholder='Hey, Inmate! Character portraits contain spoilers!'
              rows={3}
              cols={45}
              defaultValue={text}
              onChange={(e) => setText(e.target.value)} 
            />
          </div>
          <div id='downloadAndUpload'>
            <div 
              id='download'
              className='knife'
              onClick={downloadImage}
            >
              <div>Download</div>    
            </div>
            <label id='upload' className='knife'>Upload Portrait
              {/* Every time user clicks on the button, the old picture's URL is cleared, 
              which allows the onChange event to fire even if you upload the same image twice */}
              <input 
                id='hiddenUpload' 
                type='file' accept='image/*' 
                onClick={(e) => (e.target as HTMLInputElement).value = null} 
                onChange={(e) => customPortrait(e)}>
              </input>
              <div id='uploadSizeMessage'>(500px x 500px recommended)</div>
            </label>
          </div>
        </div>
        <div id='genLinks'>
          <div>Other generators:</div>
            <img id='p4logo' alt='Persona 4 logo' src='../images/logos/persona4logo.png' width={85} height='auto'></img>
        </div>
      </div>
      {tactica
        ? <TacticaTools {...toolProps} />
        : <Tools {...toolProps} />
      }
    </div>
  )
};

export default TextAndTools;