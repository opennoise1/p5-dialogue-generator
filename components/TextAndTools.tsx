import React from 'react';
import Menus from './Menus';

const TextAndTools = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait, text, setText, setFont }) => {

  const toolProps: { 
    char: string, 
    setChar: any, 
    emote: string, 
    setEmote: any, 
    costume: string, 
    setCostume: any, 
    setPortrait: any 
  } = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait,
  }

  function downloadImage(): void {
    const downloadCanvas: HTMLCanvasElement = document.createElement('canvas');
    downloadCanvas.width = 1300;
    downloadCanvas.height = 500;

    const portraitCanvas: HTMLCanvasElement = 
      document.getElementById('portraitCanvas') as HTMLCanvasElement;
    const textCanvas: HTMLCanvasElement = 
      document.getElementById('textCanvas') as HTMLCanvasElement;
    
    const dCtx: CanvasRenderingContext2D = downloadCanvas.getContext('2d');
    dCtx.drawImage(portraitCanvas, 0, 0, 1300, 500);
    dCtx.drawImage(textCanvas, 0, 0, 1300, 500);
    const link = document.createElement('a');
    link.download = `${char}-${text}.png`;
    link.href = downloadCanvas.toDataURL('image/png');
    link.click();
    return;
  };

  return (
    <>
      <textarea 
        id='textField' 
        placeholder='Enter dialogue here...'
        autoFocus={true}
        rows={3}
        cols={40}
        defaultValue={text}
        onChange={(e) => setText(e.target.value)} 
      />  
      <div id='menus'>
        <Menus {...toolProps} />
      </div>
      <div id='buttonDiv'>
        <div id='vanillaFont' className='fonts' onClick={() => setFont('18pt KoreaKRSM')}>KoreanKRSM &#40;Persona 5&#41;</div>
        <div id='royalFont' className='fonts' onClick={() => setFont('18pt Optima nova LT')}>Optima Nova Black &#40;Persona 5 Royal&#41;</div>
      </div>
      <div id='download' onClick={downloadImage}>Download Dialogue</div>
    </>
  )
};

export default TextAndTools;