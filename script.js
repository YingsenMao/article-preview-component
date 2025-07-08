const viewportWidth = window.innerWidth;
const shareBtn = document.querySelector(".share-btn");
const shareMobileBtn = document.querySelector(".share-btn.mobile-btn");
const authorDescriptoin = document.querySelector(".description-author");
const shareDescription = document.querySelector(".description-share");

console.log(viewportWidth);
shareBtn.addEventListener("click", () => {
  if (viewportWidth < 768) {
    authorDescriptoin.style.display = "none";
    shareDescription.style.display = "flex";
    shareMobileBtn.style.display = "flex";
  } else {
    shareDescription.classList.add("description-share-desktop");
  }
});

document.addEventListener("click", (e) => {
  if (!shareDescription.contains(e.target) && !shareBtn.contains(e.target)) {
    if (viewportWidth < 768) {
      shareDescription.style.display = "none";
      authorDescriptoin.style.display = "flex";
      shareBtn.classList.remove("share-btn-mobile");
    } else {
      shareDescription.classList.remove("description-share-desktop");
    }
  }
});
