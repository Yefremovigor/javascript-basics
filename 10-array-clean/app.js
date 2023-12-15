const arr = [1,3,4,6,8,9];

const checkerMoreThanFive = num => num > 5;

const arrayFilter = (array, filter) => {
    for (let i = 0; i< array.length; i++) {
        if (filter(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }
}

arrayFilter(arr, checkerMoreThanFive);
console.log(arr);