const textArray = ["Full Stack Developer", "a Backend Developer", "Learning AWS"];
let textIndex = 0;
let charIndex = 0;
const typedText = document.querySelector(".typed-text");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, 2000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, 1500);
});



function downloadResume(event) {
  

  const btn = document.querySelector('.resume-btn');

  
  btn.classList.remove('clicked');
  void btn.offsetWidth;
  btn.classList.add('clicked');

  alert("Resume download successful!");


  const link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'Viraj_Sawant_Resume.pdf';
  link.click();
}




const form = document.querySelector('.contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert('Thank you! Your message has been sent.');
    form.reset();
  } else {
    alert('Oops! Something went wrong. Please try again later.');
  }
});



