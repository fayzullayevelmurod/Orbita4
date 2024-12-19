window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // trading chart
  const stopBtn = document.querySelector(".stop-btn");
  const restartBtn = document.querySelector(".restart-btn");
  const tradingChart = document.querySelector('.chart-img');
  const tradingProgress = document.querySelector(".trading-process");

  if (stopBtn && restartBtn) {
    tradingChart.classList.add("hide");
    tradingProgress.classList.add("hide");

    stopBtn.addEventListener("click", (e) => {
      tradingChart.classList.toggle("hide");
      tradingProgress.classList.toggle("hide");
      if (e.target.textContent === "START") {
        stopBtn.textContent = "STOP";
        stopBtn.classList.add("stop");
      } else {
        stopBtn.textContent = "START";
        stopBtn.classList.remove("stop");
      }
    });

    // restartBtn.addEventListener("click", () => {
    //   tradingChart.classList.toggle("hide");
    //   tradingProgress.classList.toggle("hide");
    //   if (stopBtn.textContent === "START") {
    //     stopBtn.textContent = "STOP";
    //     stopBtn.classList.add("stop");
    //   } else {
    //     stopBtn.textContent = "START";
    //     stopBtn.classList.remove("stop");
    //   }
    // });
  }

})
