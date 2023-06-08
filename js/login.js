document.getElementById("btn-submit").addEventListener('click', function(){
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    if(email === 'codelover@gmail.com' && password ==='follow'){
        window.location.href = 'bank.html';
    }
    else{
    alert('please Enter Valid user & password')
    }
})