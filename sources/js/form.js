const inputs = document.querySelectorAll('.requared_field');
const patterns = {
    name: /^.{1,30}$/,
    comment: /^.{1,1000}$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
}

function validate(field, regexp) {
    // провернка на лишние пробелы вначале, вконце (trim()) и среди текста (replace())
    let withoutSpaces = (field.value.trim()).replace(/\s+/g,' ');
    // проверка на соответствие шаблонам ввода из переменной patterns
    if (regexp.test(withoutSpaces)) {
        field.classList.remove('invalid');
        field.classList.add('valid');
    } else {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }
}

inputs.forEach((inputs) => {
    inputs.addEventListener('keyup', (event) => {
        validate(event.target, patterns[event.target.attributes.name.value]);
    })
})

const form = document.querySelector('.form_g');
form.addEventListener('submit', formSend);

async function formSend(event) {
    let validField = 0;
    event.preventDefault();
    for (i of inputs) {
        if (i.classList.contains('valid')) {
            validField++;

        } else {
            i.classList.add('_error');
        }

        if (validField == 3) {
            alert('Ваша форма отправлена!');
            for(input of inputs){
                input.value = '';
            }
        }
    }
}