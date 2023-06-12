const view = document.querySelector(".view")
const view2 = document.querySelector(".view2")

function handleClick () {
    view.classList.add("hide")
    view2.classList.remove("hide")

    function btnReset() {}
}

// Events

const btnReset = document.querySelector("#btnReset")

btnReset.addEventListener('click', function() {
    view.classList.remove("hide")
    view2.classList.add("hide")
})