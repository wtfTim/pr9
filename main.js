const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const year = document.querySelector('#year');
const errorM = document.querySelector('#errorm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const yearM = year.value.trim();

    let errors = [];


    if (name === '') {
        errors.push('Введите имя');
        nameInput.style.border = '1px solid red';
    } else if (name.length < 2) {
        errors.push('Имя должно быть больше 2 символов.');
        nameInput.style.border = '1px solid red';
    } else {
        nameInput.style.border = '';
    }

    
    if (yearM === '') {
        errors.push('Введите год рождения');
        year.style.border = '1px solid red';
    } else if (yearM.length !== 4) {
        errors.push('Год рождения должен состоять из 4 цифр.');
        year.style.border = '1px solid red';
    } else {
        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(yearM);
        if (age < 18) {
            errors.push('Вам должно быть не меньше 18 лет.');
            year.style.border = '1px solid red';
        } else {
            year.style.border = '';
        }
    }

    if (errors.length > 0) {
        errorM.innerHTML = errors.join('<br>');
    } else {
        errorM.innerHTML = 'Валидцаия пройдена';
    }
});