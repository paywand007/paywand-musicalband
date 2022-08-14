const comments = document.getElementById('exampleFormControlTextarea1')
const btns = document.querySelectorAll('.tip-btn')
const btnCommentAdd = document.getElementById('addComment')
const ul = document.getElementById('list-group')
const cusInput = document.getElementById('custom-pay')
const messege = document.getElementById('thanksHeader')
const denot = document.querySelector('.denotedBtn')
btnCommentAdd.addEventListener('click', () => {
    console.log('ji')
    if (comments.value != '') {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(comments.value))
        ul.appendChild(li)
        li.classList = 'list-group-item'
    } else {
        console.log('please fill it ')
    }
})

denot.addEventListener('click', () => {
    console.log('test')
    messege.textContent = ` THANKS YOU DENOTED  ${cusInput.value} $`
})
let tipPercent = 0

for (let btn of btns) {
    btn.addEventListener('click', function() {
        tipPercent = parseInt(btn.textContent)
        console.log(tipPercent)
        messege.textContent = ` THANKS YOU DENOTED   ${tipPercent}$`
    })
}