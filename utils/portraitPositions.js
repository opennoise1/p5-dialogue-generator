const simplePositions = {
  Caroline: [-35, 0],
  Chihaya: [0, 0],
  Director: [85, 10],
  Futaba: [-35, 0],
  Hifumi: [35, 10],
  Hiraguchi: [35, 10],
  Igor: [35, 15],
  Iwai: [60, 10],
  Jose: [45, 10],
  Justine: [0, 0],
  Kaneshiro: [45, 10],
  Kawakami: [0, 0],
  Lavenza: [35, 10],
  Makoto: [35, 10],
  Mika: [0, 30],
  Mishima: [35, 5],
  Nakanohara: [0, 0],
  Ohya: [35, 10],
  Principal: [-10, 20],
  Rumi: [40, 10],
  Shibusawa: [0, 0],
  Shido: [0, 0],
  Shinichi: [35, 20],
  Shinya: [0, 0],
  Sojiro: [75, 10],
  Sugimura: [0, 0],
  Sumire: [45, 10],
  Takemi: [0, 0],
  Tanaka: [45, 10],
  Wakaba: [35, 10],
  Yoshida: [50, 3],
  Yusuke: [0, 0],
};

const findSpecialPosition = (char, emote, costume) => {
  switch (char) {
    case 'Akechi': {
      if (costume.includes('Black')) return [30, 10];
      if (emote === 'Furious' || emote === 'Smirking' || 
        emote === 'Staring' || emote === 'Upset') return [85, 0];
      if (costume.includes('Cognitive')) return [85, 0];
      return [-30, 0];
    }
    case 'Ann': {
      if (emote === 'Excited (Royal)' || emote === 'Shocked (Royal)') return [0, 35];
      if (emote.includes('Royal')) return [50, 35];
      return [50, 45];
    }
    case 'Haru': {
      if (costume.includes('Noir')) return [0, 0];
      return [35, 10];
    }
    case 'Kamoshida': {
      if (costume.includes('Shadow')) return [35, 10];
      return [-30, 15];
    }
    case 'Madarame': {
      if (costume.includes('Shadow')) return [-75, 10];
      return [55, 10];
    }
    case 'Maruki': {
      if (costume.includes('Metaverse')) return [80, 5];
      return [30, 35];
    }
    case 'Morgana': {
      if (costume === 'Human') return [35, 10];
      if (costume === '(Not a) Cat') return [-75, 65];
      if (emote.includes('Royal')) return [-30, 10];
      return [0, 25];
    }
    case 'Okumura': {
      if (costume.includes('Shadow')) return [0, 10];
      return [-35, 0];
    }
    case 'Ryuji': {
      if (emote.includes('Royal')) return [-45, 25];
      return [-70, 25];
    }
    case 'Sae': {
      if (costume.includes('Shadow')) return [10, 30];
      return [35, 10];
    }
    case 'Shiho': {
      if (costume.includes('Cognitive')) return [0, 0];
      return [55, 25];
    }
    case 'Teachers': {
      if (costume === 'Mr. Hiruta') return [0, 10];
      if (costume === 'Mr. Inui') return [55, 10];
      if (costume === 'Mr. Ushimaru') return [0, 0];
      if (costume === 'Ms. Chouno') return [40, 10];
      if (costume === 'Ms. Usami') return [50, 0];
      return [0, 0];
    }
    default: return [0, 0];
  }
}

export { simplePositions, findSpecialPosition };