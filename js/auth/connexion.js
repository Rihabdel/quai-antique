
const mailInput = document.getElementById("InputEmail");
const passwordInput = document.getElementById("InputPassword");
const btnConnexion = document.getElementById("btnConnexion");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        window.location.replace("/");
        //il faudra récupérer le token le vrai token depuis l'API
        const token = "lopdfkopsdkkz^dl^l^pzpz";
        setToken(token);
        setCookie(roleCookieName,"admin",7);
        window.location.replace("/");
     
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
