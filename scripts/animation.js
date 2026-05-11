// Moved from homepage.html
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 200);
        return;
      }
      entry.target.classList.remove("visible");
    });
  });

  const animatedElements = document.querySelectorAll(".animated");
  animatedElements.forEach((element) => observer.observe(element));

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const mobileDropdown = document.getElementById("mobileDropdown");

  function closeMobileNav() {
    mobileDropdown.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    mobileDropdown.setAttribute("aria-hidden", "true");
  }

  if (navToggle && mobileDropdown) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileDropdown.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileDropdown.setAttribute("aria-hidden", isOpen ? "false" : "true");
      navToggle.classList.toggle("open", isOpen);
    });

    // Close when clicking outside
    document.addEventListener("click", (ev) => {
      if (mobileDropdown.classList.contains("open")) {
        if (
          !mobileDropdown.contains(ev.target) &&
          !navToggle.contains(ev.target)
        ) {
          closeMobileNav();
        }
      }
    });

    // Close on resize to desktop (1024px and above)
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1023) closeMobileNav();
    });
  }
});
