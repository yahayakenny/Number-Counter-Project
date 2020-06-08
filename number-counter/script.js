let counter = document.getElementById("counter");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
let count = 0;

const showAddition = () => {
    counter.innerHTML = count++;
    if (count > 0) {
        counter.style.color = "green"
    }
    
}
const showSubtraction = () => {
    counter.innerHTML = count--;
    if (count < 0) {
        counter.style.color = "red"
    }
}


add.addEventListener("click", showAddition)
subtract.addEventListener("click", showSubtraction)

