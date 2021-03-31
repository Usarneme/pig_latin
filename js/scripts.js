// Helper Functions
function isVowel(letter) {
  const vowels = ["a","e","i","o","u"];
  if (vowels.includes(letter)) {
    return true
  } else {
    return false
  }
}

function isFirstLetterY(word) {
  const firstLetter = word[0];
  if (firstLetter === "y") {
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

  if (isFirstLetterVowel(phrase)) {
    pigLatinPhrase = phrase.concat("way");
  } else {
    let endConsonants = [];
    const phraseArray = phrase.split("");

    while (phraseArray.length > 0 && !isVowel(phraseArray[0])) {
      endConsonants.push(phraseArray.shift())
    }

    console.log("phraseArray:", phraseArray)
    const phraseString = phraseArray.join("");
    console.log("phraseString:", phraseString)

    console.log("endConsonants:", endConsonants)
    const endConsonantsString = endConsonants.join("");
    console.log("endConsonantsString:", endConsonantsString)

    pigLatinPhrase += phraseString + endConsonantsString;
    pigLatinPhrase += "ay";
  }

  return pigLatinPhrase;
}




// UI Logic



