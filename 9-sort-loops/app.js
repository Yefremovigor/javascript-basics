/*
Массив arr = [1, 40, -5, 10, 0]
написать функцию сортировки массива циклом.
*/

const arr = [1, 40, -5, 10, 0];
const arraySorting = (arr, fromHigherToLower = false) => {
    for (const currentKey in arr) {
        const value = arr[currentKey];
        for (const key in arr) {
            if (value > arr[key]) {
                arr[currentKey] = arr[key];
                arr[key] = value;
                break;
            }
        }
    }
    if (!fromHigherToLower) {
        arr.reverse();
    }
}

arraySorting(arr);
console.log(arr);