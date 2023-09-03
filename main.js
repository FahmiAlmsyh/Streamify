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


// button show
const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

let isContentVisible = false;

toggleButton.addEventListener('click', () => {
if (!isContentVisible) {
content.style.display = 'block';
isContentVisible = true;
toggleButton.innerHTML = 'Less Series <i class="bx bx-chevron-up"></i>';
} else {
content.style.display = 'none';
isContentVisible = false;
toggleButton.innerHTML = 'About the Series <i class="bx bx-chevron-down"></i>';
}
});
// dropdown
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

dropdownButton.addEventListener('click', () => {
if (dropdownContent.style.display === 'block') {
dropdownContent.style.display = 'none';
} else {
dropdownContent.style.display = 'block';
}
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', (event) => {
if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
dropdownContent.style.display = 'none';
}
});