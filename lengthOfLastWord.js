
function lengthOfLastWord(text) {

    let array = text.split(' ');

    for (let i = array.length - 1; i >= 0; i--) {

        if (array[i].length > 0) {
            return array[i].length;  
        }

    }

}

console.log(lengthOfLastWord('length of last word!  ')); // 5