const array = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '01.12.2020'];

const resultArray = array.filter(el => Date.parse(el) >= 0);

console.log(resultArray);