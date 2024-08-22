const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function (e) {
  let email = document.getElementById("email");
  console.log(email.checkValidity());
  let emailError = document.getElementById("email-error");
  if (email.checkValidity()) {
    emailError.classList.add("d-none");
  } else {
    emailError.classList.remove("d-none");
  }
});

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let loading = document.getElementById("loading");
  loading.classList.remove("d-none");
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
      loading.classList.add("d-none");
      if (response.ok) {
        form.reset();
        //agregat modal

        let modal = new bootstrap.Modal(document.getElementById("Form-Modal"));
        modal.show();
      } else {
        alert("Problema con response");
      }
    })
    .catch((error) => {
      alert("Error");
    });
});
