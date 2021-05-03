const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input){    
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function checkRequired([username, email, password, password2]){
//     if(username.value !== ''){
//         showSuccess(username)
//     }else {
//         showError(username, 'UserName is Required')
//     }
//     if(email.value !== ''){
//         if(validateEmail(email)){
//             showSuccess(email)
//         }else {
//             showError(email, 'E-mail is not Valid')
//         }
//     }else{
//         showError(email, 'Email is Required')
//     }
// }

function getItem(item){
    const id = item.id
    // console.log(id)
    return(id.charAt(0).toUpperCase() + id.substring(1))
}

function checkRequired(inputArr){
    
    inputArr.forEach(item => {
        console.log(item.id)
        if(item.value === ''){
            showError(item, `${getItem(item)} is Required`)
        }else if (item.id === 'username' && item.value.length < 6) {
            showError(item, `${getItem(item)} must be more than 6 Chars`)
        }
        else if(item.id === 'email' && !validateEmail(item.value)){
            showError(item, 'E-mail is not Valid!')
        }
        else if (item.id === 'password' || item.id ==='password2'){
            if(item.value.length < 5){
                showError(item, `${getItem(item)} must be At-least 5 Chars`)
            }
            if(item.id === 'password'){
                pswd1 = item.value 
            } 
            if(item.id === 'password2'){
                pswd2 = item.value
            }

            if(pswd1 !== pswd2){
                showError(item, `${getItem(item)} must be same`)
            }
        }
        else {
            showSuccess(item)
        }
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    checkRequired([username, email, password, password2])
})