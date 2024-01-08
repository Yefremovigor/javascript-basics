/*
Массив arr = [1, 40, -5, 10, 0]
написать функцию сортировки массива циклом.
*/

const arr = [1, 40, -5, 10, 0];
const arraySorting = (arr, fromHigherToLower = false) => {
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (value > arr[j]) {
                arr[i] = arr[j];
                arr[j] = value;
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