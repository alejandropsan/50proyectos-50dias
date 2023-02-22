const panels = document.querySelectorAll(".panel")
const date = document.getElementById("date")

let fecha = new Date().getFullYear()
date.innerHTML = fecha

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}