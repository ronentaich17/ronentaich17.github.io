document.querySelectorAll(".experience-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.closest(".experience-header").nextElementSibling;
    description.style.display =
      description.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".project-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.closest(".project-header").nextElementSibling;
    description.style.display =
      description.style.display === "block" ? "none" : "block";
  });
});

const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
