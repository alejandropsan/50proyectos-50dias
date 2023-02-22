const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const date = document.getElementById("date")

let fecha = new Date().getFullYear()
date.innerHTML = fecha

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))