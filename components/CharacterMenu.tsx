import React, { useEffect } from 'react';

const CharacterMenu = ({ char, emote, setChar, setEmote, setEmoteMenus }) => {

  const switchChar = (e: any) => {
    setChar(e.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:3000/emotions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'char': `../images/portraits/${char}/` })
    })
    .then(data => data.json())
    .then(parsed => {
      setEmoteMenus(parsed);
      // If the newly selected character doesn't have the previously selected emotion...
      if (!parsed.includes(emote)) {
        // ...change the current emotion to the top-most emotion on the newly fetched menu
        setEmote(parsed[0]);
      }
    })
    .catch(err => console.log(err));
  }, [char]);

  return (
    <select id='charMenu' value={char} name='characters' onChange={switchChar} className='menus'>
      <option value='Ann'>Ann Takamaki</option>
      <option value='Caroline'>Caroline</option>
      <option value='Chihaya'>Chihaya Mifune</option>
      <option value='Hiraguchi'>Coach Hiraguchi</option>
      <option value='Futaba'>Futaba Sakura</option>
      <option value='Akechi'>Goro Akechi</option>
      <option value='Haru'>Haru Okumura</option>
      <option value='Hifumi'>Hifumi Togo</option>
      <option value='Ohya'>Ichiko Ohya</option>
      <option value='Madarame'>Ichiryusai Madarame</option>
      <option value='Igor'>Igor</option>
      <option value='Jose'>Jose</option>
      <option value='Kaneshiro'>Junya Kaneshiro</option>
      <option value='Justine'>Justine</option>
      <option value='Okumura'>Kunikazu Okumura</option>
      <option value='Lavenza'>Lavenza</option>
      <option value='Makoto'>Makoto Niijima</option>
      <option value='Shido'>Masayoshi Shido</option>
      <option value='Mika'>Mika</option>
      <option value='Morgana'>Morgana</option>
      <option value='Iwai'>Munehisa Iwai</option>
      <option value='Nakanohara'>Natsuhiko Nakanohara</option>
      <option value='Principal'>Principal Kobayakawa</option>
      <option value='Rumi'>Rumi</option>
      <option value='Ryuji'>Ryuji Sakamoto</option>
      <option value='Kawakami'>Sadayo Kawakami</option>
      <option value='Sae'>Sae Niijima</option>
      <option value='Shibusawa'>Shibusawa</option>
      <option value='Shiho'>Shiho Suzui</option>
      <option value='Shinichi'>Shinichi Yoshizawa</option>
      <option value='Shinya'>Shinya Oda</option>
      <option value='Teachers'>Shujin Teachers</option>
      <option value='Director'>SIU Director</option>
      <option value='Sojiro'>Sojiro Sakura</option>
      <option value='Sugimura'>Sugimura</option>
      <option value='Kamoshida'>Suguru Kamoshida</option>
      <option value='Sumire'>Sumire Yoshizawa</option>
      <option value='Takemi'>Tae Takemi</option>
      <option value='Maruki'>Takuto Maruki</option>
      <option value='Tanaka'>Tanaka</option>
      <option value='Yoshida'>Toranosuke Yoshida</option>
      <option value='Wakaba'>Wakaba Isshiki</option>
      <option value='Yusuke'>Yusuke Kitagawa</option>
      <option value='Mishima'>Yuuki Mishima</option>
    </select>
  );
}

export default CharacterMenu;