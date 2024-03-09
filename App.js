function toplama(a, b) {
    const result = [];
    let carry = 0;
    const length = Math.max(a.length, b.length);
    
    for (let i = 0; i < length; i++) {
        const sum = (a[i] || 0) + (b[i] || 0) + carry;
        result.push(sum % 10);
        carry = sum >= 10 ? 1 : 0;
    }
    
    if (carry) {
        result.push(carry);
    }
    
    return result;
}

console.log("Output 1 :");
console.log(toplama([5, 6, 1], [6, 3, 5])); // [1, 0, 7]





//2.soru

function bulMedyan(dizi1, dizi2) {
    const birlestirilmisDizi = [...dizi1, ...dizi2].sort((a, b) => a - b);
    const ortancaIndex = Math.floor(birlestirilmisDizi.length / 2);
    
    return birlestirilmisDizi.length % 2 === 0 ? (birlestirilmisDizi[ortancaIndex - 1] + birlestirilmisDizi[ortancaIndex]) / 2 : birlestirilmisDizi[ortancaIndex];
}

const dizi1 = [1, 2];
const dizi2 = [3, 4];
console.log("Output 2:");
console.log(bulMedyan(dizi1, dizi2));

