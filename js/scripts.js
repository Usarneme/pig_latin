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

// "bbba"
function pigLatin(phrase) {
  let pigLatinPhrase = "";

  if (isFirstLetterVowel(phrase)) {
    pigLatinPhrase = phrase.concat("way");
  } else {
    let indexOfFirstVowel;

    // phrase = "bbba"
    for (let index = 0; index < phrase.length; index += 1) {
      // if the letter at this index in the prhase is a vowel,
      // then we update the indexOfFirstVowel variable
      // index = 0, "bbba"[0] = "b"
      // index = 1, "bbba"[1] = "b"
      // ..
      // index = 3, "bbba[3] = "a" DING DING DING!
      if (isVowel(phrase[index])) {
        indexOfFirstVowel = index;
        break;
      }
    }
    // now we know where the first vowel is in the phrase

    // store all of the phrase AFTER the first vowel
    pigLatinPhrase = phrase.slice(indexOfFirstVowel);
    // append/tack on the rest of the phrase
    pigLatinPhrase += phrase.slice(0, indexOfFirstVowel);
  }

  return pigLatinPhrase;
}

// "bbba" => "abbb"


// UI Logic



