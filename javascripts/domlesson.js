function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    document.querySelector('.js-total-cost')
  .innerHTML = '';
document.querySelector('.js-error-message')
  .innerHTML = '';

    if (cost < 0) {
        document.querySelector('.js-error-message').innerHTML = 'Error: cost cannot be less than $0';

        return;
    }

    if (cost < 40) {
        cost = cost + 10;
    }

    document.querySelector('.js-total-cost').innerHTML = `Total cost is $${cost}`;
}


function subscribe() {
    const subbtn = document.querySelector('.js-sub-btn');

    if (subbtn.innerHTML === 'subscribe') {
        subbtn.innerHTML = 'subscribed';
    } else {
        subbtn.innerHTML = 'subscribe';
    }
}
