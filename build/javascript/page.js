//All navbar menu
const menuResume = document.querySelector(".menu-resume");
const openNavbar = document.querySelector("#open-bars");
const closeNavbar = document.querySelector("#close-bars");

openNavbar.addEventListener("click", () => {
  menuResume.style.transform = "translateY(0)";
});

closeNavbar.addEventListener("click", () => {
  menuResume.style.transform = "translateY(-100%)";
});
// filter Category Portfolio
const categories = document.getElementById("portfolio_selection");
const itemCategory = document.querySelectorAll("#portfolio_works .port_work");
//loadmore
let loadMoreBtn = document.querySelector("#load_more");
let currentItem = 6;

// event loadmore
loadMoreBtn.addEventListener("click", () => {
  for (let i = currentItem; i < currentItem + 3; i++) {
    console.log(itemCategory[i]);
    itemCategory[i].style.display = "block";
  }
  currentItem += 3;
  if (currentItem >= itemCategory.length) {
    loadMoreBtn.style.display = "none";
  }
});

// reveal
const reveal = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < reveal.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveal[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
});
