function igpayAtinlay(str) {
    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
    }

    function translateWord(word) {
        if (isVowel(word[0])) {
            return word + 'way';
        } else {
            var firstVowelIndex = 0;
            while (firstVowelIndex < word.length && !isVowel(word[firstVowelIndex])) {
                firstVowelIndex++;
            }
            return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
        }
    }

    return str.split(' ').map(translateWord).join(' ');
}

console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"
