const submitBtn = document.getElementById("submit-btn");

const validate = (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const emailAddress = document.getElementById("email-address");
  const comments = document.getElementById("comments");
  if (name.value === "") {
    alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (emailAddress.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }

  if (!emailIsValid(emailAddress.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
  }

  if (comments.value === "") {
    alert("Please enter your question or comment");
    comments.focus();
    return false;
  }
  return true; // Can submit the form data to the server
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

submitBtn.addEventListener("click", validate);