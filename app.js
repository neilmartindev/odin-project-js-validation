const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
 
function validateForm(){
    //Basic Validation 
    var email=document.getElementById('email').value;
    if(email == ""){
        alert('Email');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('email').style.borderColor = "green";
    }

    var country=document.getElementById('country').value;
    if(country == ""){
        alert('Country');
        document.getElementById('country').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('country').style.borderColor = "green";
    }

    var zip=document.getElementById('zip').value;
    if(zip == ""){
        alert('Zip');
        document.getElementById('zip').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('zip').style.borderColor = "green";
    }

    var password1=document.getElementById('password1').value;
    if(password1 == ""){
        alert('Invalid password 1 field');
        document.getElementById('password1').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('password1').style.borderColor = "green";
    }

    var password2=document.getElementById('password2').value;
    if(password2 == ""){
        alert('Invalid password 2 field');
        document.getElementById('password2').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('password2').style.borderColor = "green";
    }
}