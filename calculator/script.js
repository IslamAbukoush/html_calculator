let display = document.querySelector("#display")
let buttons = document.querySelectorAll(".button")
let add_input = a => display.textContent += a
let reset_input = _ => display.textContent = ''
let set_input = s => display.textContent = s
let evaluate = _ => set_input(eval(display.textContent))

buttons.forEach(button => {
    button.addEventListener("click", e => {
        if(display.textContent === "Invalid input") {
            reset_input()
        }
        if(button.textContent === "DEL") {
            reset_input()
        } else if(button.textContent === "=") {
            try {
                evaluate()
            } catch {
                set_input("Invalid input")
            }
        } else {
            add_input(button.textContent)
        }
    })
})

document.addEventListener('keydown', e => {
    if(display.textContent === "Invalid input") {
        reset_input()
    }
    if (e.key === 'Backspace' || e.key == 'Delete') {
        reset_input()
    } else if(e.key === 'Enter') {
        evaluate()
    } else if(e.key.startsWith('Numpad')) {
        add_input(e.key[-1])
    } else if((e.key >= 0 && e.key <= 9) || e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        add_input(e.key)
    } else if(e.key === '=') {
        evaluate()
    }
});