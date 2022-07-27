const sections = document.querySelectorAll('section')
const button = document.querySelector('button')

function logText(e){
    console.log(this.classList.value)
    // e.stopPropagation() //stop bubbling
    // console.log(this)
}

sections.forEach(section => section.addEventListener('click', logText, {
    capture: false,
    once: true
}))

button.addEventListener('click',()=> {
    console.log('Click!!!')
}, {
    once: true
})