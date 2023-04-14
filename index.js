function onClickScrollTo(id) {
  document.getElementById(id).scrollIntoView();
}

window.addEventListener("scroll", function (event) {
  if (window.scrollY == 0) {
    document.querySelector(".btn-return-to-top").classList.remove("visible");
  } else {
    document.querySelector(".btn-return-to-top").classList.add("visible");
  }
});

function onClickLink(url) {
  window.open(url);
}
