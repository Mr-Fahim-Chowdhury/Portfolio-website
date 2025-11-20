//------------Portfolio Gallery--------------//
const modalPortfolio = document.querySelector(".modal-portfolio");
const modalImg = document.querySelector(".modal-img");
const modalCross = document.querySelector('.modal-cross');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// adding click event listener to every portfolio-item class
portfolioItems.forEach((portfolioItem) => {
  const icon = portfolioItem.querySelector('i');
  icon.addEventListener('click', function () {
    const imgSrc = portfolioItem.querySelector('img').getAttribute('src');
    modalImg.setAttribute('src', imgSrc);
    modalPortfolio.style.display = "flex";
  })
})

// close modal when clicked outside
modalPortfolio.addEventListener('click', function (e) {
  if (!e.target.classList.contains('modal-img')) {
    modalPortfolio.style.display = "none";
  }
})
// close modal when clicked on cross
modalCross.addEventListener('click', function () {
  modalPortfolio.style.display = "none";
})

//------------Contact--------------//
const contactForm = document.getElementById("contact-form");
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const inputs = contactForm.querySelectorAll("input");
const formControlList = document.querySelectorAll('.form-control');
const contactMessage = document.querySelector('.contact-message');
const clientMessage = document.querySelector('.client-message');
let fadeInContactMessage, fadeOutContactMessage, RemoveContactMessage;

// submitting contact form
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  checkForm();
  submitMessage(formControlList);
})

// checking the contact form
function checkForm() {
  //Get Value
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if (usernameValue == "") {
    addErrorMessage(username,"Please enter your name")
  } else {
    removeErrorMessage(username);
  }

  if (emailValue == "") {
    addErrorMessage(email,"Please enter your email")
  } else if (!emailCheck(emailValue)) {
    addErrorMessage(email,"Not a valid email address")
  }
  else {
    removeErrorMessage(email);
  }

   if (subjectValue == "") {
    addErrorMessage(subject,"Please enter your subject")
  } else {
    removeErrorMessage(subject);
  }

   if (messageValue == "") {
    addErrorMessage(message,"Please enter your message")
  } else {
    removeErrorMessage(message);
  }
  
}

// displaying error message when form is not filled up
function addErrorMessage(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector('p');
  
  formControl.classList.add('error');
  errorMsg.innerText = message;
}

// removing error message when form is filled up
function removeErrorMessage(input) {
  const formControl = input.parentElement;
  
  formControl.classList.remove('error');
}
// removing of error message when clicked on the input bar 
function removeError() {
  formControlList.forEach((formControl) => {
    formControl.classList.remove("error");
  })
}
// function to checking email validity 
function emailCheck(input) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
}
// poping of confirmation message wheather the message is successfully sent or not
function submitMessage(listItems) {
  const usernameValue = username.value.trim();

  clearTimeout(fadeInContactMessage);
  clearTimeout(fadeOutContactMessage);
  clearTimeout(RemoveContactMessage);

  let count = 0;
  listItems.forEach((listItem) => {

    if (listItem.classList.length === 1 && listItem.classList.contains("form-control")) {
      count = count + 1;
    }   
  })

  if (count == listItems.length) {
      contactMessage.style.display = "grid";  
      contactMessage.classList.add('success')
      contactMessage.classList.remove('error')
      clientMessage.innerText = `Thank you ${usernameValue}, your message has been received`
    } else {
      contactMessage.style.display = "grid";  
      contactMessage.classList.remove('success')
      contactMessage.classList.add('error')
      clientMessage.innerText = `You need to give all the informations in order to sent your message`
  }
  

  fadeInContactMessage = setTimeout(() => {
  contactMessage.style.opacity = "1"; 
  }, 10); 
  fadeOutContactMessage = setTimeout(() => {
  contactMessage.style.opacity = "0"; 
  }, 5000);
  RemoveContactMessage = setTimeout(() => {
  contactMessage.style.display = "none"; 
  }, 5500);
  
}

// close button the confirmation message
function cross() {
  contactMessage.style.display = "none";  
  clearTimeout(fadeInContactMessage);
  clearTimeout(fadeOutContactMessage);
  clearTimeout(RemoveContactMessage);
}





 




