function show_model(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.login-form').classList.add('showloginform');
}

function close_model(){
    document.querySelector('.overlay').classList.remover('showoverlay');
    document.querySelector('.login-form').classList.remover('showloginform');
}

 var login = document.querySelector('.login-btn');
 login.addEventListener('click', show_model);

 var close = document.querySelector('.btn');
 close.addEventListener('click', close_model);
