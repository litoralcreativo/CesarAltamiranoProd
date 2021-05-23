const ScrollFuncs = (e) => {
  let scroll = window.pageYOffset;

  const background = document.querySelector("#home-background");
  background.style.top = -(scroll * 0.05) + "px";

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
