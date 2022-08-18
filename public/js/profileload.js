$(document).ready(function () {
  var getProfile = new XMLHttpRequest();
  getProfile.open("GET", "/getuser", true);
  getProfile.setRequestHeader("Content-Type", "application/json");
  getProfile.setRequestHeader(
    "Authorization",
    "Bearer " + localStorage.getItem("token")
  );
  let token = localStorage.getItem("token");
  var payload = { token: token };
  console.log(payload);
  getProfile.send(JSON.stringify(payload));

  // response from server w user data
  getProfile.onload = function () {
    var profile = JSON.parse(getProfile.responseText);
    //console.log(getProfile.responseText);
    postalcode = profile[0].postal_code;
    contactnumber = profile[0].contact_number;
    homeaddress = profile[0].home_address;
    lastname = profile[0].last_name;
    firstname = profile[0].first_name;
    email = profile[0].email;
    username = profile[0].username;
    isVerified = profile[0].isVerified;
    profilepic = profile[0].pic;

    console.log(isVerified);
    document.getElementById("profpic").src = profilepic;
    document.getElementById("username1").value = username;
    document.getElementById("email1").value = email;
    document.getElementById("firstname1").value = firstname;
    document.getElementById("lastname1").value = lastname;
    document.getElementById("homeaddress1").value = homeaddress;
    document.getElementById("contactnumber1").value = contactnumber;
    document.getElementById("postalcode1").value = postalcode;
    if (isVerified) {
      $("#isVerified").show();
      $("#notVerified").hide();
    } else {
      $("#isVerified").hide();
      $("#notVerified").show();
    }
  };
});

function DeactivateUser() {  //delete user
  var response = confirm("Are you sure you want to deactivate your account? This cannot be undone.");

  if (response == true) {

    var getProfile = new XMLHttpRequest();
    getProfile.open("GET", "/getuser", true);
    getProfile.setRequestHeader("Content-Type", "application/json");
    getProfile.setRequestHeader(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    let token = localStorage.getItem("token");
    var payload = { token: token };
    console.log(payload);
    getProfile.send(JSON.stringify(payload));
  
    // response from server w user data
    getProfile.onload = function () {
      var profile = JSON.parse(getProfile.responseText);


      deluser = "/deleteUser"
      userid = profile[0]._id;
      var delete_thisuser = deluser + "/" + userid;
      var deleteuser = new XMLHttpRequest();
      deleteuser.open("DELETE", delete_thisuser, true);
      deleteuser.onload = function() {
      };
      deleteuser.send();

      localStorage.removeItem("username");
      localStorage.removeItem("token");
      localStorage.removeItem("email");

      window.location.href = "index.html"
  }}}

  function encode(){ //change the prof pic

    var selectedfile = document.getElementById("myinput").files;
    if (selectedfile.length > 0){
      var imagefile = selectedfile[0];
      var filereader = new FileReader();
      filereader.onload = function(fileloadedEvent){
        pic = fileloadedEvent.target.result;
        document.getElementById('profpic').src = pic;
      }
      filereader.readAsDataURL(imagefile);
    }
  }
