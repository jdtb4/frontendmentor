const summary = document.querySelector(".summary-results");
const url = "data.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    addData(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

function addData(data) {
  let htmlContent = "";
  data.forEach((item) => {
    htmlContent += `<div class="summary-scores ${item.category}">
      <div class="summary-icon-p">
        <img class="icon" src="${item.icon}" alt="" />
        <p class="category ${item.category}-p">${item.category}</p>
      </div>
      <p>
        ${item.score}
        <span class="total"> / 100</span>
      </p>
    </div>`;
  });

  summary.innerHTML = htmlContent;
}
