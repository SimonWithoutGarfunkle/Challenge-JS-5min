document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});

const itemList = ["Telescopes", "Lunettes", "Yeux", "Monocles"]

function sortStringAscending(itemList) {
    itemList.sort((a, b) => a.length - b.length);
}
console.log(itemList);