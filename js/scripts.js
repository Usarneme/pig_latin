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
      if (phraseArray[0] === "q" && phraseArray[1] && phraseArray[1] === "u") {
        endConsonants.push(phraseArray.shift())
        endConsonants.push(phraseArray.shift())
      } else {
        endConsonants.push(phraseArray.shift())
      }
    }

    const phraseString = phraseArray.join("");
    const endConsonantsString = endConsonants.join("");

    pigLatinPhrase += phraseString + endConsonantsString;
    pigLatinPhrase += "ay";
  }

  return pigLatinPhrase;
}




// UI Logic
$(document).ready(function() {
  $(".btn").click(function() {
    const val = $(".input").val();
    const pig = pigLatin(val)
    $(".result").text(pig)
  })
})
