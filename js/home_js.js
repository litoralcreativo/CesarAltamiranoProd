const ScrollFuncs = (e) => {
  let scroll = window.pageYOffset;

  const background = document.querySelector(".page-container");
  background.style.backgroundPositionY = -(scroll * 0.1) + "px";

  const nbb = document.getElementById("navbar-brand");
  if (scroll > 10) {
    nbb.className = "navbar-brand hidden";
  } else {
    nbb.className = "navbar-brand";
  }
};

window.addEventListener("scroll", function (e) {
  ScrollFuncs(e);
});

const ScrollToElement = (element) => {
  element.scrollIntoView({
    behavior: "smooth",
  });
};

const ToogleProject = (index) => {
  let element;

  switch (index) {
    case 1:
      element = document.getElementById("first-project");
      break;
    case 2:
      element = document.getElementById("second-project");
      break;
    case 3:
      element = document.getElementById("third-project");
      break;
    case 4:
      element = document.getElementById("fourth-project");
      break;
  }

  if (element) {
    ScrollToElement(element);
  }
};
