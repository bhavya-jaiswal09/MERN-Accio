const button = document.getElementById("btn")
const input = document.getElementById("ip")
const list = document.getElementById("list")
let arr = []

button.addEventListener("click", () => {
    const item = document.createElement("li")
    item.innerText = input.value
    list.append(item)
    arr.push(input.value)
    localStorage.setItem("value", JSON.stringify(arr))
    input.value = ""
    input.focus()

})

window.addEventListener("load", () => {
    let storedValue = localStorage.getItem("value")

    if(storedValue)
    {
        let newArr = JSON.parse(storedValue)
        for(let x of newArr)
        {
            const item = document.createElement("li")
            item.innerText = x
            list.append(item)
        }

        arr = newArr
    }
})

window.addEventListener('keydown', (e) => {
    if(e.key == "Enter")
    {
        button.click()
    }
})