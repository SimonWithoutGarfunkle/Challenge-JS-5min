document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min))
}

function getRandomNumberRGB() {
    return getRandomNumber(0, 255)
}

function generateRandomRGB() {
    console.log(`rgb(${getRandomNumberRGB()}, ${getRandomNumberRGB()}, ${getRandomNumberRGB()})`)
}


generateRandomRGB();