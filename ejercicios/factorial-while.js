function factorial(n) {
    let factorial = 1
    let inicio = 1
    while (inicio <= n){
        factorial = factorial * inicio;
        inicio++
    }
    console.log(factorial)
}

factorial(10);