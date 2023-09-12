const findWidth = (char, emote, costume) => {
  switch (char) {
    case 'Ai': {
      if (costume !== 'Summer Uniform') return 312;
      return 300;
    }
    case 'Ayane': {
      if (costume === 'Spring Uniform') return 223;
      if (costume === 'Summer Uniform') return 230;
      return 233;
    }
    case 'Chie': {
      switch (costume) {
        case 'Epilogue': return 275;
        case 'New Years': return 255;
        case 'Ski Trip': return 336;
        case 'Spring Casual': return 290;
        case 'Spring Uniform': return 290;
        case 'Spring Uniform (Glasses)': return 290;
        case 'Summer Casual': return 280;
        case 'Summer Uniform': return 280;
        case 'Summer Uniform (Glasses)': return 280;
        case 'Swimsuit': return 280;
        case 'Towel': return 280;
        case 'Winter Casual': return 312;
        case 'Winter Uniform': return 300;
        case 'Yukata': return 278;
        default: return 290;
      }
    }
    case 'Dojima': {
      if (costume === 'Hospital Gown') return 295;
      return 288;
    }
    case 'Mr. Edogawa': return 335;
    case 'Eri': return 260;
    case 'Fox': return 320;
    case 'Hanako': {
      if (costume === 'Summer Uniform') return 339;
      return 330;
    }
    case 'Hisano': return 320;
    case 'Igor': return 320;
    case 'Kanji': {
      switch (costume) {
        case 'Culture Festival': return 304;
        case 'Epilogue': return 311;
        case 'Gag Glasses': return 353;
        case 'Ski Trip': return 320;
        case 'Spring Casual': return 310;
        case 'Spring Uniform': return 353;
        case 'Spring Uniform (Glasses)': return 353;
        case 'Summer Casual': return 298;
        case 'Tracksuit': return 353;
        case 'Tracksuit (Nosebleed)': return 353;
        case 'Winter Casual': return 315;
        case 'Winter Uniform': return 353;
        case 'Yukata': return 295;
        default: return 300;
      }
    }
    case 'Ms. Kashiwagi': return 280;
    case 'Kou': {
      switch (costume) {
        case 'Basketball Practice': return 264;
        case 'Sleeveless': return 270;
        case 'Spring Uniform': return 259;
        case 'Summer Casual': return 263;
        case 'Summer Uniform': return 266;
      }
    }
    case 'Margaret': return 350;
    case 'Marie': {
      if (costume === 'Casual') return 261;
      if (costume === 'Epilogue') return 261;
      if (costume === 'Kusumi no Okami') return 325;
      return 299;
    }
    case 'Mayumi': return 230;
    case 'Mitsuo': {
      if (costume === 'Spring Uniform') return 291;
      return 280;
    }
    case 'Mr. Morooka': return 335;
    case 'Namatame': {
      if (costume === 'Casual') return 300;
      if (costume === 'Hospital Gown') return 305;
      return 310;
    }
    case 'Nanako': {
      if (costume === 'Winter Attire') return 230;
      return 220;
    }
    case 'Naoto': {
      switch (costume) {
        case 'Epilogue': return 263;
        case 'Girls\' Uniform': return 285;
        case 'Spring Casual': return 295;
        case 'Spring Casual (No Hat)': return 292;
        case 'Summer Casual': return 290;
        case 'Summer Uniform': return 290;
        case 'Summer Uniform (Glasses)': return 290;
        case 'Towel': return 225;
        case 'Winter Casual': return 307;
        case 'Winter Uniform': return 310;
        default: return 300;
      }
    }
    case 'Naoki': {
      if (costume === 'Spring Uniform') return 220;
      return 238;
    }
    case 'Old Lady Shiroku': {
      if (costume === 'Shop Attire') return 300;
      return 270;
    }
    case 'Old Man Daidara': return 330;
    case 'Rise': {
      if (costume === 'Epilogue') return 311;
      if (costume === 'New Years') return 246;
      if (costume === 'Spring Casual') return 298;
      return 300;
    }
    case 'Saki': {
      if (costume === 'Spring Uniform') return 287;
      return 290;
    }
    case 'Sayoko': return 250;
    case 'Shu': return 280;
    case 'Tanaka': return 305;
    case 'Teddie': {
      if (costume.includes('Damaged')) return 350;
      switch (costume) {
        case 'Bear': return 320;
        case 'Culture Festival': return 280;
        case 'Epilogue': return 265;
        case 'Human Outfit': return 268;
        case 'Human Reveal': return 394;
        case 'Shadow Teddie': return 320;
        case 'Shirtless': return 260;
        case 'Winter Casual': return 263;
        case 'Work Attire': return 268;
        case 'Yukata': return 276;
      }
    }
    case 'Yosuke': {
      if (emote === 'Miscellaneous') return 296;
      switch (costume) {
        case 'Culture Festival': return 352;
        case 'Epilogue': return 299;
        case 'Ski Trip': return 356;
        case 'Spring Casual': return 306;
        case 'Spring Uniform': return 296;
        case 'Spring Uniform (Glasses)': return 296;
        case 'Summer Casual': return 298;
        case 'Summer Uniform': return 304;
        case 'Summer Uniform (Glasses)': return 304;
        case 'Tracksuit': return 297;
        case 'Winter Casual': return 304;
        case 'Work Attire (Summer)': return 298;
        case 'Winter Uniform': return 296;
        case 'Yukata': return 315;
        default: return 300;
      }
    }
    case 'Yukiko': {
      if (costume.includes('Shadow')) return 296;
      switch (costume) {
        case 'Epilogue': return 244;
        case 'Kimono': return 301;
        case 'New Years': return 275;
        case 'Ski Trip': return 322;
        case 'Spring Casual': return 286;
        case 'Summer Casual': return 287;
        case 'Tracksuit': return 288;
        case 'Winter Uniform': return 293;
        case 'Yukata': return 301;
        default: return 289;
      }
    }
    case 'Yumi': {
      if (emote === 'Miscellaneous') return 517;
      if (costume === 'Summer Uniform') return 266;
      if (costume === 'Casual') return 254;
      return 255;
    }
    default: return 300;
  }
}

export default findWidth;