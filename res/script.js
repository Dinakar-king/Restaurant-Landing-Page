document.querySelector(".reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your reservation has been submitted.");
  this.reset();
});
