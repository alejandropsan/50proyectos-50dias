const laBroma = document.getElementById('broma')
const btnBroma = document.getElementById('btnBroma')

let fecha = new Date().getFullYear()
date.innerHTML = fecha

btnBroma.addEventListener('click', generaBroma)

generaBroma()

async function generaBroma(){
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

const data = await res.json()

laBroma.innerHTML = data.joke

}

