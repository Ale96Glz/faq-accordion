const summaries = document.querySelectorAll(".event-click");

summaries.forEach((summary) => {
  summary.addEventListener("click", toggleSummaryIcon);
});

function toggleSummaryIcon(event) {
  const summaryIcon = event.currentTarget.querySelector(".summary-icon");

  summaryIcon.classList.toggle("plus");
  summaryIcon.classList.toggle("minus");
}
