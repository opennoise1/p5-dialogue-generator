import Menus from './Menus';

const Tools = ({ char, setChar, emote, setEmote, costume, setCostume, setPortrait, box, font, setFont, name, setName }) => {

  const menuProps: any = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    setPortrait,
    box,
    font,
    name,
    setName,
  }

  return (
    <div id='menusAndFonts'>
      <Menus {...menuProps} />
      <div id='fontDiv'>
        <div id='fontHeader'>Font Select</div>
        <div id='fontChoices'>
          <div 
            id='vanillaFont' 
            className='fonts KRSMDivs knife' 
            onClick={() => { setFont('KoreanKRSM') }}
          >
            KoreanKRSM &#40;Persona 5&#41;
          </div>
          <div 
            id='royalFont' 
            className='fonts optimaDivs knife' 
            onClick={() => { setFont('Optima nova LT') }}
          >
            Optima Nova Black &#40;Persona 5 Royal&#41;
          </div>
          <div 
            id='japaneseFont' 
            className='fonts slumpDivs knife' 
            onClick={() => { setFont('SlumpDB') }}
            lang='ja'
          >
            Slump DB &#40;ペルソナ5 - 日本語&#41;
          </div>
          <div 
            id='koreanFont' 
            className='fonts cinemaDivs knife' 
            onClick={() => { setFont('aCinema') }}
            lang='ko'
          >
            aCinema &#40;페르소나 5 - 한글어&#41;
          </div>
          <div 
            id='chineseFont' 
            className='fonts liDivs knife' 
            onClick={() => { setFont('DF Li Yuan') }}
            lang='zh'
          >
            DF Li Yuan &#40;女神異聞錄5 - 中文&#41;
          </div>
          <div 
            id='koreanStrikersFont' 
            className='fonts koreanStrikersDivs knife' 
            onClick={() => { setFont('a굴림헤드B') }}
            lang='ko'
          >
            a굴림헤드B &#40;페르소나 5 스크램블 - 한글어&#41;
          </div>
          <div 
            id='chineseStrikersFont' 
            className='fonts pingDivs knife' 
            onClick={() => { setFont('DF Ping Ju') }}
            lang='zh'
          >
            DF Ping Ju &#40;女神異聞錄5 亂戰 - 中文&#41;
          </div>
        </div>
      </div>
    </div>
  )
};

export default Tools;