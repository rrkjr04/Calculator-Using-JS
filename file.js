let screen = document.querySelector("input");
let buttons = document.querySelectorAll(".button");
let str = "";
Array.from(buttons).forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str);
            screen.value = str;

        }
        else if (e.target.innerHTML === "AC") {
            str = "";
            screen.value = str;

        }


        else {
            str += e.target.innerHTML;
            screen.value = str;

        }


    })
})

