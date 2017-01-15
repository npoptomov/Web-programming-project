var a=document.querySelector(".regemail");

a.addEventListener("blur",validateEmail);

var checkemail;
var checkpasswords;
var checkpassword;

function validateEmail(){
	var x=this.value;
	var atpos=x.indexOf('@');
	var dotpos=x.lastIndexOf('.');
	 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Please enter valid E-mail address!");
        checkemail=false;
	 } else checkemail=true;;
}


var pw=document.getElementsByClassName("regpw")[0];
var cpw=document.getElementsByClassName("regpwconf")[0];
var err=document.getElementsByClassName("errorMessage")[0];

cpw.addEventListener("input",confirmPasswords);

function confirmPasswords(){
	if(pw.value!=cpw.value){
	err.className=""; checkpasswords=false;}
		else {
			err.className="errorMessage";
			checkpasswords=true;
		}
	
	
}

pw.addEventListener("input",validatePassword);
var vPw=document.getElementsByClassName("validatePassword")[0];
function validatePassword(){
	if (pw.value.length<6) {
		vPw.className=""; checkpassword=false;
	} else {vPw.className="validatePassword";
	checkpassword=true;
	}
}


var firstName=document.querySelector(".regname");
var lastName=document.querySelector(".regsurname");
var userAgreement=document.querySelector(".confirmagreement");
var regSubmit=document.querySelector(".regsubmit");
regSubmit.addEventListener("click",validateRegistration);
function validateRegistration(){
	if(checkemail&checkpassword&checkpasswords&firstName.value!=""&lastName.value!=""&userAgreement.checked) alert("Sucessfully registered!"); else
	alert("Please fill all fields correctly!")
	
}


