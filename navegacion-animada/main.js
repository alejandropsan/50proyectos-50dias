const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

let fecha = new Date().getFullYear()
date.innerHTML = fecha

toggle.addEventListener('click', () => nav.classList.toggle('active'))