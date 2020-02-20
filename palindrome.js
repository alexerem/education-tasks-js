
function palindrome(string) {
    
    let stringUpd = string.split(' ').join('');

    for (let i = 0; i < stringUpd.length / 2; i++) {

        let h = stringUpd.length - i;

        if (stringUpd[i] == stringUpd[h - 1]) {
            console.log('Ok!');
        } else {
            console.log('Mismatch!')
            console.log(string + ': is not palindrome!')
            return false;
        }
    }

    console.log(string + ': is palindrome!')
}

palindrome('madam im adam');
