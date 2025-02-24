function DeFront(str) {
    let result = '';
    if (str.length > 0 && str[0] === 'a') {
        result += 'a';
    }
    if (str.length > 1 && str[1] === 'b') {
        result += 'b';
    }
    if (str.length > 2) {
        result += str.slice(2);
    }
    return result;
}


console.log(DeFront('Hello'));
console.log(DeFront('java')); 
console.log(DeFront('away')); 