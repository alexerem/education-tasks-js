const vowels = ['a', 'e', 'i', 'o', 'u']

function findVowels(string) {

    let result = 0;

    for (let i = 0; i < vowels.length; i++) {
        for (let x = 0; x < string.length; x++) {
            if (vowels[i] === string[x]) {
                result++;
            }
        }
    }

    return result;
}

console.log(findVowels('finishtestresult'));