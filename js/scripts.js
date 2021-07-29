document.addEventListener("DOMContentLoaded", function() {
  fields.firstName = document.getElementById('firstName');
  fields.lastName = document.getElementById('lastName');
  fields.email = document.getElementById('email');
  fields.houseNumber = document.getElementById('houseNumber');
  fields.events = document.getElementById('events');
  fields.question = document.getElementById('question');
 })

 function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
 }

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.question, isNotEmpty);
 
  return valid;
 }

 class User {
  constructor(firstName, lastName, email, events, question) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.events = events;
  this.question = question;
  }
 }

 function sendContact () {

if (isValid()) {
  let usr = new User (firstName.value, lastName.value, email.value, newsletter.checked);

  alert(`${usr.firstName} Thanks for contacting us!.`)
} else {
  alert("There was an error. Please check you completed information.")
}

 }
 

