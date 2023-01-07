let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0
console.log(saveEl)

function increment() {
    // count = count + 1
    count += 1
    countEl.innerText = count
}

function save() {
    countStr = count + " - "
    saveEl.innerContent += countStr
}
