const name1 = (n) => {
    name2(n - 1)
    
}

const name2 = (n) => {
    if (n>=-5) {
        console.log(n);
        name1(n)
    }
}

name2(5)