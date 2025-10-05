
//Implémenter le JS de ma page inscription.html
const inputNom=document.getElementById('NomInput');
const inputPrenom=document.getElementById('PrenomInput');
const inputEmail=document.getElementById('EmailInput');
const inputPassword=document.getElementById('PasswordInput');
const inputConfirmPassword=document.getElementById('ConfirmPasswordInput');
const btnvalidation=document.getElementById('btnSubmitInscription');

inputNom.addEventListener('keyup',validateForm);
inputPrenom.addEventListener('keyup',validateForm);
inputEmail.addEventListener('keyup',validateForm);
inputPassword.addEventListener('keyup',validateForm);
inputConfirmPassword.addEventListener('keyup',validateForm);   


//Function permettant de valider tout le formulaire 

function validateForm(){
   const isNomValid = validateRequired(inputNom);
    const isPrenomValid = validateRequired(inputPrenom);
    const isEmailValid = validateEmail(inputEmail);
    const isPasswordValid = validatePassword(inputPassword);
    const isConfirmPasswordValid = validateConfirmPassword(inputPassword, inputConfirmPassword);
    if (isNomValid && isPrenomValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            btnvalidation.disabled = false;
    } else {
        btnvalidation.disabled = true;
    }
}
function validateEmail(input){
    const emailRregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(input.value.match(emailRregex)){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;   
    }
}
function validatePassword(input){
    const passwordRregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    if(input.value.match(passwordRregex)){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;   
    }
}
function validateConfirmPassword(inputPassword, inputConfirmPassword){
    if(inputConfirmPassword.value === inputPassword.value){
        inputConfirmPassword.classList.remove("is-invalid");
        inputConfirmPassword.classList.add("is-valid");
        return true;
    }else{
        inputConfirmPassword.classList.remove("is-valid");
        inputConfirmPassword.classList.add("is-invalid");
        return false;   
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;    

    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;

    }
}
