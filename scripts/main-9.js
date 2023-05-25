const erro = document.querySelector(".resErr1")
const erro1 = document.querySelector(".resErr2")
const erro2 = document.querySelector(".resErr3")
//const erro3 = document.querySelector(".resErr4")
const certo = document.querySelector(".resCer")
const body = document.querySelector("body")
const botao = document.querySelector("#botao")

erro.addEventListener("click", () => {
    body.classList.add("error")
})
erro1.addEventListener("click", () => {
    body.classList.add("error")
})
erro2.addEventListener("click", () => {
    body.classList.add("error")
})
//erro3.addEventListener("click", () => {
//    body.classList.add("error")
//})
certo.addEventListener("click", () => {
    body.classList.add("right")
})