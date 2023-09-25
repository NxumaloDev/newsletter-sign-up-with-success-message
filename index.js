let subscribeBtn = document.querySelector('.subscribe-btn')
let dismissBtn = document.querySelector('.dismiss-btn')
let signUpForm = document.querySelector('.sign-up-form')
let input = document.querySelector('.input-email')
let successMessage = document.querySelector('.success-message')

subscribeBtn.addEventListener('click', ()=> {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (input.value.match(mailformat)){
        document.querySelector('.email').textContent = input.value
        signUpForm.style.display = 'none'
        successMessage.style.display = 'block'
    }
    else {
        input.style.background = 'hsla(4, 100%, 67%, .2)'
        input.style.color = 'hsl(4, 100%, 67%)'
        input.style.border = '1px solid hsl(4, 100%, 67%)'
        document.querySelector('.flex p').style.display = 'block'
    }
})

dismissBtn.addEventListener('click', ()=> {
    signUpForm.style.display = 'block'
    successMessage.style.display = 'none'
    
    input.style.border = '1px solid hsl(231, 7%, 60%)'
    input.style.color = 'hsl(234, 29%, 20%)'
    input.style.background = 'none'
    document.querySelector('.flex p').style.display = 'none'
})