const buttons = document.querySelectorAll(".rating");
const submitButton = document.querySelector(".submit");
let buttonText = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    button.style.backgroundColor = "var(--White)";
    button.style.color = "var(--Grey-950)";
    buttonText = button.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (buttonText !== "") {
    document.querySelector(".card").style.display = "none";
    document.querySelector(".thank-you-section").style.display = "flex";
    document.querySelector(".selected-rating").textContent =
      `You selected ${buttonText} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
