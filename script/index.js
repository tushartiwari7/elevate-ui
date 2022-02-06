const headerEl = document.getElementById("header");
const headerTitle = document.getElementById("header-title");
const navigationEl = document.getElementById("navigation");
let mainEl = document.getElementById("main");
let previewEl = document.getElementById("preview");
let descEl = document.getElementById("desc");
let codeEl = document.getElementById("code");
let footerEl = document.getElementById("footer");

const clickedItems = [];
const removeActiveAll = () => {
  clickedItems.forEach(item => {
    item?.classList.remove("active");
  })
  clickedItems.length = 0;
}

const list = [
  {
    id: "main",
    path: "../components/list/main.html"
  },
  {
    id: "navigation",
    path: "../components/list/nav.html"
  }
]

const loadList =src =>{

  removeActiveAll();
   clickedItems.push(src);
   src?.classList.add("active");
 
  closeSidebar();
  headerTitle.innerText = "Lists";
  list.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}


const textUtils = [
  {
    id: "main",
    path: "../components/textUtility/main.html"
  },
  {
    id: "navigation",
    path: "../components/textUtility/nav.html"
  }
]


const loadTextUtility = src => {
   // make installation nav-btn active
   removeActiveAll();
   clickedItems.push(src);
   src?.classList.add("active");
 
   closeSidebar();
   headerTitle.innerText = "Text Utilities";
  
   textUtils.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}

const navigation = [
  {
    id: "main",
    path: "../components/navigation/main.html"
  },
  {
    id: "navigation",
    path: "../components/navigation/nav.html"
  }
]

const loadNavigation = src => {  
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  headerTitle.innerText = "Navigation Component";
 
  navigation.forEach((type)=>{
   fetch(type.path)
   .then(resp=>resp.text())
   .then(html=>document.getElementById(type.id).innerHTML = html)
   .catch(err=>console.log(err))
 })
}

const modal = [
  {
    id: "main",
    path: "../components/modal/main.html"
  },
  {
    id: "navigation",
    path: "../components/modal/nav.html"
  }
]

const loadModal = src => {  
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  headerTitle.innerText = "Modal Component";
 
  modal.forEach((type)=>{
   fetch(type.path)
   .then(resp=>resp.text())
   .then(html=>document.getElementById(type.id).innerHTML = html)
   .catch(err=>console.log(err))
 })
}

const openModal = () => {
  document.getElementById('modal').style.display = 'flex';
}
const closeModal = () => document.getElementById('modal').style.display = 'none';


