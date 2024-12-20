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
  }

  // select-boxes
  const selectBoxes = document.querySelectorAll(".select-boxes");

  if (selectBoxes) {
    selectBoxes.forEach(item => {
      const selectBox = item.querySelectorAll(".select-box");
      selectBox.forEach(el => {
        el.addEventListener("click", () => {
          selectBox.forEach(el => el.classList.remove("active"));
          el.classList.toggle("active");
        })
      })
    })
  }

  const priceBox = document.querySelectorAll(".price-box");
  if (priceBox) {
    priceBox.forEach(item => {
      item.addEventListener('click', () => {
        priceBox.forEach(el => el.classList.remove("active"))
        item.classList.toggle("active");
      })
    })
  }

  const openModalBtns = document.querySelectorAll('.open-modal'); // Modalni ochish tugmalari
  const modals = document.querySelectorAll('.modal'); // Barcha modallar

  if (openModalBtns && modals) {
    function closeAllModals() {
      modals.forEach(modal => {
        modal.classList.remove("show");
        modal.style.transform = `translateY(100%)`; // Modalni pastga yashirish
        enableScroll(); // Sahifa aylanishini qaytarish
      });
    }

    // Sahifa yangilanishini to‘xtatish
    function disableScroll() {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Sahifani tortish va yangilanishini o‘chirish
    }

    // Sahifani aylanishini qaytarish
    function enableScroll() {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }

    // Modalni ochish
    openModalBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault(); // Sahifani yangilanishini to‘xtatish
        e.stopPropagation();

        const targetModalId = btn.getAttribute("data-target-modal");
        const targetModal = document.getElementById(targetModalId);

        closeAllModals(); // Eski modallarni yopish
        if (targetModal) {
          targetModal.classList.add("show");
          targetModal.style.transform = `translateY(0)`; // Modalni ochish
          disableScroll(); // Sahifani aylanishini to‘xtatish
        }
      });
    });

    modals.forEach(modal => {
      const closeModalBtns = modal.querySelectorAll(".close-modal");
      let startY = 0;
      let currentY = 0;
      let isDragging = false;

      // Modalni yopish tugmasi
      if (closeModalBtns) {
        closeModalBtns.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            modal.classList.remove("show");
            modal.style.transform = `translateY(100%)`; // Modalni pastga yashirish
            enableScroll(); // Sahifani aylanishini qaytarish
          });
        });
      }

      // Modalni tashqi hududini bosganda yopish
      modal.addEventListener("click", (e) => {
        if (e.target === modal) { // Faqat modalning bo‘sh joyini bosilsa
          modal.classList.remove("show");
          modal.style.transform = `translateY(100%)`; // Modalni pastga yashirish
          enableScroll(); // Sahifani aylanishini qaytarish
        }
      });

      // Modal ichidagi elementlar sudrashda ham yopilishi
      modal.addEventListener("touchstart", (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
      });

      modal.addEventListener("touchmove", (e) => {
        if (!isDragging) return;

        currentY = e.touches[0].clientY;
        const translateY = Math.max(0, currentY - startY);

        // Modal yoki ichidagi elementlar harakat qilganda
        modal.style.transform = `translateY(${translateY}px)`;
        e.preventDefault(); // Sahifa yangilanishini oldini olish
      });

      modal.addEventListener("touchend", (e) => {
        if (!isDragging) return;

        // Sudrash masofasi 30px dan kattami?
        if (currentY - startY > 30) {
          modal.classList.remove("show");
          modal.style.transform = `translateY(100%)`; // Modalni pastga yashirish
          enableScroll(); // Sahifani aylanishini qaytarish
        } else {
          modal.style.transform = `translateY(0)`; // Modal joyiga qaytariladi
        }

        isDragging = false;
        startY = 0;
        currentY = 0;
      });
    });
  }



  // // modal
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
  //     console.log("s");
  //   });
  //   modals.forEach(modal => {
  //     modal.addEventListener("click", (e) => {
  //       if (e.target.classList.contains("modal")) {
  //         closeAllModals();
  //         console.log(e.target);

  //       }
  //     });
  //   })
  // }

  // Modal funksionallik
  // const openModalBtns = document.querySelectorAll('.open-modal'); // Modalni ochuvchi tugmalar
  // const modals = document.querySelectorAll('.modal'); // Barcha modallar

  // if (openModalBtns && modals) {
  //   // Barcha modallarni yopish funksiyasi
  //   function closeAllModals() {
  //     modals.forEach(modal => {
  //       modal.classList.remove("show");
  //       modal.style.transform = `translateY(0)`; // Modalni qaytarish
  //     });
  //   }

  //   // Modalni ochish
  //   openModalBtns.forEach(btn => {
  //     btn.addEventListener("click", (e) => {
  //       e.stopPropagation();

  //       const targetModalId = btn.getAttribute("data-target-modal");
  //       const targetModal = document.getElementById(targetModalId);

  //       closeAllModals(); // Eski modallarni yopish
  //       if (targetModal) {
  //         targetModal.classList.add("show");
  //       }
  //     });
  //   });

  //   modals.forEach(modal => {
  //     const closeModalBtns = modal.querySelectorAll(".close-modal");
  //     let startY = 0;
  //     let currentY = 0;
  //     let isDragging = false;

  //     // Modalni yopish tugmasi
  //     if (closeModalBtns) {
  //       closeModalBtns.forEach(btn => {
  //         btn.addEventListener("click", (e) => {
  //           e.stopPropagation();
  //           modal.classList.remove("show");
  //         });
  //       });
  //     }

  //     // Modal tashqi hududni bosganda yopish
  //     modal.addEventListener("click", (e) => {
  //       if (e.target === modal) { // Faqat modalning bo‘sh joyi bosilsa
  //         modal.classList.remove("show");
  //       }
  //     });

  //     // Modalni sudrash uchun hodisalar
  //     modal.addEventListener("touchstart", (e) => {
  //       startY = e.touches[0].clientY;
  //       isDragging = true;
  //     });

  //     modal.addEventListener("touchmove", (e) => {
  //       if (!isDragging) return;

  //       currentY = e.touches[0].clientY;
  //       const translateY = Math.max(0, currentY - startY);
  //       modal.style.transform = `translateY(${translateY}px)`;
  //     });

  //     modal.addEventListener("touchend", () => {
  //       if (!isDragging) return;

  //       if (currentY - startY > 30) { // Agar 100px dan pastga sudralsa, modal yopiladi
  //         modal.classList.remove("show");
  //       } else {
  //         modal.style.transform = `translateY(0)`; // Modal joyiga qaytadi
  //       }

  //       isDragging = false;
  //       startY = 0;
  //       currentY = 0;
  //     });
  //   });

  //   // Tashqi joyni bosganda barcha modallarni yopish
  //   // window.addEventListener("click", () => {
  //   //   closeAllModals();
  //   // });
  // }
  // const openModalBtns = document.querySelectorAll('.open-modal'); // Modalni ochish tugmalari
  // const modals = document.querySelectorAll('.modal'); // Barcha modallar

  // if (openModalBtns && modals) {
  //   function closeAllModals() {
  //     modals.forEach(modal => {
  //       modal.classList.remove("show");
  //       modal.style.transform = `translateY(100%)`; // Modalni pastga yashirish
  //       enableScroll(); // Sahifa aylanishini qaytarish
  //     });
  //   }

  //   // Sahifa yangilanishini to‘xtatish
  //   function disableScroll() {
  //     document.body.style.overflow = "hidden";
  //     document.body.style.touchAction = "none"; // Sahifani tortish va yangilanishini o‘chirish
  //   }

  //   // Sahifani aylanishini qaytarish
  //   function enableScroll() {
  //     document.body.style.overflow = "auto";
  //     document.body.style.touchAction = "auto";
  //   }

  //   // Modalni ochish
  //   openModalBtns.forEach(btn => {
  //     btn.addEventListener("click", (e) => {
  //       e.preventDefault(); // Sahifani yangilanishini to‘xtatish
  //       e.stopPropagation();

  //       const targetModalId = btn.getAttribute("data-target-modal");
  //       const targetModal = document.getElementById(targetModalId);

  //       closeAllModals(); // Eski modallarni yopish
  //       if (targetModal) {
  //         targetModal.classList.add("show");
  //         targetModal.style.transform = `translateY(0)`; // Modalni ochish
  //         disableScroll(); // Sahifani aylanishini to‘xtatish
  //       }
  //     });
  //   });

  //   modals.forEach(modal => {
  //     const closeModalBtns = modal.querySelectorAll(".close-modal");
  //     let startY = 0;
  //     let currentY = 0;
  //     let isDragging = false;

  //     // Modalni yopish tugmasi
  //     if (closeModalBtns) {
  //       closeModalBtns.forEach(btn => {
  //         btn.addEventListener("click", (e) => {
  //           e.stopPropagation();
  //           modal.classList.remove("show");
  //           modal.style.transform = `translateY(100%)`; // Modalni pastga yashirish
  //           enableScroll(); // Sahifani aylanishini qaytarish
  //         });
  //       });
  //     }

  //     // Modalni tashqi hududini bosganda yopish
  //     modal.addEventListener("click", (e) => {
  //       if (e.target === modal) { // Faqat modalning bo‘sh joyini bosilsa
  //         modal.classList.remove("show");
  //         modal.style.transform = `translateY(100%)`; // Modalni pastga yashirish
  //         enableScroll(); // Sahifani aylanishini qaytarish
  //       }
  //     });

  //     // Modalni tashqi hududi uchun sudrash hodisalari
  //     modal.addEventListener("touchstart", (e) => {
  //       if (e.target !== modal) return; // Faqat modalning o‘zi uchun
  //       startY = e.touches[0].clientY;
  //       isDragging = true;
  //       e.preventDefault(); // Sahifani yangilanishini oldini olish
  //     });

  //     modal.addEventListener("touchmove", (e) => {
  //       if (!isDragging || e.target !== modal) return; // Faqat modal tashqi hududi uchun

  //       currentY = e.touches[0].clientY;
  //       const translateY = Math.max(0, currentY - startY);
  //       modal.style.transform = `translateY(${translateY}px)`;
  //       e.preventDefault(); // Sahifa yangilanishini oldini olish
  //     });

  //     modal.addEventListener("touchend", (e) => {
  //       if (!isDragging || e.target !== modal) return; // Faqat modal tashqi hududi uchun

  //       if (currentY - startY > 30) { // 30px pastga sudralganda yopiladi
  //         modal.classList.remove("show");
  //         modal.style.transform = `translateY(100%)`; // Modalni pastga yashirish
  //         enableScroll(); // Sahifani aylanishini qaytarish
  //       } else {
  //         modal.style.transform = `translateY(0)`; // Modal joyiga qaytariladi
  //       }
  //       isDragging = false;
  //       startY = 0;
  //       currentY = 0;
  //     });
  //   });
  // }
  //  modal

})

