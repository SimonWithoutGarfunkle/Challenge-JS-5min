document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});

const seconds = 325

function secondToMin(sec) {
    return `\"${Math.floor(sec/60)}:${sec%60}\"`;
};

console.log(secondToMin(seconds));