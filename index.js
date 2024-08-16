window.addEventListener("load", onLoad);
function onLoad() {
  // auto update copyright date
  const copyrightEl = document.getElementById("copyright");
  if (copyrightEl) {
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright &copy; ${currentYear} All rights reserved. Built and maintained by Tasha Fernandez-Ross`;
    copyrightEl.innerHTML = copyrightText;
  }
}

// Email Script
window.onload = function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      emailjs.init(data.emailjsSecret);
      const serviceID = data.serviceID;
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          emailjs.sendForm(serviceID, "contact_form", this).then(
            (response) => {
              alert("Email sent.");
              console.log("SUCCESS!");
              this.reset();
            },
            (error) => {
              console.log("FAILED...", error);
            }
          );
        });
    });
};
