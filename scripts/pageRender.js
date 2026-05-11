const homepage = document.querySelector("#homepage");
const privacy = document.querySelector("#privacy");
const toc = document.querySelector("#ToC");
const privacyBtn = document.querySelector(".privacy_link");
const tocBtn = document.querySelector(".toc_link");

document.addEventListener("DOMContentLoaded", () => {
  function loadPage() {
    const classlistOne = document.homepage.classList;
    const classlistTwo = document.privacy.classList;
    const classlistThree = document.ToC.classList;
    if (classlistOne.contains("disabled")) {
      classlistOne.remove("disabled");
      classlistOne.add("showing");
    } else if (classlistTwo.contains("showing")) {
      classlistTwo.remove("showing");
      classlistTwo.add("disabled");
    } else if (classlistThree.contains("showing")) {
      classlistThree.remove("showing");
      classlistThree.add("disabled");
    } else if (
      classlistTwo.contains("showing") &&
      classlistThree.contains("showing")
    ) {
      classlistTwo.remove("showing");
      classlistTwo.add("disabled");
      classlistThree.remove("showing");
      classlistThree.add("disabled");
    }
  }
});

privacyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  homepage.classList.remove("showing");
  homepage.classList.add("disabled");
  privacy.classList.remove("disabled");
  privacy.classList.add("showing");
});

tocBtn.addEventListener("click", (e) => {
  e.preventDefault();
  homepage.classList.remove("showing");
  homepage.classList.add("disabled");
  toc.classList.remove("disabled");
  toc.classList.add("showing");
});
