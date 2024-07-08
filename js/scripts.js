const summaries = document.querySelectorAll(".event-click");

summaries.forEach((summary) => {
  summary.addEventListener("click", toggleSummaryIcon);
});

function toggleSummaryIcon(event) {
  const summaryIcon = event.currentTarget.querySelector(".summary-icon");

  if (summaryIcon.classList === "summary-icon-minus") {
    summaryIcon.classList.remove("summary-icon-minus");
    summaryIcon.classList.add("summary-icon");
  } else {
    summaryIcon.classList.remove("summary-icon");
    summaryIcon.classList.add("summary-icon-minus");
  }
}
