const viewportWidth = window.innerWidth;
const share = document.querySelector(".share-btn");
const popup = document.querySelector(".author.after-share");
const exist = document.querySelector(".author.before-share");

console.log(viewportWidth);
share.addEventListener("click", () => {

  if (viewportWidth < 768) {
    popup.style.display = "flex";
    exist.style.display = "none";
    share.classList.add('share-btn-share');
  } else {



}});

document.addEventListener("click", (e) => {
  if (!popup.contains(e.target) && !share.contains(e.target)) {
    popup.style.display = "none";
    exist.style.display = "flex";
    share.classList.remove('share-btn-share');
  }
});
