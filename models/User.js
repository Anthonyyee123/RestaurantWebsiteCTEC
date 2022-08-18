"use strict";

class User {
  constructor(
    id,
    username,
    email,
    createdOn,
    editedOn,
    password,
    firstName,
    lastName,
    gender,
    homeAddress,
    contactNumber,
    postalCode,
    pic,
    isVerified,
    verificationCode,
    
  ) {
    this.id = id;

    this.username = username;

    this.email = email;

    this.createdOn = createdOn;

    this.editedOn = editedOn;

    this.password = password;

    this.firstName = firstName;

    this.lastName = lastName;

    this.gender = gender;

    this.homeAddress = homeAddress;

    this.contactNumber = contactNumber;

    this.postalCode = postalCode;

    this.pic = pic;

    this.isVerified = isVerified;

    this.verificationCode = verificationCode;

    
  }

  getId() {
    return this.id;
  }

  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }

  getCreatedOn() {
    return this.createdOn;
  }

  getEditedOn() {
    return this.editedOn;
  }

  getPassword() {
    return this.password;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getGender() {
    return this.gender;
  }

  getHomeAddress() {
    return this.homeAddress;
  }

  getContactNumber() {
    return this.contactNumber;
  }

  getPostalCode() {
    return this.postalCode;
  }

  getPic() {
    return this.pic;
  }

  getIsVerified() {
    return this.isVerified;
  }

  getVerificationCode() {
    return this.verificationCode;
  }



  setId() {
    this.id;
  }

  setUsername(username) {
    this.username = username; //this. refers to old value, set assigns new values
  }

  setEmail(email) {
    this.email = email; //assign new values in
  }

  setCreatedOn(createdOn) {
    this.createdOn = createdOn;
  }

  setEditedOn(editedOn) {
    this.editedOn = editedOn;
  }

  setPassword(password) {
    this.password = password; //this. refers to old value, set assigns new values
  }

  setFirstName(firstName) {
    this.firstName = firstName; //this. refers to old value, set assigns new values
  }

  setLastName(lastName) {
    this.lastName = lastName; //this. refers to old value, set assigns new values
  }

  setGender(gender) {
    this.gender = gender; //this. refers to old value, set assigns new values
  }

  setHomeAddress(homeAddress) {
    this.homeAddress = homeAddress; //this. refers to old value, set assigns new values
  }

  setContactNumber(contactNumber) {
    this.contactNumber = contactNumber; //this. refers to old value, set assigns new values
  }

  setPostalCode(postalCode) {
    this.postalCode = postalCode; //this. refers to old value, set assigns new values
  }

  
  setPic(pic) {
    this.pic = pic;
  }

  setIsVerified(isVerified) {
    this.isVerified = isVerified;
  }

  setIsVerificationCode(verificationCode) {
    this.verificationCode = verificationCode;
  }
}

module.exports = User;
