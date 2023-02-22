let login = document.getElementById('login');
let password = document.getElementById('password');
let button = document.getElementById('.mybutton');
let shwhides = document.getElementById('.shwhide');

function shwhide(){
    if (password.type == 'text'){
        password.type = 'password';
        shwhides.classList.remove('bi-eye-slash');
        shwhides.classList.add('bi-eye');
    }else{
        password.type = 'text';
        shwhides.classList.remove('bi-eye');
        shwhides.classList.add('bi-eye-slosh');
    }
}


button.addEventListener('click', () => {
    if (login.value == 'admin' && password.value == 'admin') {
        window.location = 'true.html';
    } else {
       alert('Qaytadan urining');
    }
});