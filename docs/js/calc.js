let getActualWidth = (event) => {
    switch (event.target.value) {
        case '':
            width.textContent = '0 cm';
            break;
        case 'classic':
            width.textContent = '165 cm';
            break;
        case 'smooth':
            width.textContent = '165 cm';
            break;
        case 'rubber':
            width.textContent = '100 cm';
            break;
        default:
            break;
    }
    getActualWeightOne();
    getActualWeightAll();
}

let getActualWeightOne = () => {
    weightOne.textContent = destiny.value * (parseInt(width.textContent) / 100);
    getActualWeightAll();
}

let getActualWeightAll = () => {
    weightAll.textContent = footage.value * parseInt(weightOne.textContent) / 1000 + ' кг';
}

let product = document.querySelector('.select_product');
product.addEventListener('change', getActualWidth);

let width = document.querySelector('.width_text');

let destiny = document.querySelector('.select_destiny');
destiny.addEventListener('change', getActualWeightOne);

let weightOne = document.querySelector('.weight_one_text');

let footage = document.querySelector('.footage_input_text');
footage.addEventListener('change', getActualWeightAll);

let weightAll = document.querySelector('.weight_all_text');