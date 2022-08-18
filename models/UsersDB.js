"use strict";

var db = require("../db-connections");

class UsersDB {
  getAllUsers(callback) {
    var sql = "SELECT * from comfieats.user";

    db.query(sql, callback);
  }

  updateUser(
    username,
    postal_code,
    contact_number,
    home_address,
    last_name,
    first_name,
    edited_on,
    email,
    pic,
    callback
  ) {
    var sql =
      "UPDATE user SET pic = ?, email = ?, edited_on = ?, first_name = ?, last_name = ?, home_address = ?, contact_number = ?, postal_code = ? WHERE username = ?";
    return db.query(
      sql,
      [
        pic,
        email,
        edited_on,
        first_name,
        last_name,
        home_address,
        contact_number,
        postal_code,
        username,
      ],
      callback
    );
  }

  getUser(username, callback) {
    var sql =
      "SELECT distinct _id, username, email, first_name, last_name, home_address, contact_number, postal_code, pic, isVerified, verification_code from comfieats.user WHERE username = ?";

    db.query(sql, [username], callback);
  }

  LogOn(username, callback) {
    var sql =
      "SELECT password, isVerified, email from comfieats.user WHERE username = ?";

    db.query(sql, [username], callback);
  }

  addUser(user, callback) {
    var sql =
      "INSERT INTO user (username, email, created_on, edited_on, password, first_name, last_name, gender, home_address, contact_number, postal_code, pic, isVerified, verification_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
      sql,
      [
        user.getUsername(),
        user.getEmail(),
        user.getCreatedOn(),
        user.getEditedOn(),
        user.getPassword(),
        user.getFirstName(),
        user.getLastName(),
        user.getGender(),
        user.getHomeAddress(),
        user.getContactNumber(),
        user.getPostalCode(),
        user.getPic(),
        user.getIsVerified(),
        user.getVerificationCode(),
      ],
      callback
    );
  }
  updateVerification(user, callback) {
    var sql = "UPDATE user SET isVerified = 1 WHERE username = ?";
    db.query(sql, [user], callback);
  }

  // SQL statement below ensures that whenever user updates their details, username for the review they made will be changed automatically as well.

  //DROP TRIGGER IF EXISTS usernamechange;

  //DELIMITER $$

  //CREATE TRIGGER usernamechange AFTER UPDATE ON user FOR EACH ROW BEGIN DECLARE useriD integer;
  //SET useriD = (SELECT _id FROM user WHERE username=NEW.username);
  //IF NEW.username != OLD.username THEN UPDATE review SET username = NEW.username WHERE user_id = useriD; END IF; END $$

  DeleteUserDetails(userID, callback) {
    //delete user by id

    var sql = "DELETE from user WHERE _id = ?";

    db.query(sql, [userID], callback);
  }

  getuserlogs(userID, callback) {
    //get userlogs of user by id

    var sql = "SELECT * FROM comfieats.userlogs WHERE user_id = ?;";

    db.query(sql, [userID], callback);
  }
}

module.exports = UsersDB;
