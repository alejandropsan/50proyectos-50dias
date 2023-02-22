const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const date = document.getElementById("date")

let fecha = new Date().getFullYear()
date.innerHTML = fecha

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}