const loadgetStartedPage = src => {
    // make installation nav-btn active
    removeActiveAll();
    clickedItems.push(src);
    src?.classList.add("active");
  
    closeSidebar();
    
  headerTitle.innerText = "Elevate UI";
   
  //introduction
  fetch("../pages/getStarted/description.html")
  .then(res => res.text())
  .then(html => descEl.innerHTML = html)
  .catch(err => console.log(err));
  
  //features
  fetch("../pages/getStarted/features.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));
  
  //footer
  fetch("../pages/getStarted/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));

  
  //navigation
  fetch("../pages/getStarted/nav.html")
  .then(res => res.text())
  .then(html => navigationEl.innerHTML = html)
  .catch(err => console.log(err));
 
  codeEl.innerHTML = `<div></div>`;
}


const loadInstallationPage = src => {
  // make installation nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  
headerTitle.innerText = "Elevate UI";
 
//introduction
fetch("../pages/Installation/description.html")
.then(res => res.text())
.then(html => descEl.innerHTML = html)
.catch(err => console.log(err));

//code
fetch("../pages/Installation/code.html")
.then(res => res.text())
.then(html => codeEl.innerHTML = html)
.catch(err => console.log(err));

//footer
fetch("../pages/Installation/footer.html")
.then(res => res.text())
.then(html => footerEl.innerHTML = html)
.catch(err => console.log(err));


//navigation
fetch("../pages/Installation/nav.html")
.then(res => res.text())
.then(html => navigationEl.innerHTML = html)
.catch(err => console.log(err));

previewEl.innerHTML = `<div></div>`;
}


// -------------------------------------------------avatarComponent--------------------------------------
const loadAvatar = (src) => {
  // make avatar nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "Avatar Component";
  //description
  fetch("./components/avatar/description.html")
  .then(res => res.text())
  .then(html => descEl.innerHTML = html)
  .catch(err => console.log(err));

  //navigation
  fetch("/components/avatar/nav.html")
  .then(res => res.text())
  .then(html => navigationEl.innerHTML = html)
  .catch(err => console.log(err));

  // preview
  fetch("./components/avatar/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/avatar/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

  //footer
  fetch("./components/avatar/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadSquareAvatar = (src) => {
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/avatar/variants/SquareAvatar/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/avatar/variants/SquareAvatar/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

}

const loadTextAvatar = (src) => {
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/avatar/variants/TextAvatar/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/avatar/variants/TextAvatar/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

//------------------------------------------------AlertComponent--------------------------------------

const loadAlert = src => {
  // make alert nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  
  // header title
  headerTitle.innerText = "Alert Component";
  //description
  fetch("./components/alert/description.html")
  .then(res => res.text())
  .then(html => descEl.innerHTML = html)
  .catch(err => console.log(err));

  //navigation
  fetch("/components/alert/nav.html")
  .then(res => res.text())
  .then(html => navigationEl.innerHTML = html)
  .catch(err => console.log(err));

  // preview
  fetch("./components/alert/default/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  // //code
  fetch("./components/alert/default/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

  //footer
  fetch("./components/alert/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadAlertWithCloseBtn = src => {

  // make alert nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");
  
  // preview
  fetch("./components/alert/closeBtn/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/alert/closeBtn/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const closeAlert = src => {
  src.parentElement.remove();
}

// ------------------------------------------BadgeComponent-----------------------------------------------
const loadBadge = src => {
  // make alert nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "Badge Component";
  //description
  fetch("./components/badge/description.html")
  .then(res => res.text())
  .then(html => descEl.innerHTML = html)
  .catch(err => console.log(err));

  //navigation
  fetch("/components/badge/nav.html")
  .then(res => res.text())
  .then(html => navigationEl.innerHTML = html)
  .catch(err => console.log(err));

  // preview
  fetch("./components/badge/default/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/badge/default/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

  //footer
  fetch("./components/badge/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));
 
}

const loadIconBadge = src => {
  // make alert nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/badge/iconBadge/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/badge/iconBadge/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

// ------------------------------------------ButtonComponent--------------------------------------------


const loadButton = src => {
  // make button nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "Button Component";
  //description
  fetch("./components/button/description.html")
  .then(res => res.text())
  .then(html => descEl.innerHTML = html)
  .catch(err => console.log(err));

  //navigation
  fetch("/components/button/nav.html")
  .then(res => res.text())
  .then(html => navigationEl.innerHTML = html)
  .catch(err => console.log(err));

  // preview
  fetch("./components/button/default/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/button/default/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

  //footer
  fetch("./components/button/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadOutlineButton = src => {
  // make button nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/button/outlined/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/button/outlined/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadlinkButton = src => {
  // make button nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/button/link/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/button/link/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadiconbutton = src => {
  // make button nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/button/iconbutton/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/button/iconbutton/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadFloatingButton = src => {
  // make button nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/button/floatingButton/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/button/floatingButton/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadSizedButton = src => {
  // make button nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/button/sizedButton/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/button/sizedButton/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadRoundedButton = src => {
  // make button nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/button/roundedButton/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/button/roundedButton/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

// ------------------------------------------Card Component--------------------------------------------

const loadCard = src => {
  // make card nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "Card Component";
  
  //description
  fetch("./components/card/description.html")
  .then(res => res.text())
  .then(html => descEl.innerHTML = html)
  .catch(err => console.log(err));

  //navigation
  fetch("/components/card/nav.html")
  .then(res => res.text())
  .then(html => navigationEl.innerHTML = html)
  .catch(err => console.log(err));

  // preview
  fetch("./components/card/default/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/card/default/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

  //footer
  fetch("./components/card/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));
}

const cardWithBadge = src => {

  // make card nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");
    
  // preview
  fetch("./components/card/cardWithBadge/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/card/cardWithBadge/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const dismissableCard = src => {

  // make card nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");
    
  // preview
  fetch("./components/card/dismissable/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/card/dismissable/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const textOnlyCard = src => {

  // make card nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");
    
  // preview
  fetch("./components/card/textOnly/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/card/textOnly/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const horizontalCard = src => {

  // make card nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");
    
  // preview
  fetch("./components/card/horizontal/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/card/horizontal/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
  
}

// ------------------------------------------Image Component--------------------------------------------

const loadImage = src => {
  // make image nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "image Component";
  
  //description
  fetch("./components/image/description.html")
  .then(res => res.text())
  .then(html => descEl.innerHTML = html)
  .catch(err => console.log(err));

  //navigation
  fetch("/components/image/nav.html")
  .then(res => res.text())
  .then(html => navigationEl.innerHTML = html)
  .catch(err => console.log(err));

  // preview
  fetch("./components/image/square/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/image/square/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

  //footer
  fetch("./components/image/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadRoundedImage = src => {
  // make image nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/image/rounded/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/image/rounded/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadRespImage = src => {
  // make image nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/image/responsive/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/image/responsive/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));
}

// ------------------------------------------Input Component--------------------------------------------

const loadInput = src => {
  // make input nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  
  // header title
  headerTitle.innerText = "Input Component";
  
  //description
  fetch("./components/input/description.html")
  .then(res => res.text())
  .then(html => descEl.innerHTML = html)
  .catch(err => console.log(err));

  //navigation
  fetch("/components/input/nav.html")
  .then(res => res.text())
  .then(html => navigationEl.innerHTML = html)
  .catch(err => console.log(err));

  // preview
  fetch("./components/input/default/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/input/default/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

  //footer
  fetch("./components/input/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));
}

const loadTextBoxInput = src => {
  // make input nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/input/textbox/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/input/textbox/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

}

const loadValidationInput = src => {
  // make input nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // preview
  fetch("./components/input/validation/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  //code
  fetch("./components/input/validation/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

}

// open sidebar
const openSidebar = () => {
  document.querySelector(".sidebar").classList.add("open");
}
const closeSidebar = () => {
  document.querySelector(".sidebar").classList.remove("open");
}

loadgetStartedPage(null);