// Configure here what languages you want to add

export default function languageConfig(lang, languages) {
  let words = {};
  switch(lang) {
    case 'pt':
      words = languages.pt;
      break;
    case 'en':
      words = languages.en;
      break;
    case 'du':
      words = languages.du;
      break;
  }
  return words;
};
