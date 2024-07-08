const summaries = document.querySelectorAll(".event-click");

summaries.forEach((summary) => {
  summary.addEventListener("click", toggleSummaryIcon);
});

function toggleSummaryIcon(event) {
  const summaryIcon = event.currentTarget.querySelector(".summary-icon");

  if (
    summaryIcon.style.backgroundImage ===
    'url("../assets/images/icon-minus.svg")'
  ) {
    summaryIcon.style.backgroundImage = 'url("../assets/images/icon-plus.svg")';
  } else {
    summaryIcon.style.backgroundImage =
      'url("../assets/images/icon-minus.svg")';
  }
}
