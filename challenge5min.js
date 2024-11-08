document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});

const number = [190, 5, 4200, 2, 776 ]

function sumTwoSmallest(list) {
    return list.sort((a, b) => a - b).splice(0, 2).reduce((a, b) => a + b);
};

console.log(sumTwoSmallest(number));