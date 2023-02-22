const toggles = document.querySelectorAll('.faq-toggle')

let fecha = new Date().getFullYear()
date.innerHTML = fecha

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})