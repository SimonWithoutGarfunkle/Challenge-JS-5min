document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});

//const items = [1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16];
const items = [1, 1/2, 1/2]

function displayPettyCash(items) {
   return items.reduce((acc, item) => acc += item).toFixed(2);
}
console.log(displayPettyCash(items));