const findCostumeMenu = (portrait: string, emote: string) => {
  switch (portrait) {
    case "Akane": {
      switch (emote) {
        case "Miscellaneous": return [
          "Shadow Akane (Angry)",
          "Shadow Akane (Happy, No Hat)",
          "Shadow Akane (Hurt)",
          "Shadow Akane (Neutral)",
          "Shadow Akane (Smug, Normal Eyes)",
          "Shadow Akane (Smug)"
          ];
        default: return ["Casual"];
      }
    }

    case "Akechi": {
      switch (emote) {
        case "Angry": return ["Casual", "Crow (No Mask)", "Crow", "Detective Prince", "Summer Uniform"];
        case "Angry (Royal)": return; 
      }
    }
  }
}