/*
This JS file acts as a router to all different pages.

When user requests a page by through sidebar nav links on footer loadPage() gets called.
  1. It will find the path of file that needs to be rendered on DOM using router.json (line 32)
  2. then load the html files and render it on the DOM using innerHTML.

*/

const headerTitle = document.getElementById("header-title");

const clickedItems = [];
let router;
const removeActiveAll = () => {
  clickedItems.forEach((item) => {
    item?.classList.remove("active");
  });
  clickedItems.length = 0;
};

const loadPage = async (src, targetPage, utility = false) => {
  // remove The previous Component Variant from url when moving to another Component
  if (location.href.includes("#")) location.href = "#";

  // make installation nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");
  closeSidebar();

  headerTitle.innerText =
    targetPage === "getStarted" || targetPage === "install"
      ? "Elevate UI"
      : utility
      ? `${targetPage} Utility`
      : `${targetPage} Component`;

  router[targetPage].forEach(async (type) => {
    try {
      const code = await fetch(type.path);
      const parsedCode = await code.text();
      document.getElementById(type.id).innerHTML = parsedCode;
    } catch (error) {
      console.log(error);
    }
  });
};

// open sidebar
const openSidebar = () => {
  document.querySelector(".sidebar").classList.add("open");
};
const closeSidebar = () => {
  document.querySelector(".sidebar").classList.remove("open");
};

// open/close modal
const openModal = () => {
  document.getElementById("modal").style.display = "flex";
};
const closeModal = (e) => {
  if (
    e.target.id === "modal" ||
    e.target.id === "no" ||
    e.target.id === "yes" ||
    e.target.id === "exit"
  )
    document.getElementById("modal").style.display = "none";
};

const firstRender = async () => {
  try {
    const data = await fetch("../assets/router.json");
    router = await data.json();
    return loadPage(null, "getStarted");
  } catch (err) {
    console.log(err);
  }
};

firstRender();
