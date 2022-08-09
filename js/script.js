const rangeValue = document.querySelector('.views-amount')
const PriceRange = document.querySelector('.price-range')
const costs = document.querySelector('.costs')
let prices = [8, 12, 16, 24, 32]

PriceRange.oninput = pricing

function pricing() {
    rangeValue.innerHTML = PriceRange.value * 10 + 'k'
    let a

    if (PriceRange.value >= 1 && PriceRange.value < 5) {
        a = '$' + prices[0]
    }
    else if (PriceRange.value >= 5 && PriceRange.value < 10) {

        a = '$' + prices[1]
    }
    else if (PriceRange.value >= 10 && PriceRange.value < 50) {
        a = '$' + prices[2]
    }
    else if (PriceRange.value >= 50 && PriceRange.value < 100) {
        a = '$' + prices[3]
    }
    else {
        a = '$' + prices[4]
    }
    costs.innerHTML = a

}

PriceRange.addEventListener('mousemove', function () {
    let x = PriceRange.value;
    let color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65%, 95%)' + x + '%';
    PriceRange.style.background = color
});

document.querySelector('.toggle-bg__yearly').onchange = function () {
    prices = prices.map(item => {
        return item / 4 * 3
    })
    pricing()
}
document.querySelector('.toggle-bg__monthly').onchange = function () {
    prices = [8, 12, 16, 24, 32]
    pricing()
}
