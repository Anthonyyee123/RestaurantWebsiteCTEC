"use strict";

const User = require("../models/User");
const sgMail = require("@sendgrid/mail");
const UsersDB = require("../models/UsersDB");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var secret = "secretkay";


var usersDB = new UsersDB();
var user = new User();

function getAllUsers(request, respond) {
  usersDB.getAllUsers(function (error, result) {
    //if SQL query shows error, show error. otherwise result will be returned in json format
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function LogOn(request, respond) {
  var username = request.body.username;
  var password = request.body.password;

  usersDB.LogOn(username, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      const hash = result[0].password;
      var flag = bcrypt.compareSync(password, hash);  //compare inputted password with the hashed password
      if (flag) {
        var token = jwt.sign(username, secret); //assigns a token for login
        respond.json({
          result: token,
          isVerified: result[0].isVerified,
          email: result[0].email,
        });
      } else {
        respond.json({ result: false });
      }
    }
  });
}

function getUser(request, respond) {
  const authHeader = request.headers.authorization;
  const token = authHeader.split(" ")[1];
  console.log(token);
  try {
    var decoded = jwt.verify(token, secret);

    usersDB.getUser(decoded, function (error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  } catch (err) {
    respond.json({ result: "invalid token" });
  }
}



function verifyUser(request, respond) {  //used for verify function
  var verification_code = request.body.verification_code;
  const authHeader = request.headers.authorization; //for basic network integrity
  const token = authHeader.split(" ")[1];
  try {
    var decoded = jwt.verify(token, secret);
    usersDB.getUser(decoded, function (error, result) {
      if (error) {
        respond.json(error);
      } else {
        //result is an array of users matching username(decoded)
        //take first element of array and check if verification code matches
        let db_verification_code = result[0].verification_code;
        if (verification_code === db_verification_code) { //input for verification to compare with db verification
          usersDB.updateVerification(decoded, function (error, result) {
            if (error) {
              respond.json(error);
            } else {
              respond.json({ result: "verified" });
            }
          });
        } else {
          respond.json({ result: "invalid verification code" });
        }
      }
    });
  } catch (error) {
    respond.json({ result: "invalid token" });
  }
}




function addUser(request, respond) {
  var now = new Date();
  var password = request.body.password;
  password = bcrypt.hashSync(password, 10); //hashes password in database
  var user = new User(
    null,
    request.body.username,
    request.body.email,
    now.toString(),
    request.body.edited_on,
    password,
    request.body.first_name,
    request.body.last_name,
    request.body.gender,
    request.body.home_address,
    request.body.contact_number,
    request.body.postal_code,
    "images/def.jpg",  //input def image
    0, //default verification status
    2323
  );

  usersDB.addUser(user, function (error, result) {
    if (error) {
      console.log(error);
      respond.status(503).send("internal db error");
    } else {
      console.log(result);
      respond.json(result);
    }
  });
}


function DeleteUserDetails(request, respond) {
  var userID = request.params.id;
  usersDB.DeleteUserDetails(userID, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

function getuserlogs(request, respond) {
  var userID = request.params.user_id;
  usersDB.getuserlogs(userID, function (error, result) {
    //if SQL query shows error, show error. otherwise result will be returned in json format

    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}







function updateUser(request, respond) {
  var token = request.body.token;
  var now = new Date();
  var postalcode = request.body.postal_code;
  var contactnumber = request.body.contact_number;
  var homeaddress = request.body.home_address;
  var lastname = request.body.last_name;
  var firstname = request.body.first_name;
  var emailadd = request.body.email;
  var pic = request.body.pic;

  try {
    var decoded = jwt.verify(token, secret);
    usersDB.updateUser(
      decoded,
      postalcode,
      contactnumber,
      homeaddress,
      lastname,
      firstname,
      now.toString(),
      emailadd,
      pic,
      function (error, result) {
        if (error) {
          respond.json(error);
        } else {
          respond.json(result);
        }
      }
    );
  } catch (err) {
    respond.json({ result: "invalid token" });
  }
}

module.exports = {
  addUser,
  DeleteUserDetails,
  getuserlogs,
  sendmail,
  getAllUsers,
  LogOn,
  getUser,
  updateUser,
  sendVerification,
  verifyUser,
};
