const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", (event) => {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownContent.contains(event.target)
  ) {
    dropdownContent.style.display = "none";
  }
});

// carousel horizontal yang ngebuat cape dik

// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
  let handle;
  if (e.target.matches(".handle")) {
  handle = e.target;
  } else {
  handle = e.target.closest(".handle");
  }
  if (handle != null) onHandleClick(handle);
  });
  
  const throttleProgressBar = throttle(() => {
  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
  }, 250);
  
  window.addEventListener("resize", throttleProgressBar);
  
  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar);
  
  function calculateProgressBar(progressBar) {
  progressBar.innerHTML = "";
  const slider = progressBar.closest(".raw").querySelector(".slider");
  const itemCount = slider.children.length;
  const itemsPerScreen = parseInt(
  getComputedStyle(slider).getPropertyValue("--items-per-screen")
  );
  let sliderIndex = parseInt(
  getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);
  
  if (sliderIndex >= progressBarItemCount) {
  slider.style.setProperty("--slider-index", progressBarItemCount - 1);
  sliderIndex = progressBarItemCount - 1;
  }
  
  for (let i = 0; i < progressBarItemCount; i++) {
  const barItem = document.createElement("div");
  barItem.classList.add("progress-item");
  if (i === sliderIndex) {
  barItem.classList.add("active");
  }
  progressBar.append(barItem);
  }
  }
  
  function onHandleClick(handle) {
  const progressBar = handle.closest(".raw").querySelector(".progress-bar");
  const slider = handle.closest(".cont").querySelector(".slider");
  const sliderIndex = parseInt(
  getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  const progressBarItemCount = progressBar.children.length;
  if (handle.classList.contains("left-handle")) {
  if (sliderIndex - 1 < 0) {
  slider.style.setProperty("--slider-index", progressBarItemCount - 1);
  progressBar.children[sliderIndex].classList.remove("active");
  progressBar.children[progressBarItemCount - 1].classList.add("active");
  } else {
  slider.style.setProperty("--slider-index", sliderIndex - 1);
  progressBar.children[sliderIndex].classList.remove("active");
  progressBar.children[sliderIndex - 1].classList.add("active");
  }
  }
  
  if (handle.classList.contains("right-handle")) {
  if (sliderIndex + 1 >= progressBarItemCount) {
  slider.style.setProperty("--slider-index", 0);
  progressBar.children[sliderIndex].classList.remove("active");
  progressBar.children[0].classList.add("active");
  } else {
  slider.style.setProperty("--slider-index", sliderIndex + 1);
  progressBar.children[sliderIndex].classList.remove("active");
  progressBar.children[sliderIndex + 1].classList.add("active");
  }
  }
  }
  
  function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
  if (waitingArgs == null) {
  shouldWait = false;
  } else {
  cb(...waitingArgs);
  waitingArgs = null;
  setTimeout(timeoutFunc, delay);
  }
  };
  
  return (...args) => {
  if (shouldWait) {
  waitingArgs = args;
  return;
  }
  
  cb(...args);
  shouldWait = true;
  setTimeout(timeoutFunc, delay);
  };
  }
  });
  
  // end carousel yang ngebuat pala puyeng

  // Ambil elemen-elemen HTML yang diperlukan
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

// Tambahkan event listener untuk menampilkan atau menyembunyikan dropdown saat tombol diklik
dropdownButton.addEventListener("click", function() {
  // Toggle tampilan dropdown
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

// Sembunyikan dropdown jika pengguna mengklik di luar dropdown
window.addEventListener("click", function(event) {
  if (!event.target.matches("#dropdownButton")) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
});
