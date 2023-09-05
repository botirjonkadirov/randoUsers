const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const local = localStorage.getItem(`mode`)
if (local) {
    body.classList.add(`dark-mode`)
    darkBtn.classList.toggle(`hidden`)
    lightBtn.classList.toggle(`hidden`)
}
const changeMode = ()=>{
    darkBtn.classList.toggle(`hidden`)
    lightBtn.classList.toggle(`hidden`)
    body.classList.toggle(`dark-mode`)
}

darkBtn.addEventListener(`click`, ()=>{
    changeMode()
    localStorage.setItem(`mode`, `dark-mode`)
})

lightBtn.addEventListener(`click`, ()=>{
    changeMode()
    localStorage.setItem(`mode`, ``)
})