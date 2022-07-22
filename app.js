const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
 
function validateForm(){
    //First Name Validation 
    var em=document.getElementById('email').value;
    if(em == ""){
        alert('Email');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('email').style.borderColor = "green";
    }

    var cunt=document.getElementById('country').value;
    if(cunt == ""){
        alert('Country');
        document.getElementById('country').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('country').style.borderColor = "green";
    }
}