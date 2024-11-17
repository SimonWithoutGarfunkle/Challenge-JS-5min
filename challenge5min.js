document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});

const priceList = [1, 4, 5, 19, 21, 2]

function minMax(list) {
    return [Math.min(...priceList), Math.max(...priceList)]
}

console.log(minMax(priceList));