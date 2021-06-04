import React, { useEffect } from 'react';
import Menus from './Menus';

const TextAndTools = ({ char, setChar, emote, setEmote, costume, setCostume, 
  setPortrait, text, setText, font, setFont, box, setBox, selection, setSelection }) => {

  const toolProps: { 
    char: string, 
    setChar: any, 
    emote: string, 
    setEmote: any, 
    costume: string, 
    setCostume: any, 
    setPortrait: any
    box: any,
    setBox: any,
    font: any,
    selection: any,
    setSelection: any,
  } = {
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
    selection,
    setSelection,
  }

  useEffect(() => {
    setBox(`../images/boxes/db-${selection}-${font}.png`);
  }, [font])

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
    
    const dCtx: CanvasRenderingContext2D = downloadCanvas.getContext('2d');
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
        <textarea 
          id='textField' 
          placeholder='HOLD IT! Portraits contain spoilers!'
          autoFocus={true}
          rows={3}
          cols={40}
          defaultValue={text}
          onChange={(e) => setText(e.target.value)} 
        />
        <div 
          id='download'
          className='knife'
          onClick={downloadImage}
        >
          <img src='../images/down-arrow.png' alt='Download button' width='40' height='48' />
          <div>Download</div>    
        </div>
      </div>
      <div id='fontDiv'>
        <div 
          id='vanillaFont' 
          className='fonts KRSMDivs knife' 
          onClick={() => setFont('KoreanKRSM')}
        >
          KoreanKRSM &#40;Persona 5&#41;
        </div>
        <div 
          id='royalFont' 
          className='fonts optimaDivs knife' 
          onClick={() => setFont('Optima nova LT')}
        >
          Optima Nova Black &#40;Persona 5 Royal&#41;
        </div>
        <div 
          id='japaneseFont' 
          className='fonts slumpDivs knife' 
          onClick={() => setFont('SlumpSTD')}
        >
          Slump DB &#40;ペルソナ5 - 日本語&#41;
        </div>
      </div>
    </div>
  )
};

export default TextAndTools;