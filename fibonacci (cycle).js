
function fibonacci(n) {

    let numberDown1 = 1;
    let numberDown2 = 0;
    let number;

    if (n === 1) {
        number = 0;
    }

    if (n === 2) {
        number = 1;
    }

    for (let i = 3; i <= n; i++) {
        number = numberDown1 + numberDown2;
        numberDown2 = numberDown1;
        numberDown1 = number;
    }

    return number;
}

console.log(fibonacci(10));
