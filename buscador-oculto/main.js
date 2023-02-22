const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const date = document.getElementById("date")

let fecha = new Date().getFullYear()
date.innerHTML = fecha

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})