
const users = [
    {login:'cafe',pass:'cafe'},{login:'admin',pass:'admin'}
]

let botao = document.getElementById('login-button');

botao.addEventListener('click', function logar() {

    let getUser = document.getElementById('user').value;
    let getPass = document.getElementById('password').value;
    let validateLogin = false;

    for(let i in users) {

        if(getUser == users[i].login && getPass == users[i].pass) {
            validateLogin = true;
            break;
        }else{
            validateLogin = false;
        }
    }
    if(validateLogin == true){
        location.href = 'home.html'
    }else{
        alert('Usuario ou senha invalida');
    }


})