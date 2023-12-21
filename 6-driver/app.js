const hasLicence = true;
const age = 18;
const isDrunk = false;

// Не использовал age >= 18 так как по по заданию написано именно больше 18 лет.
const canDrive = age > 18 && hasLicence && !isDrunk ? 'может' : 'не может';
console.log(canDrive);