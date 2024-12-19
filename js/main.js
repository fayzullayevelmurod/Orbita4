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

  const openModalBtns = document.querySelectorAll('.open-modal');
  const modals = document.querySelectorAll('.modal');

  if (openModalBtns && modals) {
    function closeAllModals() {
      modals.forEach(modal => modal.classList.remove("show"));
    }

    openModalBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const targetModalId = btn.getAttribute("data-target-modal");
        const targetModal = document.getElementById(targetModalId);

        closeAllModals();
        if (targetModal) {
          targetModal.classList.add("show");
        }
      });
    });

    modals.forEach(modal => {
      const closeModalBtn = modal.querySelector(".close-modal");

      if (closeModalBtn) {
        closeModalBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          modal.classList.remove("show");
        });
      }

      modal.addEventListener("click", (e) => e.stopPropagation());
    });

    window.addEventListener("click", () => {
      closeAllModals();
    });
  }
})

