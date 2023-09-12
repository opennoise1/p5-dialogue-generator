const findPosition = (version, char, emote, costume) => {
  switch (char) {
    case 'Adachi': return version === 'golden' ? [795, 138] : [870, 117];
    case 'Ai': {
      if (costume === 'Summer Uniform') {
        return version === 'golden' ? [793, 143] : [870, 122];
      } 
      return version === 'golden' ? [777, 143] : [854, 122];
    }
    case 'Ayane': {
      if (costume === 'Spring Uniform') {
        return version === 'golden' ? [815, 159] : [890, 139];
      }
      if (costume === 'Summer Uniform') {
        return version === 'golden' ? [815, 159] : [890, 139];
      }
      return version === 'golden' ? [815, 160] : [890, 139];
    }
    case 'Chie': {
      if (emote === 'Miscellaneous') return version === 'golden' ? [802, 173] : [822, 151]; 
      switch (costume) {
        case 'Epilogue': return version === 'golden' ? [793, 171] : [813, 150];
        case 'New Years': return version === 'golden' ? [821, 171] : [841, 150];
        case 'Spring Casual': return version === 'golden' ? [802, 172] : [822, 150];
        case 'Spring Uniform': return version === 'golden' ? [802, 172] : [822, 150];
        case 'Spring Uniform (Glasses)': return version === 'golden' ? [802, 172] : [822, 150];
        case 'Ski Trip': return version === 'golden' ? [774, 96] : [794, 75];
        case 'Summer Casual': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Summer Uniform': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Summer Uniform (Glasses)': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Swimsuit': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Towel': return version === 'golden' ? [807, 172] : [827, 150];
        case 'Winter Casual': return version === 'golden' ? [787, 172] : [807, 150];
        case 'Winter Uniform': return version === 'golden' ? [795, 171] : [815, 151]; 
        case 'Yukata': return version === 'golden' ? [803, 172] : [823, 153];
      }
    }
    case 'Chihiro': return version === 'golden' ? [745, 171] : [800, 150];
    case 'Daisuke': {
      if (costume === 'Soccer Practice') return version === 'golden' ? [780, 167] : [849, 147];
      return version === 'golden' ? [775, 167] : [844, 147];
    }
    case 'Dojima': return version === 'golden' ? [840, 136] : [925, 115];
    case 'Mr. Edogawa': return version === 'golden' ? [735, 182] : [850, 161];
    case 'Eri': return version === 'golden' ? [785, 150] : [850, 130];
    case 'Fox': return version === 'golden' ? [770, 163] : [865, 142];
    case 'Hanako': return version === 'golden' ? [740, 225] : [825, 205];
    case 'Hisano': {
      if (emote === 'Sad') {
        return version === 'golden' ? [801, 186] : [881, 166];
      } 
      return version === 'golden' ? [800, 185] : [880, 165];
    }
    case 'Igor': return version === 'golden' ? [765, 225] : [850, 205];
    case 'Izanami': {
      if (costume === 'Robes') {
        return version === 'golden' ? [785, 155] : [880, 133]; 
      }
      return version === 'golden' ? [786, 153] : [881, 131];
    }
    case 'Kanji': {
      if (emote === 'Miscellaneous' && costume != "Gag Glasses") return version === 'golden' ? [790, 135] : [865, 116];
      switch (costume) {
        case 'Culture Festival': return version === 'golden' ? [788, 131] : [864, 111];
        case 'Epilogue': return version === 'golden' ? [781, 149] : [856, 129];
        case 'Gag Glasses': return version === 'golden' ? [752, 144] : [827, 124];
        case 'Shirtless': return version === 'golden' ? [790, 135] : [865, 116];
        case 'Ski Trip': return version === 'golden' ? [777, 159] : [851, 139];
        case 'Spring Casual': return version === 'golden' ? [791, 135] : [866, 115];
        case 'Spring Uniform': return version === 'golden' ? [752, 144] : [827, 124];
        case 'Spring Uniform (Glasses)': return version === 'golden' ? [752, 144] : [827, 124];
        case 'Summer Casual': return version === 'golden' ? [790, 135] : [865, 115];
        case 'Summer Uniform': return version === 'golden' ? [790, 135] : [865, 115];
        case 'Summer Uniform (Glasses)': return version === 'golden' ? [790, 135] : [865, 115];
        case 'Tracksuit': return version === 'golden' ? [777, 135] : [842, 115];
        case 'Tracksuit (Nosebleed)': return version === 'golden' ? [777, 135] : [842, 115];
        case 'Winter Casual': return version === 'golden' ? [784, 135] : [849, 115];
        case 'Winter Uniform': return version === 'golden' ? [752, 144] : [827, 124];
        case 'Yukata': return version === 'golden' ? [794, 136] : [869, 117];
      } 
    }
    case 'Ms. Kashiwagi': return version === 'golden' ? [745, 140] : [830, 119];
    case 'Kou': {
      switch (costume) {
        case 'Spring Uniform': return version === 'golden' ? [804, 146] : [884, 125];
        case 'Summer Casual': return version === 'golden' ? [799, 146] : [879, 125];
        case 'Summer Uniform': return version === 'golden' ? [794, 146] : [874, 124];
        default: return version === 'golden' ? [800, 146] : [880, 125];
      }
    }
    case 'Margaret': return version === 'golden' ? [685, 160] : [760, 140];
    case 'Marie': {
      switch (costume) {
        case 'Casual': return version === 'golden' ? [826, 148] : [921, 127];
        case 'Epilogue': return version === 'golden' ? [840, 148] : [935, 127];
        case 'Kusumi no Okami': return version === 'golden' ? [777, 136] : [872, 115];
        default: return version === 'golden' ? [775, 130] : [870, 109];
      }
    }
    case 'Mayumi': return version === 'golden' ? [835, 156] : [880, 135];
    case 'Mitsuo': {
      if (costume === 'Spring Uniform') return version === 'golden' ? [795, 136] : [900, 115];
      return version === 'golden' ? [800, 136] : [905, 115];
    }
    case 'Mr. Morooka': return version === 'golden' ? [900, 190] : [925, 167];
    case 'Namatame': {
      if (costume === 'Delivery Attire' || emote === 'Miscellaneous') return version === 'golden' ? [776, 138] : [886, 118];
      return version === 'golden' ? [795, 145] : [905, 125];
    }
    case 'Nanako': {
      if (costume === 'Epilogue') return version === 'golden' ? [818, 160] : [868, 136];
      if (costume === 'Winter Attire') return version === 'golden' ? [813, 153] : [863, 129];
      return version === 'golden' ? [820, 160] : [870, 136];
    }
    case 'Naoto': {
      if (emote === 'Miscellaneous') return version === 'golden' ? [784, 149] : [803, 128];
      switch (costume) {
        case 'Epilogue': return version === 'golden' ? [808, 168] : [827, 146];
        case 'Girls\' Uniform': return version === 'golden' ? [781, 167] : [800, 145];
        case 'Spring Casual': return version === 'golden' ? [782, 149] : [802, 128];
        case 'Spring Casual (No Hat)': return version === 'golden' ? [785, 168] : [803, 148];
        case 'Spring Uniform': return version === 'golden' ? [782, 149] : [802, 128];
        case 'Spring Uniform (Glasses)': return version === 'golden' ? [782, 149] : [802, 128];
        case 'Summer Casual': return version === 'golden' ? [786, 149] : [805, 128];
        case 'Summer Uniform': return version === 'golden' ? [786, 149] : [805, 128];
        case 'Summer Uniform (Glasses)': return version === 'golden' ? [786, 149] : [805, 128];
        case 'Towel': return version === 'golden' ? [854, 167] : [873, 145];
        case 'Winter Casual': return version === 'golden' ? [777, 150] : [796, 129];
        case 'Winter Uniform': return version === 'golden' ? [775, 149] : [794, 128];
        default: return version === 'golden' ? [775, 154] : [795, 132];
      }
    }
    case 'Naoki': {
      if (costume === 'Spring Uniform') return version === 'golden' ? [825, 127] : [910, 105];
      return version === 'golden' ? [825, 127] : [910, 105];
    }
    case 'Old Lady Shiroku': {
      if (costume === 'Shop Attire') return version === 'golden' ? [785, 221] : [850, 199];
      return version === 'golden' ? [775, 136] : [840, 115];
    }
    case 'Old Man Daidara': return version === 'golden' ? [765, 165] : [870, 144]; 
    case 'Rise': {
      if (costume === 'Epilogue') return version === 'golden' ? [768, 148] : [788, 127];
      if (costume === 'New Years') return version === 'golden' ? [826, 103] : [846, 82];
      return version === 'golden' ? [795, 129] : [815, 108];
    }
    case 'Saki': return version === 'golden' ? [795, 145] : [870, 124];
    case 'Sayoko': return version === 'golden' ? [795, 125] : [870, 104];
    case 'Shu': return version === 'golden' ? [795, 125] : [870, 105];
    case 'Tanaka': return version === 'golden' ? [795, 156] : [880, 135];
    case 'Teddie': {
      if (costume.includes('Damaged')) return version === 'golden' ? [785, 245] : [775, 225];
      switch (costume) {
        case 'Bear': return version === 'golden' ? [785, 165] : [865, 144];
        case 'Culture Festival': return version === 'golden' ? [790, 142] : [865, 121];
        case 'Epilogue': return version === 'golden' ? [807, 151] : [882, 130];
        case 'Human Outfit': return version === 'golden' ? [804, 151] : [879, 130];
        case 'Human Reveal': return version === 'golden' ? [716, 150] : [766, 129];
        case 'Shadow Teddie': return version === 'golden' ? [785, 165] : [865, 144];
        case 'Shirtless': return version === 'golden' ? [815, 151] : [890, 130];
        case 'Winter Casual': return version === 'golden' ? [812, 150] : [887, 129];
        case 'Work Attire': return version === 'golden' ? [804, 151] : [879, 130];
        case 'Yukata': return version === 'golden' ? [801, 151] : [876, 130];
      }
    }
    case 'Yosuke': {
      if (emote === 'Miscellaneous') return version === 'golden' ? [771, 151] : [861, 130];
      switch (costume) {
        case 'Culture Festival': return version === 'golden' ? [762, 104] : [852, 84];
        case 'Epilogue': return version === 'golden' ? [775, 148] : [865, 127];
        case 'Shirtless': return version === 'golden' ? [775, 151] : [865, 130];
        case 'Ski Trip': return version === 'golden' ? [764, 132] : [854, 111];
        case 'Spring Casual': return version === 'golden' ? [773, 151] : [863, 130];
        case 'Spring Uniform': return version === 'golden' ? [771, 151] : [861, 130];
        case 'Spring Uniform (Glasses)': return version === 'golden' ? [771, 151] : [861, 130];
        case 'Summer Casual': return version === 'golden' ? [775, 151] : [865, 130];
        case 'Summer Uniform': return version === 'golden' ? [772, 151] : [862, 130];
        case 'Summer Uniform (Glasses)': return version === 'golden' ? [772, 151] : [862, 130];
        case 'Tracksuit': return version === 'golden' ? [771, 151] : [861, 130];
        case 'Winter Casual': return version === 'golden' ? [771, 151] : [861, 130];
        case 'Winter Uniform': return version === 'golden' ? [771, 151] : [861, 130];
        case 'Work Attire (Spring)': return version === 'golden' ? [775, 151] : [865, 130];
        case 'Work Attire (Summer)': return version === 'golden' ? [775, 151] : [865, 130];
        case 'Yukata': return version === 'golden' ? [775, 151] : [865, 130];
      }
    }
    case 'Yukiko': {
      switch (costume) {
        case 'Epilogue': return version === 'golden' ? [841, 145] : [921, 124];
        case 'New Years': return version === 'golden' ? [841, 103] : [921, 84];
        default: return version === 'golden' ? [785, 144] : [865, 123];
      }
    }
    case 'Yumi': {
      if (emote === 'Miscellaneous') return version === 'golden' ? [639, 137] : [704, 116];
      if (costume === 'Casual') return version === 'golden' ? [807, 138] : [872, 117];
      if (costume === 'Summer Uniform') return version === 'golden' ? [802, 137] : [867, 116];
      return version === 'golden' ? [805, 137] : [870, 116];
    }
    case 'Yu': return version === 'golden' ? [795, 146] : [870, 125];
    default: return version === 'golden' ? [795, 135] : [870, 115];
  }
}

export default findPosition;