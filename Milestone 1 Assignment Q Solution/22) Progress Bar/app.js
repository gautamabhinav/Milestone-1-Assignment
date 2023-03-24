window.onscroll = function() {updateProgressBar()};

function updateProgressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
}
