const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("enviar btn");
  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        //agregat modal
      } else {
        alert("Problema con response");
      }
    })
    .catch((error) => {
      alert("Error");
    });
});
