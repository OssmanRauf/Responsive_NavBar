const burger = document.querySelector(".burger");
const list = document.querySelector(".list");
const exit = document.querySelector(".burger-out");
burger.addEventListener("click", () => {
    console.log('clicked');
    list.classList.toggle("show-item")
    burger.classList.toggle("hide-item")
    exit.classList.toggle("show-item")

});
exit.addEventListener("click", () => {
    list.classList.toggle("show-item");
    burger.classList.toggle("hide-item");
    exit.classList.toggle("show-item");
});