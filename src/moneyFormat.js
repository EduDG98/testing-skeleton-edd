
const moneyFormat = (amount) => { 
    const enteros = Math.trunc(amount).toString();
    let result;
    if(enteros.length > 3){
        const centenas = enteros.slice(-3);
        const centanasWithComa = `,${centenas}`;
        result = enteros.replace(centenas, centanasWithComa)
        return `$${result}`
    }
}

console.log(moneyFormat(2039.5))