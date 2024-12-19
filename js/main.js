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

  // const openModalBtns = document.querySelectorAll('.open-modal');
  // const modals = document.querySelectorAll('.modal');

  // if (openModalBtns && modals) {
  //   function closeAllModals() {
  //     modals.forEach(modal => modal.classList.remove("show"));
  //   }

  //   openModalBtns.forEach(btn => {
  //     btn.addEventListener("click", (e) => {
  //       e.stopPropagation();

  //       const targetModalId = btn.getAttribute("data-target-modal");
  //       const targetModal = document.getElementById(targetModalId);

  //       closeAllModals();
  //       if (targetModal) {
  //         targetModal.classList.add("show");
  //       }
  //     });
  //   });

  //   modals.forEach(modal => {
  //     const closeModalBtn = modal.querySelectorAll(".close-modal");

  //     if (closeModalBtn) {
  //       closeModalBtn.forEach(btn => {
  //         btn.addEventListener("click", (e) => {
  //           e.stopPropagation();
  //           modal.classList.remove("show");
  //         });
  //       })
  //     }

  //     modal.addEventListener("click", (e) => e.stopPropagation());
  //   });

  //   window.addEventListener("click", () => {
  //     closeAllModals();
  //   });
  // }

  const openModalBtns = document.querySelectorAll('.open-modal');
  const modals = document.querySelectorAll('.modal');

  if (openModalBtns && modals) {
    function closeAllModals() {
      modals.forEach(modal => modal.classList.remove("show"));
    }

    // Modalni ochish
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

    // Modalni yopish (close-modal tugmalari)
    modals.forEach(modal => {
      const closeModalBtns = modal.querySelectorAll(".close-modal");

      if (closeModalBtns) {
        closeModalBtns.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            modal.classList.remove("show");
          });
        });
      }

      // Modalni tashqi joyni bosganda yopish
      modal.addEventListener("click", (e) => e.stopPropagation());

      // Modalni sudrash orqali yopish
      let startY = 0; // Sudrash boshlang'ich koordinatasi
      let currentY = 0;
      let isDragging = false;

      const dragHandle = modal.querySelector(".modal-header"); // Sudrash maydoni

      if (dragHandle) {
        // Hodisani boshlash
        dragHandle.addEventListener("touchstart", (e) => {
          startY = e.touches[0].clientY;
          isDragging = true;
        });

        // Hodisani harakatlantirish
        dragHandle.addEventListener("touchmove", (e) => {
          if (!isDragging) return;

          currentY = e.touches[0].clientY;
          const translateY = Math.max(0, currentY - startY);
          modal.style.transform = `translateY(${translateY}px)`;
        });

        // Hodisani tugatish
        dragHandle.addEventListener("touchend", () => {
          isDragging = false;

          // Agar modal pastga yetarlicha sudralgan bo‘lsa, yopiladi
          if (currentY - startY > 100) { // 100px dan ko‘p bo‘lsa
            modal.classList.remove("show");
          } else {
            modal.style.transform = `translateY(0)`; // Modalni qayta joyiga qaytarish
          }

          // Koordinatalarni tozalash
          startY = 0;
          currentY = 0;
        });
      }
    });

    // Tashqi joyni bosganda barcha modallarni yopish
    window.addEventListener("click", () => {
      closeAllModals();
    });
  }

  // select-boxes
  const selectBoxes = document.querySelector(".");
})

