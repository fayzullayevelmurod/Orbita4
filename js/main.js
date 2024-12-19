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

  // modal
  const openModal = document.querySelector('.open-modal');
  const modal = document.querySelector(".modal");

  if (modal) {
    openModal.addEventListener("click", () => {
      modal.classList.add("show");
    });

    const closeModal = modal.querySelectorAll('.close-modal');
    closeModal.forEach(btn => btn.addEventListener('click', () => {
      modal.classList.remove('show');
    }));
  }
})

