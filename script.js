document.addEventListener("DOMContentLoaded", function() {
  const envelope = document.getElementById("envelope");
  const flap = document.querySelector(".envelope-flap");

  setTimeout(() => {
    flap.style.top = "-80px";
  }, 1000);

  setTimeout(() => {
    envelope.classList.add("hidden");
  }, 2000);
});
