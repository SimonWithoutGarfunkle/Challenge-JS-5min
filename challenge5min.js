document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});

const treatList = [ "Twix", "Bounty", "Snikers", "Mars", "M&M's", "Twix", "Snikers" ];

function weightLoss(list) {
    return new Set(list);
};

console.log(weightLoss(treatList));