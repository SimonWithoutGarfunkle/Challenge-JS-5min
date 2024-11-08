document.getElementById("magicButton").addEventListener("click", function() {
    document.getElementById("secret").classList.toggle('secret');
});

const salaryList = [27000, 32000, 36000]

function getMedianSalary(list) {
    return list.length % 2 === 0 ? Math.floor(list.slice(1, -1).reduce((acc, salary) => acc += salary)/(list.length - 2)) : list.at(list.length / 2);
};

console.log(getMedianSalary(salaryList));