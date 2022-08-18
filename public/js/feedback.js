function TwoAtOnce() {

    //once user clicks on submit feedback, both functions below will run

    sendemail();
    Storefeedback();
}



function sendemail(){ //send automated email

    var emailUSER = new XMLHttpRequest();

    emailUSER.open("POST", "/sendemail", true );
    emailUSER.setRequestHeader("Content-Type", "application/json");
    
    emailUSER.onload=function(){

        var token = JSON.parse(emailUSER.responseText);
        console.log(token.result);
        if (token.result == "success"){
            console.log("success");
            alert("feedback sent. check your email for automated message!")
            
        } else{
            console.log("fail");
            alert("Feedback failed to send. Try again")
        }
    }



var email = localStorage.getItem("email");
var content = document.getElementById("content").value;
var payload = {email:email, content:content}
emailUSER.send(JSON.stringify(payload));

}

function Storefeedback() {
    var addfeedback = new Object();

    addfeedback.emailaddress = localStorage.getItem("email");
    addfeedback.feedback = document.getElementById("content").value;
    addfeedback.username = localStorage.getItem("username");
    

    var request = new XMLHttpRequest();

request.open("POST", "/feedbackdb", true);

request.setRequestHeader("Content-Type", "application/json");

request.onload = function() {

    response = JSON.parse(request.responseText);
}				

request.send(JSON.stringify(addfeedback));

}