
function validation(){
    var user = document.getElementById('user').value;
    var lastuser = document.getElementById('lastuser').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;

    const lower = 'this is an entirely lowercase string';
const upper = lower.charAt(0).toUpperCase() + lower.substring(1);
    var myform = document.getElementById('myform');
    function capitalizeWords(string) {
        return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };
    if(user == ""){
       alert("*this field can not be empty(please enter your first name in the box)*");
        return false;
    }
   
    if(user.length<3){
        alert("first Name must be more than 2 letters");
        return false;
    }
    if(lastuser == ""){
        alert("*this field can not be empty(please enter your last name in the box)*");
         return false;
     }
    if(lastuser.length<3){
        alert("last Name must be more than 2 letters");
        return false;
    }
    
   
    
    if(pass== ""){
       alert("**this field can not be empty(please write passward in the box)**");
        return false;
    }
    
    if(pass.search(/[ ]/)!=-1){
        alert("must not include a space");
     return false;
    }
     if(pass.length != 8 ){
       alert("please write a passward of 8 no long no less");
         return false;
     }
    if(pass.search(/[0-9]/)==-1){
         
         alert("must incluce at least a number");
         return false;
     }
     var first=pass.substr(0,1);
     if(!(first.match(/[A-Z]/))){
       alert("first letter should be upper case");
       return false;
     }
    if(pass.search(/[a-z]/)==-1){
         alert("must include at least 1 lowwer character");
     return false;
    }
     if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/)==-1){
        
            alert("must include 1 special character");
         return false;
        }
        if(conpass== ""){
            alert("**this field can not be empty(please write  confirm passward in the box)**");
             return false;
         }
     if(conpass != pass){
         alert("**passward is not matching");
         return false;
     
     }
    if(email == ""){
        alert("**this field can not be empty(enter your email in the box)**");
        return false;
    }   
      if(email.indexOf("@") == -1 || email.length < 6){
     alert("**Please Enter valid Email**");
       return false;
  }
     else{
         document.getElementById('emaill').innerHTML="";
     }
    if(mobile == ""){
        alert("**this field can not be empty(please enter your phone number in the box)**");
        return false;
    }
    if(isNaN(mobile)){
         alert("**Only numbers accepted**");
         return false;}
         
    if(mobile.length<11 || mobile.length>11){
       alert("please enter 11 digit mobile number");
        return false;
    }
    
    
    else{
        document.getElementById('mobill').innerHTML="";
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        alert("Please Enter valid Email");
         return false;
    }
    if(address== ""){
        alert("**this field can not be empty(please write your address in the box)**");
         return false;
     }
      else
    {
      alert("thank you for your contact");
      window.location.href = 'index.html';
      return  true;
    }
    
}























