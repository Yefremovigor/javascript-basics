const arr = [1, 3, 4, 6, 8, 9];

const checkerMoreThanFive = num => num > 5;

const arrayFilter = (array, filter) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!filter(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(arrayFilter(arr, checkerMoreThanFive));