const fakeCard = '4561-2612-1234-5464';
const trueCard = '4561-2612-1234-5467';

const cardChecker = (card) => {
    const cardNormalized = card.replace(/\D/g, '');
    let sum = 0;
    const parity = (cardNormalized.length) % 2;

    for (const i in cardNormalized) {
        let digit = Number(cardNormalized[i]);
        if (i % 2 === parity) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    return sum % 10 === 0;
}

console.log(cardChecker(fakeCard));
console.log(cardChecker(trueCard));