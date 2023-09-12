import { useEffect, SyntheticEvent } from 'react';
import { findNameAfterCharSelect } from '../utils/findName';

const CharacterMenu = ({ char, emote, setName, setChar, setEmote, setEmoteMenus }) => {

  const switchChar = (e: SyntheticEvent<HTMLSelectElement>) => {
    setChar((e.target as HTMLSelectElement).value);
      // Erase name if "No Portrait" is selected, switch to selected character's name otherwise
      if ((e.target as HTMLSelectElement).value !== 'None') {
        const newName = findNameAfterCharSelect((e.target as HTMLSelectElement).value)
        setName(newName);
        (document.getElementById('nameField') as HTMLTextAreaElement).value = newName;
      } else {
        setName('');
        (document.getElementById('nameField') as HTMLTextAreaElement).value = '';
      return;
    }
  };

  useEffect(() => {
    fetch('/emotions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'char': `../generators/P5/images/portraits/${char}/` })
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
    <div className='menuDivs'>
      <div className='menuLabels'>Character</div>
      <select id='charMenu' className='menuOptions knife' value={char} name='characters' onChange={switchChar}>
        <option value='Akane'>Akane Hasegawa</option>
        <option value='Konoe'>Akira Konoe</option>
        <option value='Alice'>Alice Hiiragi</option>
        <option value='Natsume'>Ango Natsume</option>
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
        <option value='Owada'>Jyun Owada</option>
        <option value='Justine'>Justine</option>
        <option value='Okumura'>Kunikazu Okumura</option>
        <option value='Ichinose'>Kuon Ichinose</option>
        <option value='Lavenza'>Lavenza</option>
        <option value='Makoto'>Makoto Niijima</option>
        <option value='Mariko'>Mariko Hyodo</option>
        <option value='Shido'>Masayoshi Shido</option>
        <option value='Mika'>Mika</option>
        <option value='Kaburagi'>Miyako Kaburagi</option>
        <option value='Morgana'>Morgana</option>
        <option value='Hiruta'>Mr. Hiruta</option>
        <option value='Inui'>Mr. Inui</option>
        <option value='Ushimaru'>Mr. Ushimaru</option>
        <option value='Chouno'>Ms. Chouno</option>
        <option value='Usami'>Ms. Usami</option>
        <option value='Iwai'>Munehisa Iwai</option>
        <option value='Nakanohara'>Natsuhiko Nakanohara</option>
        <option value='None'>No Portrait</option>
        <option value='Principal'>Principal Kobayakawa</option>
        <option value='Joker'>Protagonist</option>
        <option value='Rumi'>Rumi</option>
        <option value='Ryuji'>Ryuji Sakamoto</option>
        <option value='Kawakami'>Sadayo Kawakami</option>
        <option value='Sae'>Sae Niijima</option>
        <option value='Shibusawa'>Shibusawa</option>
        <option value='Shiho'>Shiho Suzui</option>
        <option value='Shinichi'>Shinichi Yoshizawa</option>
        <option value='Shinya'>Shinya Oda</option>
        <option value='Director'>SIU Director</option>
        <option value='Sojiro'>Sojiro Sakura</option>
        <option value='Sophia'>Sophia</option>
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
        <option value='Zenkichi'>Zenkichi Hasegawa</option>
      </select>
    </div>
  );
};

export default CharacterMenu;