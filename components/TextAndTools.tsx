import { useEffect } from 'react';
import Menus from './Menus';

const TextAndTools = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait, text, setText, 
  font, setFont, boxFont, setBoxFont, box, setBox, selection, setSelection }) => {

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
    boxFont,
    setBoxFont,
    font,
    selection,
    setSelection,
  }

  useEffect(() => {
    setBox(`../images/boxes/db-${selection}-${boxFont}.png`);
  }, [boxFont]);

  const downloadImage = (): void => {
    const downloadCanvas: HTMLCanvasElement = document.createElement('canvas');
    downloadCanvas.width = 1275;
    downloadCanvas.height = 500;

    const portraitCanvas: HTMLCanvasElement = 
      document.getElementById('portraitCanvas') as HTMLCanvasElement;
    const boxCanvas: HTMLCanvasElement = 
      document.getElementById('boxCanvas') as HTMLCanvasElement;
    const textCanvas: HTMLCanvasElement = 
      document.getElementById('textCanvas') as HTMLCanvasElement;
    
    const dCtx: CanvasRenderingContext2D = downloadCanvas.getContext('2d') as CanvasRenderingContext2D;
    dCtx.drawImage(portraitCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(boxCanvas, 0, 0, 1275, 500);
    dCtx.drawImage(textCanvas, 0, 0, 1275, 500);
    const link: HTMLAnchorElement = document.createElement('a');
    link.download = `${char}-${text}.png`;
    link.href = downloadCanvas.toDataURL('image/png');
    link.click();
    return;
  };

  return (
    <div id='textAndTools'>
      <Menus {...toolProps} />
      <div id='textAndDownload'>
        <div id='enterDialogue'>
          <div id='dialogueHeader'>Dialogue</div>
          <textarea 
            id='textField' 
            placeholder='Hey, Inmate! Character portraits contain spoilers!'
            rows={3}
            cols={50}
            defaultValue={text}
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
        <div 
          id='download'
          className='knife'
          onClick={downloadImage}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 24l-8-9h6v-15h4v15h6z"/>
          </svg>
          <div>Download</div>    
        </div>
      </div>
      <div id='fontDiv'>
        <div id='fontHeader'>Font Select</div>
        <div 
          id='vanillaFont' 
          className='fonts KRSMDivs knife' 
          onClick={() => { setFont('KoreanKRSM'); setBoxFont('KoreanKRSM'); }}
        >
          KoreanKRSM &#40;Persona 5&#41;
        </div>
        <div 
          id='royalFont' 
          className='fonts optimaDivs knife' 
          onClick={() => { setFont('Optima nova LT'); setBoxFont('Optima nova LT'); }}
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
          <br></br>
          <span id='nameNote'>&#40;Japanese Character Name - Coming Soon!&#41;</span>
        </div>
      </div>
    </div>
  )
};

export default TextAndTools;