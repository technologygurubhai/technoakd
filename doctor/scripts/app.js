// <<<<<< Back to Top Button >>>>>>
const rocket = document.querySelector("#rocket");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    rocket.classList.remove("hidden");
  } else {
    rocket.classList.add("hidden");
  }
};

// When the user clicks on the button, scroll to the top of the document
rocket.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// <<<<<< Slow Scroll >>>>>>

// Get all anchor links on the page
const anchors = document.querySelectorAll('a[href^="#"]');

// Add smooth scrolling behavior to each anchor link
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();

    const targetElement = document.querySelector(anchor.getAttribute("href"));
    const targetOffset = targetElement.getBoundingClientRect().top;
    const startingY = window.scrollY;
    const duration = 1000; // Scroll duration in milliseconds
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const currentTime = timestamp || performance.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing = easeOutCubic(progress);
      const deltaY = targetOffset * easing - (window.scrollY - startingY);
      window.scrollBy(0, deltaY);

      if (elapsed < duration) {
        window.requestAnimationFrame(scrollStep);
      }
    }

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    window.requestAnimationFrame(scrollStep);
  });
});

// Dropdown
const toggleDropdown = () => {
  const dropdownMenu = document.querySelector("#dropdown-menu");
  dropdownMenu.classList.toggle("hidden");
};

// Calling the function
document
  .querySelector("#appointment")
  .addEventListener("click", toggleDropdown);

// Close the dropdown when clicking outside of it
window.addEventListener("click", (event) => {
  const dropdownMenu = document.querySelector("#dropdown-menu");
  const dropdownButton = document.querySelector(".dropdown button");
  if (!dropdownMenu.contains(event.target) && event.target !== dropdownButton) {
    dropdownMenu.classList.add("hidden");
  }
});
