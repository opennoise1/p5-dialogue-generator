import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ImageCanvas from './components/ImageCanvas';
import TextAndTools from './components/TextAndTools';
import Header from './components/Header';

const Persona5 = () => {
  // Initial values of all three menus, which will in turn determine our portrait
  const [char, setChar] = useState<string>('Ann');
  const [emote, setEmote]= useState<string>('Happy');
  const [costume, setCostume] = useState<string>('Gym Clothes');
 
  // Tactica portraits, emotions, and costumes
  const [charOne, setCharOne] = useState<string>('Ann');
  const [charTwo, setCharTwo] = useState<string>('Ryuji');
  const [charThree, setCharThree] = useState<string>('Makoto');
  const [charFour, setCharFour] = useState<string>('Yusuke');

  const [emoteOne, setEmoteOne] = useState<string>('Happy');
  const [emoteTwo, setEmoteTwo] = useState<string>('Happy');
  const [emoteThree, setEmoteThree] = useState<string>('Happy');
  const [emoteFour, setEmoteFour] = useState<string>('Happy');

  const [costumeOne, setCostumeOne] = useState<string>('Winter Uniform');
  const [costumeTwo, setCostumeTwo] = useState<string>('Winter Uniform');
  const [costumeThree, setCostumeThree] = useState<string>('Winter Uniform');
  const [costumeFour, setCostumeFour] = useState<string>('Winter Uniform');

  // Initial values of name, dialogue text, and font, which will determine our dialogue box
  const [name, setName] = useState<string>('Ann');
  const [text, setText] = useState<string>('');
  const [font, setFont] = useState<string>('Optima nova LT');
  
  // Initial portrait and box that will be rendered 
  const [portrait, setPortrait] = 
    useState<string>(`https://testing-s3-p5.s3.amazonaws.com/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  const [custom, setCustom] = useState<string>('');
   
  // Tactica Mode portraits
  const [tacticaOne, setTacticaOne] = useState<string>('');
  const [tacticaTwo, setTacticaTwo] = useState<string>('');
  const [tacticaThree, setTacticaThree] = useState<string>('');
  const [tacticaFour, setTacticaFour] = useState<string>('');

  const [box, setBox] = useState<string>('../generators/P5/images/boxes/db-Ann-Optima nova LT.png');
  const [boxType, setBoxType] = useState<string>('main');
  const [lastBoxType, setLastBoxType] = useState<string>(boxType);
  const [boxSize, setBoxSize] = useState<string>('small');

  const [tactica, setTactica] = useState<boolean>(false);
  
  // By adding props to a separate object here, we can get around a TypeScript quirk
  // Read more here: https://stackoverflow.com/questions/48240449/type-is-not-assignable-to-type-intrinsicattributes-intrinsicclassattribu
  const appProps: any = {
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
    name,
    setName,
    text,
    setText,
    portrait,
    setPortrait,
    custom,
    setCustom,
    tacticaOne,
    setTacticaOne,
    tacticaTwo,
    setTacticaTwo,
    tacticaThree,
    setTacticaThree,
    tacticaFour,
    setTacticaFour,
    font,
    setFont,
    box,
    setBox,
    boxType,
    setBoxType,
    boxSize,
    setBoxSize,
    lastBoxType,
    setLastBoxType,
    tactica,
    setTactica,
  };

  return (
    <>
      <Helmet>
        <title>Persona 5 Dialogue Generator</title>
        <meta name="description" content="Persona 5 Dialogue Generator" />
        <link rel="stylesheet" href="/p5styles.css" />
        <link rel="shortcut icon" type="image/png" href="./generators/P5/images/personalogo.png" />
      </Helmet>
      <Header />
      <ImageCanvas {...appProps} />
      <TextAndTools {...appProps} />
    </>
  );
};
export default Persona5;