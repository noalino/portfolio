function openMailApplication() {
  window.location.href = "mailto:me@benoitgelineau.com";
}

const contactMeBtn = document.getElementById("contact-me");

contactMeBtn.addEventListener("click", () => {
  openMailApplication();
});
