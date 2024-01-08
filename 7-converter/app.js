/*
получает на входе строку 3 параметра:
- суммой средств - 1000
- валюту средств - руб
- целевую валюту - $

Возвращает число в целевой валюте, или null если конвертация не поддерживается
Ставки хранятся внутри функции
*/

const converter = (money, currentCurrency = 'RUB', targetCurrency = 'USD') => {
    const getRateToRub = (currency) => {
        switch (currency) {
            case 'RUB':
                return 1;
            case 'USD':
                return 90.2158;
            case 'EUR':
                return 97.4030;
            case 'CNY':
                return 12.5636;
            case 'GBP':
                return 113.2299;
            case 'BYR':
                return 28.4296;
            case 'TRY':
                return 3.1146;
            case 'AED':
                return 24.5652;
            default:
                return null;
        }
    }

    const converterToRub = (money, currency) => money * getRateToRub(currency);
    const converterFromRub = (money, currency) => money / getRateToRub(currency);

    const crossRubConvert = (money, currencyFrom, currencyTo) => converterFromRub(converterToRub(money, currencyFrom), currencyTo);

    const currencyNormalizer = (currency) => String(currency).toUpperCase();

    const normalizedCurrentCurrency = currencyNormalizer(currentCurrency);
    const normalizedTargetCurrency = currencyNormalizer(targetCurrency);

    switch (true) {
        case normalizedCurrentCurrency === normalizedTargetCurrency:
            return money;
        case Boolean(getRateToRub(normalizedCurrentCurrency)) && Boolean(getRateToRub(normalizedTargetCurrency)):
            return crossRubConvert(money, normalizedCurrentCurrency, normalizedTargetCurrency);
        default:
            return null;
    }
}

console.log(converter(1000, 'usd', 'rub'));
console.log(converter(1000, 'rub', 'usd'));
console.log(converter(1000, 'usd', 'usd'));
console.log(converter(1000, 'rub', 'rub'));
console.log(converter(1000, 'usd', 'eur'));
console.log(converter(1000, 'eur', 'rub'));
console.log(converter(1000, 'cny', 'gbp'));
console.log(converter(1000, 'cny', 'BUSD'));



