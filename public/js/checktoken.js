if (typeof jQuery == "undefined") {
  // jQuery IS NOT loaded, do stuff here.
  console.log("jquery not working");
}

window.onload = (event) => {
  console.log("check token is running");
  var token = localStorage.getItem("token");
  var username = localStorage.getItem("username");
  var email = localStorage.getItem("email");


  console.log(token);

  let timer = setInterval(makeSureNavbarIsLoaded, 100);

  function makeSureNavbarIsLoaded() {
    
    let navbar = document.getElementById("topnav-1");
    let navbar2 = document.getElementById("topnav-2");

    if (navbar || navbar2) {
      clearInterval(timer);
      if (token != null) {
        try { //if token is present, these commands will run
          $("#loginmenu").hide(); 
          $("#registermenu").hide();
          $("#logoutmenu").show();
          $("#profiledetails").show();
          $("#indexBeforeLogin").hide();
          $("#indexAfterLogin").show();
          $("#indexAfterLogin").append(`<h1>Welcome ${username}!</h1>`);
          $("#indexAfterLogin").show();
          $("#newComment").show();
          $("#feedbackstuff").show();
   

        } catch (error) {
          console.log(error);
        }return; //if token is not present, these commands will run
      }else if(token == null) {
        $("#newComment").hide();
        $("#feedbackstuff").hide();
   

      }
  }
};}

//set timeout for logout
function Logout() { //upon clicking logout, items in localstorage will be deleted
  $("#loginmenu").show();
  $("#registermenu").show();
  $("#logoutmenu").hide();
  $("#profiledetails").hide();
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  localStorage.removeItem("email");
}
