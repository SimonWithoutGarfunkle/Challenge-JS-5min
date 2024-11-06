document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});

const incomeList = [
    { name: 'john', income: '32500' },
    { name: 'joe', income: '54000' },
    { name: 'hames', income: '42000' },
]

function computeAverage(arr) {
    return Math.floor(arr.reduce((sum, user) => sum += parseInt(user.income),0 )/arr.length);
};

console.log(computeAverage(incomeList));