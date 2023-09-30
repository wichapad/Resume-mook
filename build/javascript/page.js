//All navbar menu
let navMenu = document.querySelectorAll("li");
// filter Category Portfolio
const categories = document.getElementById("portfolio_selection");
const itemCategory = document.querySelectorAll("#portfolio_works .port_work");
//loadmore
let loadMoreBtn = document.querySelector("#load_more");
let currentItem = 6;

//navigation bar mobile
const mobileBar = document.getElementById("menu_mobile");
const selectionMobile = document.querySelector(".menu_selection");

//Change color Scrolling Navbar
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar_selection");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    navbar.classList.add("navbar_BG");
  } else {
    navbar.classList.remove("navbar_BG");
  }
});

mobileBar.addEventListener("click", () => {
  if (selectionMobile.style.display === "none") {
    selectionMobile.style.display = "flex";
  } else {
    selectionMobile.style.display = "none";
  }
});

// .active navbar
navMenu.forEach((e) => {
  e.addEventListener("click", function () {
    navMenu.forEach((menu) => menu.classList.remove("active"));
    this.classList.add("active");
  });
});

//event filter Category Portfolio
categories.addEventListener("click", (e) => {
  let selectCategory = e.target.getAttribute("value");

  itemCategory.forEach((item) => {
    let itemList = item.getAttribute("data-category");

    if (selectCategory === "all" || selectCategory === itemList) {
      item.style.display = "block";
      loadMoreBtn.style.display = "none";
    } else {
      item.style.display = "none";
    }
  });
});

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
