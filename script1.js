const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(field, msg){
    const formControl = field.parentElement
    formControl.className = 'form-control error'
    formControl.querySelector('small').innerText = msg
}

function showSuccess(username){
    const formControl = username.parentElement
    formControl.className = 'form-control success'
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', function(e){
    e.preventDefault()
    if(username.value === ''){
        showError(username, 'username is required')
    } else {
        showSuccess(username)
    }

    if(email.value === ''){
        showError(email, 'E-mail is Required')
    }else{
        if(validateEmail(email.value))
            showSuccess(email)
        else {
            showError(email, 'Email is not VAlid')
        }
    }

    if(password.value === ''){
        showError(password, 'Password is Required')
    }else{
        showSuccess(password)
    }

    if(password2.value === ''){
        showError(password2, 'Confirm Password?')
    } else {
        if (password.value !== password2.value ){
            showError(password2, 'Password not matching')
        } else {
            showSuccess(password2)
        }
    }
})