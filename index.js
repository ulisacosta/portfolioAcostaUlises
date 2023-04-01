
let previousTitle = document.title
window.addEventListener('blur', () => {
    previousTitle = document.title;
    document.title = 'Acosta Ulises 😁'
})

window.addEventListener('focus', () => {
    document.title = previousTitle;
})


