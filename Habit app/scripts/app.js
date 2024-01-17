'use strict';

let habits = [];
const HABIT_KEY = 'HABIT_KEY';
let globalActiveHabitId;
const page = {
    menu: document.querySelector('.menu__list'), header: {
        title: document.querySelector('.header__title'),
        progressPercent: document.querySelector('.progress__percent'),
        progressBar: document.querySelector('.progress__cover-bar'),
    }, content: {
        daysContainer: document.querySelector('.days'), nextDay: document.querySelector('.habit--next .habit__day')
    },
    popup: {
        index: document.getElementById('add-habit-popup'),
        iconField: document.querySelector('.popup__form input[name="icon"]'),
    }
}


function loadData() {
    const habitsString = localStorage.getItem('HABIT_KEY');
    const habitsArray = JSON.parse(habitsString);
    if (Array.isArray(habitsArray)) {
        habits = habitsArray;
    }
}

function saveData() {
    localStorage.setItem(HABIT_KEY, JSON.stringify(habits));
}

function resetForm(form, fields) {
    for (const field of fields) {
        form[field].value = '';
        form[field].classList.remove('input--error');
    }
}
function validateForm(form, fields) {
    const formData = new FormData(form);
    const res = {};
    for (const field of fields) {
        const fieldValue = formData.get(field);
        form[field].classList.remove('input--error');
        if (!fieldValue) {
            form[field].classList.add('input--error');
        }

        res[field] = fieldValue;
    }
    let isValid = true;
    for (const field of fields) {
        if (!res[field]) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        return;
    }

    return res;
}


function rerenderMenu(activeHabit) {
    for (const habit of habits) {
        const existed = document.querySelector(`[menu-habit-id="${habit.id}"]`)

        if (!existed) {
            const element = document.createElement('button');
            element.setAttribute('menu-habit-id', habit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => render(habit.id));
            element.innerHTML = `<img src="./images/${habit.icon}.svg" alt="${habit.name}" />`

            if (activeHabit.id === habit.id) {
                element.classList.add('menu__item--active');
            }

            page.menu.appendChild(element);

            continue;
        }

        if (activeHabit.id === habit.id) {
            existed.classList.add('menu__item--active');
        } else {
            existed.classList.remove('menu__item--active');
        }
    }
}

function rerenderHead(activeHabit) {
    page.header.title.innerText = activeHabit.name;
    const progress = activeHabit.days.length / activeHabit.target > 1 ? 100 : activeHabit.days.length / activeHabit.target * 100;

    page.header.progressPercent.innerText = `${progress.toFixed(0)}%`;
    page.header.progressBar.style.width = `${progress}%`;
}

function rerenderContent(activeHabit) {
    page.content.daysContainer.innerHTML = '';

    for (const index in activeHabit.days) {
        const element = document.createElement('div');
        element.classList.add('habit');
        element.innerHTML = `<div class="habit__day">День ${Number(index) + 1}</div>
              <div class="habit__comment">${activeHabit.days[index].comment}</div>
              <button class="habit__delete" onclick="deleteDay(${index})">
                <img src="./images/delete.svg" alt="Удалить день ${index + 1}" />
              </button>`;
        page.content.daysContainer.appendChild(element);
    }

    page.content.nextDay.innerText = `День ${activeHabit.days.length + 1}`;
}

function render(activeHabitId) {
    globalActiveHabitId = activeHabitId;
    const activeHabit = habits.find(habit => habit.id === activeHabitId);
    if (!activeHabit) {
        return;
    }

    document.location.replace(document.location.pathname + '#' + activeHabitId)
    rerenderMenu(activeHabit);
    rerenderHead(activeHabit);
    rerenderContent(activeHabit);
}

function addDay(event) {
    event.preventDefault();

    const data= validateForm(event.target, ['comment']);
    if (!data) {
        return;
    }


    habits = habits.map(habit => {
        if (habit.id === globalActiveHabitId) {
            return {
                ...habit, days: habit.days.concat([{comment: data.comment}])
            }
        }
        return habit;
    });

    resetForm(event.target, ['comment']);
    render(globalActiveHabitId);
    saveData();
}

function deleteDay(index) {
    habits = habits.map(habit => {
        if (habit.id === globalActiveHabitId) {
            habit.days.splice(index, 1);
            return {
                ...habit, days: habit.days
            };
        }
        return habit;
    });
    render(globalActiveHabitId);
    saveData();
}

function togglePopup() {
    page.popup.index.classList.toggle('cover--hidden');
}

function setIcon(context, icon) {
    page.popup.iconField.value = icon;
    const activeIcon = document.querySelector('.icon-select .icon--active');
    activeIcon.classList.remove('icon--active');
    context.classList.add('icon--active');
}

function addHabit(event) {
    event.preventDefault();
    const data = validateForm(event.target, ['name', 'icon', 'target']);
    if (!data) {
        return;
    }
    const maxId = habits.reduce((acc, habit) => acc > habit.id ? acc : habit.id, 0);

    habits.push({
        id: maxId + 1,
        icon: data.icon,
        name: data.name,
        target: data.target,
        days: []
    });
    resetForm(event.target, ['name', 'icon', 'target']);
    togglePopup()
    saveData();
    render(maxId + 1);
}

(() => {
    loadData();
    const hashId = Number(document.location.hash.replace('#', ''));
    const urlHabit = habits.find(habit => habit.id === hashId);
    if (urlHabit) {
        render(urlHabit.id);
    } else {
        render(habits[0].id);
    }

})();