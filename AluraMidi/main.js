const playSound = (audio) => {
    const element = document.querySelector(audio)

    element && element.localName === 'audio' ? element.play() : console.log('Elemento não encontrado ou seletor inválido')
}

const keyList = document.querySelectorAll('.tecla')

for(let i = 0; i < keyList.length; i++) {
    const key = keyList[i]
    const sound = key.classList[1]
    const audio = `#som_${sound}`

    key.onclick = () => playSound(audio)
    key.onkeydown = (e) => e.code === 'Space' || e.code === 'Enter' ? key.classList.add('ativa') : ''
    key.onkeyup = (e) => e.code === 'Space' || e.code === 'Enter' ? key.classList.remove('ativa') : ''
}