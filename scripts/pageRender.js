document.addEventListener("DOMContentLoaded", () => {
  const homepage = document.querySelector("#homepage");
  const privacy = document.querySelector("#privacy");
  const toc = document.querySelector("#ToC");
  const careers = document.querySelector("#careers");
  const sectionNav = document.querySelector("#sectionNav");
  const sectionTitle = document.querySelector("#sectionTitle");
  const mainNavbar = document.querySelector("#navbar");
  const originalUrl = window.location.href;
  const privacyBtn = document.querySelectorAll(".privacy_link");
  const tocBtn = document.querySelectorAll(".toc_link");
  const careersBtn = document.querySelectorAll(".careers_link");

  function showSection(elToShow) {
    if (!elToShow) return;
    // hide others
    [homepage, privacy, toc, careers].forEach((el) => {
      if (!el) return;
      if (el === elToShow) {
        el.classList.remove("disabled");
        el.classList.add("showing");
      } else {
        el.classList.remove("showing");
        el.classList.add("disabled");
      }
    });

    // determine whether this is a panel (privacy or ToC)
    const isPanel =
      elToShow === privacy || elToShow === toc || elToShow === careers;

    // toggle the small section navbar for privacy or toc
    if (sectionNav) {
      if (isPanel) {
        sectionNav.classList.remove("disabled");
        sectionNav.setAttribute("aria-hidden", "false");
        if (sectionTitle) {
          if (elToShow === privacy) sectionTitle.textContent = "Privacy Policy";
          else if (elToShow === toc)
            sectionTitle.textContent = "Terms & Conditions";
          else if (elToShow === careers) sectionTitle.textContent = "Careers";
        }
      } else {
        sectionNav.classList.add("disabled");
        sectionNav.setAttribute("aria-hidden", "true");
      }
    }

    // show/hide main navbar: only show on homepage
    if (mainNavbar) {
      const showMain = elToShow === homepage;
      if (showMain) {
        mainNavbar.classList.remove("disabled");
      } else {
        mainNavbar.classList.add("disabled");
      }
    }

    // update URL when privacy or ToC is shown; restore original when back
    try {
      if (isPanel) {
        history.replaceState(
          {},
          "",
          "http://127.0.0.1:5500/Evolution-Studios/app/"
        );
      } else {
        history.replaceState({}, "", originalUrl);
      }
    } catch (err) {
      // ignore history errors
    }
  }

  // initial load: ensure homepage is showing if none
  if (
    homepage &&
    !homepage.classList.contains("showing") &&
    !privacy.classList.contains("showing") &&
    !toc?.classList.contains("showing") &&
    !careers?.classList.contains("showing")
  ) {
    homepage.classList.remove("disabled");
    homepage.classList.add("showing");
  }

  // ensure section nav visibility matches initial section
  if (sectionNav) {
    const initialPanel =
      privacy.classList.contains("showing") ||
      toc?.classList.contains("showing") ||
      careers?.classList.contains("showing");
    if (initialPanel) {
      sectionNav.classList.remove("disabled");
      sectionNav.setAttribute("aria-hidden", "false");
    } else {
      sectionNav.classList.add("disabled");
      sectionNav.setAttribute("aria-hidden", "true");
    }
  }

  // ensure main navbar initial visibility: only on homepage
  if (mainNavbar) {
    const initialPanel =
      privacy.classList.contains("showing") ||
      toc?.classList.contains("showing") ||
      careers?.classList.contains("showing");
    if (initialPanel) {
      mainNavbar.classList.add("disabled");
    } else {
      mainNavbar.classList.remove("disabled");
    }
  }

  // privacy links: there may be multiple, so attach to all
  privacyBtn.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      // toggle privacy
      if (privacy) {
        if (privacy.classList.contains("showing")) {
          showSection(homepage);
        } else {
          showSection(privacy);
        }
      }
    });
  });

  // toc links
  tocBtn.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      // toggle toc
      if (toc) {
        if (toc.classList.contains("showing")) {
          // go back to homepage
          showSection(homepage);
        } else {
          showSection(toc);
        }
      }
    });
  });

  // careers links in footer
  careersBtn.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (careers) {
        if (careers.classList.contains("showing")) showSection(homepage);
        else showSection(careers);
      }
    });
  });

  document.querySelectorAll(".btn-back").forEach((b) => {
    b.addEventListener("click", (ev) => {
      ev.preventDefault();
      showSection(homepage);
    });
  });

  // section-back button in the new section nav (goes back to previous/Home)
  document.querySelectorAll(".section-back").forEach((b) => {
    b.addEventListener("click", (ev) => {
      ev.preventDefault();
      showSection(homepage);
    });
  });

  document.querySelectorAll(".priv-back").forEach((b) => {
    b.addEventListener("click", (ev) => {
      ev.preventDefault();
      showSection(privacy);
    });
  });

  document.querySelectorAll(".toc-back").forEach((b) => {
    b.addEventListener("click", (ev) => {
      ev.preventDefault();
      showSection(toc);
    });
  });
});
