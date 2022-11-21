import { useEffect, SyntheticEvent } from 'react';
import Menus from './Menus';

const TextAndTools = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait, setCustom, text, setText, 
  name, setName, font, setFont, box, setBox }) => {

  const toolProps: any = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait,
    box,
    setBox,
    font,
    name,
    setName,
  }

  const downloadImage = (): void => {
    const downloadCanvas: HTMLCanvasElement = document.createElement('canvas');
    downloadCanvas.width = 1275;
    downloadCanvas.height = 500;

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
          <a href='http://www.p4generator.com' target='_blank'>
            <img id='p4logo' alt='Persona 4 logo' src='../images/persona4logo.png' width={85} height='auto'></img>
          </a>
        </div>
      </div>
      <div id='menusAndFonts'>
        <Menus {...toolProps} />
        <div id='fontDiv'>
          <div id='fontHeader'>Font Select</div>
          <div id='fontChoices'>
            <div 
              id='vanillaFont' 
              className='fonts KRSMDivs knife' 
              onClick={() => { setFont('KoreanKRSM')}}
            >
              KoreanKRSM &#40;Persona 5&#41;
            </div>
            <div 
              id='royalFont' 
              className='fonts optimaDivs knife' 
              onClick={() => { setFont('Optima nova LT')}}
            >
              Optima Nova Black &#40;Persona 5 Royal&#41;
            </div>
            <div 
              id='japaneseFont' 
              className='fonts slumpDivs knife' 
              onClick={() => setFont('SlumpDB')}
              lang='ja'
            >
              Slump DB &#40;ペルソナ5 - 日本語&#41;
            </div>
            <div 
              id='koreanFont' 
              className='fonts cinemaDivs knife' 
              onClick={() => setFont('aCinema')}
              lang='ko'
            >
              aCinema &#40;페르소나 5 - 한글어&#41;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TextAndTools;