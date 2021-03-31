// Helper Functions
function isVowel(letter) {
  const vowels = ["a","e","i","o","u"];
  if (vowels.includes(letter)) {
    return true
  } else {
    return false
  }
}

function isFirstLetterVowel(word) {
  if (isVowel(word[0])) {
    return true
  } else {
    return false
  }
}

// Business Logic

// "ba"
function pigLatin(phrase) {
  let pigLatinPhrase = "";

  // isFirstLetterVowel"ba") => false
  if (isFirstLetterVowel(phrase)) {
    pigLatinPhrase = phrase.concat("way");
  } else {
    pigLatinPhrase = phrase.slice(1);
    // pigLatinPhrase = "a"
    pigLatinPhrase += phrase.slice(0,1)
    // pigLatinPhrase = "ab"
  }

  return pigLatinPhrase;
}




// UI Logic



