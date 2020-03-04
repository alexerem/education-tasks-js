
function anagram(word1, word2) {
    if (word1.length === word2.length) {

        let one = word1.toLowerCase().split("");
        let two = word2.toLowerCase().split("");

        while (one.length > 0) {
            if (two.indexOf(one[0]) >= 0) {
                let i = two.indexOf(one[0]);
                one.splice(0, 1);
                two.splice(i, 1);
                console.log('+');
            } else {
                console.log('This is not an anagram!!');
                return false;
            }
        }

        if (one.length === 0 && two.length === 0) {
            console.log('This is ANAGRAM');
        }

    } else {
        console.log('This is not an anagram!')
        return false;
    }
}

anagram('lolS', 'Lsol');