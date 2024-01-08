const getArrMidl = arr => Math.trunc((arr.length - 1) / 2);
const arrayFirstToLast = arr => arr.unshift(arr.pop());
const shuffleArray = (arr = []) => {
    arr.reverse();
    const arrMidl = getArrMidl(arr);
    const newArray = arr.splice(arrMidl);
    arrayFirstToLast(arr);
    arrayFirstToLast(newArray);
    return newArray.concat(arr);
}
const crypto = (string) => {
    string = String(string);
    const arrayString = string.split('');
    return shuffleArray(arrayString).join('');
}
const check = (pass, hash) => crypto(pass) === hash;
console.log(crypto('test'));
console.log(check('test', 'tset'));
console.log(check('test2', 'tseti'));