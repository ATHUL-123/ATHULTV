
function validatemail() {
    var mail = document.getElementById("email").value;
    var error = document.getElementById("error2");
    var mailstatus = /^[a-z0-9]+@gmail\.com$/i; 

    if (mail.length === 0) {
        error.innerHTML = "Please enter a valid email address";
        error.style.color = "red";
        return false;
    } else if (mail.length < 12) { 
        error.innerHTML = "Email address is too short";
        error.style.color = "red";
        return false;
    } else if (!mail.match(mailstatus)) {
        error.innerHTML = "Email should be in the format example@gmail.com";
        error.style.color = "red";
        return false;
    } else {
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }
}

function validatename(){
    var name=document.getElementById("name").value;
    var error=document.getElementById("error1");
    var namestatus = /^[a-zA-Z]+$/;

    
    if(name.length===0){
        error.innerHTML="Please enter valid name"
        error.style.color="red";
        return false;
    }else if(name.length<4){
        error.innerHTML="Please enter valid name"
        error.style.color="red";
        return false;
    }else if(!name.match(namestatus)){
        error.innerHTML="Please enter valid name"
        error.style.color="red";
        return false;
    } else
    {
     error.innerHTML="Valid";
     error.style.color="green";
     return true;
 
    }

    
}


function validatesubject(){
    var subject= document.getElementById("subject").value
    var error=document.getElementById("error3");
    var subjectstatus=/^[a-zA-Z]+$/;

    if(subject.length===0){
        error.innerHTML="please enter the subject"
        error.style.color="red"
        return false;
    }else if(subject.length<4){
        error.innerHTML="subject should contain minimum 4 letters"
        error.style.color="red"
        return false;
    }else if(!subject.match(subjectstatus)){
        error.innerHTML="cannot use special characters"
        error.style.color="red"
        return false;
    }else{
        error.innerHTML=""
        return true;
    }
}

function validatemessage(){
    var message=document.getElementById("message").value
    var error=document.getElementById("error4");
    var messagestatus=/^[a-zA-Z]+$/;

    if(message.length===0){
        error.innerHTML="please enter the message"
        error.style.color="red"
        return false;
    }else if(message.length<10){
        error.innerHTML="the message should contain minimum 10 letters"
        error.style.color="red"
        return false;
    }else if(!message.match(messagestatus)){


        error.innerHTML="cannot use special characters"
        error.style.color="red"
        return false;
    }else{
        error.innerHTML=""
        return true;
    }
}

function validatesend(){

    if(validatename()&&validatemail()&&validatesubject()&&validatemessage()){
        var sendbtn=document.getElementById("send")

        sendbtn.innerHTML="Thank you for contacting"
        sendbtn.style.color="green"

    }else{
        sendbtn.innerHTML="fill the form properly"
        sendbtn.style.color="red"
    }
}