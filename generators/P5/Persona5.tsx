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

  // Initial values of name, dialogue text, and font, which will determine our dialogue box
  const [name, setName] = useState<string>('Ann');
  const [text, setText] = useState<string>('');
  const [font, setFont] = useState<string>('Optima nova LT');
  
  // Initial portrait and box that will be rendered 
  const [portrait, setPortrait] = 
    useState<string>(`../generators/P5/images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  const [custom, setCustom] = useState<string>('');
  const [box, setBox] = useState<string>('../generators/P5/images/boxes/db-Ann-Optima nova LT.png');
  const [boxType, setBoxType] = useState<string>('main');
  const [lastBoxType, setLastBoxType] = useState<string>(boxType);
  const [boxSize, setBoxSize] = useState<string>('small');
  
  // By adding props to a separate object here, we can get around a TypeScript quirk
  // Read more here: https://stackoverflow.com/questions/48240449/type-is-not-assignable-to-type-intrinsicattributes-intrinsicclassattribu
  const appProps: any = {
    char,
    setChar,
    emote,
    setEmote,
    costume,
    setCostume,
    name,
    setName,
    text,
    setText,
    portrait,
    setPortrait,
    custom,
    setCustom,
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