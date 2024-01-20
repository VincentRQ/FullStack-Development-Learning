const form = document.querySelector('form')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const quantity = document.getElementById('q')
const output = document.querySelector('#output')
console.log(form, plus, minus, quantity)

quantity.addEventListener('focus', function () {
  //   quantity.value
  //   console.log(quantity.value)
  quantity.value = ''
})

form.addEventListener('submit', function (event) {
  //   console.log(event)
  event.preventDefault()
  if (quantity.value == null) {
    alert('Quantity')
  } else {
    handleSubmit()
  }
  quantity.value = ''
})

const itemPrice = 99.99

let discount = 1

quantity.addEventListener('keyup', function () {
  calcDiscount()
})

function calcDiscount() {
  if (quantity.value > 2 && quantity.value <= 4) {
    discount = 0.9
  } else if (quantity.value >= 5 && quantity.value < 10) {
    discount = 0.85
  } else if (quantity.value >= 10) {
    discount = 0.8
  } else {
    discount = 1
  }

  console.log(discount)
  return discount
}

plus.addEventListener('click', function (e) {
  changeQuantity(e)
})
minus.addEventListener('click', function (e) {
  changeQuantity(e)
})

function changeQuantity(e) {
  // console.log(e.target.className);
  if (e.target.classList.contains('plus')) {
    quantity.value++
  } else {
    quantity.value--
  }
  if (quantity.value < 0) {
    quantity.value = 0
  }
}

function displayDiscount() {
  if (discount == 0.9) {
    return '-10%'
  } else if (discount == 0.85) {
    return '-15%'
  } else if (discount == 0.8) {
    return '-20%'
  } else {
    return ''
  }
}
function calcFinalPrice() {
  return itemPrice * quantity.value * discount
}

function handleSubmit() {
  //   console.log('Success')
  calcDiscount()
  displayDiscount()
  //   console.log(calcFinalPrice())
  output.innerHTML = `<div class="result">
${
  quantity.value
} x $${itemPrice} <span class="percent"> ${displayDiscount()} </span> = $${calcFinalPrice().toFixed(
    2
  )}

<div/>`
}
