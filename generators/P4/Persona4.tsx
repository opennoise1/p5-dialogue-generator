import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ImageCanvas from './components/ImageCanvas';
import TextAndTools from './components/TextAndTools';
import Header from './components/Header';

const Persona4 = () => {
  // Initial values of all three menus, which will in turn determine our portrait
  const [char, setChar] = useState<string>('Chie');
  const [emote, setEmote]= useState<string>('Happy');
  const [costume, setCostume] = useState<string>('Spring Uniform');

  // Initial values of name text, dialogue text, font and game version, which will determine our dialogue box
  const [name, setName] = useState<string>('Chie');
  const [text, setText] = useState<string>('');
  const [font, setFont] = useState<string>('SkipStd-B');
  const [version, setVersion] = useState<string>('golden')
  
  // Initial portrait and box that will be rendered 
  const [portrait, setPortrait] = 
    useState<string>(`./images/portraits/${char}/${emote}/${char}-${emote}-${costume}.png`);
  const [custom, setCustom] = useState<string>('');
  const [boxBack, setBack] = useState<string>(`./generators/P4/images/boxes/db-${version}-back.png`);
  const [boxFront, setFront] = useState<string>(`./generators/P4/images/boxes/db-${version}-front.png`);
  
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
    version,
    setVersion,
    font,
    setFont,
    boxBack,
    setBack,
    boxFront,
    setFront,
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Persona 4 Dialogue Generator" />
        <link rel="stylesheet" href="/p4styles.css" />
        <link rel="shortcut icon" type="image/png" href="./images/persona4logo.png" />
      </Helmet>
      <Header />
      <ImageCanvas {...appProps} />
      <TextAndTools {...appProps} />
    </>
  );
};
export default Persona4;