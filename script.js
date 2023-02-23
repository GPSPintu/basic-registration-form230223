const form =
 document.getElementById('registration-form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const username=
    document.getElementById('username').Value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirm-password').value;


    if(password!==confirmPassword)
    {
        alert("Passwords don't match");
        return;
    }
    //write here code for send data to server for processing//
});