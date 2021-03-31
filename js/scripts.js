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
function pigLatin(phrase) {
  let pigLatinPhrase = "";

  if (isVowel(phrase)) {
    pigLatinPhrase = phrase.concat("way");
  }

  return pigLatinPhrase;
}





// UI Logic



