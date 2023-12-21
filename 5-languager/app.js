'use strict'

const lang = 'ru';

switch (lang) {
    case "ru":
        console.log('Добро пожаловать!');
        break;
    case "en":
        console.log('Welcome!');
        break;
    case "es":
        console.log('¡Bienvenido!');
        break;
    case "jp":
        console.log('ようこそ!');
        break;
    default:
        console.log('👋');
}