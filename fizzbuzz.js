
function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if ((i % 5) == 0) {
            if ((i % 3) == 0) {
                console.log('fizzbuzz');
            } else {
                console.log('buzz');
            }
        } else {
            if ((i % 3) == 0) {
                console.log('fizz');
            } else {
                console.log(i);
            }
        }
    }
}

fizzBuzz(16);