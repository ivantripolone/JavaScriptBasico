function factorial(n) {
    let factorial = 1
    let inicio = 1
    while (true){
        if(inicio > n ){
            break
        }
        factorial = factorial * inicio;
        inicio++
    }
    console.log(factorial)
}

factorial(10);