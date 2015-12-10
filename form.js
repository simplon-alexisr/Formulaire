var login = document.getElementById('login');
var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var email = document.getElementById('email');
var site = document.getElementById('site');
var motdepasse = document.getElementById('motdepasse');
var confirmationmdp = document.getElementById('confirmationmdp');

function errorLogin(){
  if(form.login1.value == 0){
    document.getElementById('login2').style.opacity = "1";
  }
  else{
    document.getElementById('login2').style.opacity = "0";
  }
}

function errorNom(){
  if(form.nom1.value == 0){
    document.getElementById('nom2').style.opacity = "1";
  }
  else {
    document.getElementById('nom2').style.opacity = "0";
  }
}

function errorPrenom(){
  if(form.prenom1.value == 0){
    document.getElementById('prenom2').style.opacity = "1";
  }
  else {
    document.getElementById('prenom2').style.opacity = "0";
  }
}

function errorEmail(){
  if (form.email1.value.indexOf("@" , 0) < 0){
    document.getElementById('email2').style.opacity = "1";
  }
  else{
    document.getElementById('email2').style.opacity = "0";
  }
}

function errorSite(){
  if(form.site1.value == 0){
    document.getElementById('site2').style.opacity = "1";
  }
  else {
    document.getElementById('site2').style.opacity = "0";
  }
}

function validationMdp(){
  if(document.getElementById('motdepasse1').checkValidity()){
    document.getElementById('motdepasse2').style.opacity = "0";
  }
  else{
    document.getElementById('motdepasse2').style.opacity = "1";
  }
}

function samePassword(){
  if (form.motdepasse1.value == form.confirmationmdp1.value){
    document.getElementById('confirmationmdp2').style.opacity = "0";
  }
  else {
    document.getElementById('confirmationmdp2').style.opacity = "1";
  }
}

function send(){
  alert('Formulaire validé.');
  return false;
}
