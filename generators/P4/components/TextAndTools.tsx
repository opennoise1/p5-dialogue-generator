import { useEffect, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import Menus from './Menus';

const TextAndTools = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait, setCustom, name, setName,
  text, setText, version, setVersion, font, setFont, boxBack, setBack, boxFront, setFront }) => {

  const toolProps: any = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait,
    version,
    setVersion,
    boxBack,
    setBack,
    boxFront,
    setFront,
    name,
    setName,
  }

  useEffect(() => {
    setBack(`./generators/P4/images/boxes/db-${version}-back.png`);
    setFront(`./generators/P4/images/boxes/db-${version}-front.png`);
    return;
  }, [version]);

  const downloadImage = (): void => {
    const downloadCanvas: HTMLCanvasElement = document.createElement('canvas');
    downloadCanvas.width = 1275;
    downloadCanvas.height = 800;

    const boxBackCanvas: HTMLCanvasElement = 
      document.getElementById('boxBackCanvas') as HTMLCanvasElement;
    const portraitCanvas: HTMLCanvasElement = 
      document.getElementById('portraitCanvas') as HTMLCanvasElement;
    const boxFrontCanvas: HTMLCanvasElement = 
      document.getElementById('boxFrontCanvas') as HTMLCanvasElement;
    const textCanvas: HTMLCanvasElement = 
      document.getElementById('textCanvas') as HTMLCanvasElement;
    
    // Create a new canvas and draw the contents of each of the other canvases on top of it
    const dCtx: CanvasRenderingContext2D = downloadCanvas.getContext('2d') as CanvasRenderingContext2D;
    dCtx.drawImage(boxBackCanvas, 0, 0, 1275, 800);
    dCtx.drawImage(portraitCanvas, 0, 0, 1275, 800);
    dCtx.drawImage(boxFrontCanvas, 0, 0, 1275, 800);
    dCtx.drawImage(textCanvas, 0, 0, 1275, 800);
    const link: HTMLAnchorElement = document.createElement('a');
    link.download = `${char}-${text}.png`;
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

  return (
    <div id='textAndTools'>
      <div id='textAndDownload'>
        <div id='allButLinks'>
          <div id='enterName'>
            <div id='nameHeader'>Name</div>
            <textarea
              id='nameField'
              rows={1}
              cols={52}
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div id='enterDialogue'>
            <div id='dialogueHeader'>Dialogue</div>
            <textarea 
              id='textField' 
              placeholder='Attention Junes shoppers: Character portraits contain spoilers!'
              rows={3}
              cols={52}
              defaultValue={text}
              onChange={(e) => setText(e.target.value)} 
            />
          </div>
          <div id='downloadAndUpload'>
            <div id='download' className='cursor' onClick={downloadImage}>Download</div>
            <label id='upload' className='cursor'>Upload Portrait
              {/* Every time user clicks on the button, the old picture's URL is cleared, 
              which allows the onChange event to fire even if you upload the same image twice */}
              <input 
                id='hiddenUpload' 
                type='file' accept='image/*' 
                onClick={(e) => (e.target as HTMLInputElement).value = null} 
                onChange={(e) => customPortrait(e)}>
              </input>
              <div id='uploadSizeMessage'>(400px x 450px recommended)</div>
            </label>
          </div>
        </div>
        <div id='genLinks'>
          <div>Other generators:</div>
          <Link to='/'>
            <img id='p5logo' alt='Persona 5 logo' src='../images/logos/persona5logo.png' width={100} height='auto'></img>
          </Link>
        </div>
      </div>
      <div id='menusAndBoxes'>
        <Menus {...toolProps} />
        <div id='versionDiv'>
          <div id='versionHeader'>Box Select</div>
          <div id='versionChoices'>
            <div 
              id='vanillaVersion' 
              className='versions skipDivs cursor' 
              onClick={() => { setVersion('vanilla'); }}
            >
              Persona 4
            </div>
            <div 
              id='goldenVersion' 
              className='versions skipDivs cursor' 
              onClick={() => { setVersion('golden'); }}
            >
              Persona 4 Golden
            </div>
          </div>
        </div>
        <div id='fontDiv'>
          <div id='fontHeader'>Font Select</div>
          <div id='fontChoices'>
            <div
              id='skipSelect'
              className='versions skipDivs cursor'
              onClick={() => { setFont('SkipStd-B'); }}
            >
              Skip<br></br>
              <div className='subtitle'>
                (Latin Script/日本語)
              </div>
            </div>
            <div
              id='koreanGoldenSelect'
              className='versions koreanGoldenDivs cursor'
              onClick={() => { setFont('KoreanHSE'); }}
            >
              a한글세상M<br></br>
              <div className='subtitle'> 
                (한국어 - 페르소나 4 골든)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TextAndTools;