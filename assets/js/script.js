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

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section, header");
  sections.forEach((section) => {
    const navLink = document.querySelector(
      ".nav-link[href*=" + section.id + "]"
    );
    if (
      section.offsetTop - 5 <= this.scrollY &&
      this.scrollY <= section.offsetTop + section.offsetHeight - 5
    ) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }, index * 100);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  const observerAbout = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-about");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  const about = document.querySelectorAll(".about-content");
  about.forEach((card) => observerAbout.observe(card));
  const skillCards = document.querySelectorAll(".skill-card");
  const projectCards = document.querySelectorAll(".project-card");
  skillCards.forEach((card) => observer.observe(card));
  projectCards.forEach((card) => observerAbout.observe(card));
});
