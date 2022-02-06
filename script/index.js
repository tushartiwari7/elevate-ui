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
const getStarted = [
  {
    id: "main",
    path: "../pages/getStarted/main.html"
  },
  {
    id: "navigation",
    path: "../pages/getStarted/nav.html"
  }
]

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
  
  getStarted.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}

const install = [
  {
    id: "main",
    path: "../pages/Installation/main.html"
  },
  {
    id: "navigation",
    path: "../pages/Installation/nav.html"
  }
]

const loadInstallationPage = src => {
  // make installation nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  headerTitle.innerText = "Elevate UI";

  install.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}


// -------------------------------------------------avatarComponent--------------------------------------
const avatar = [
  {
    id: "main",
    path: "../components/avatar/main.html"
  },
  {
    id: "navigation",
    path: "../components/avatar/nav.html"
  }
];

const loadAvatar = (src) => {
  // make avatar nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "Avatar Component";
  avatar.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}

//------------------------------------------------AlertComponent--------------------------------------

const alerts = [
  {
    id: "main",
    path: "../components/alert/main.html"
  },
  {
    id: "navigation",
    path: "../components/alert/nav.html"
  }
];
const loadAlert = src => {
  // make alert nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  // header title
  headerTitle.innerText = "Alert Component";

  alerts.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}

const closeAlert = src => {
  src.parentElement.remove();
}

const badges = [
  {
    id: "main",
    path: "../components/badge/main.html"
  },
  {
    id: "navigation",
    path: "../components/badge/nav.html"
  }
]

// ---------------------------------------BadgeComponent-----------------------------------------------
const loadBadge = src => {
  // make alert nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "Badge Component";
  badges.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}


// ------------------------------------------ButtonComponent--------------------------------------------

const buttons = [
  {
    id: "main",
    path: "../components/button/main.html"
  },
  {
    id: "navigation",
    path: "../components/button/nav.html"
  }
];
const loadButton = src => {
  // make button nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "Button Component";
  
  buttons.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })

}

// ------------------------------------------Card Component--------------------------------------------
const card = [
  {
    id: "main",
    path: "../components/card/main.html"
  },
  {
    id: "navigation",
    path: "../components/card/nav.html"
  }
];
const loadCard = src => {
  // make card nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();

  // header title
  headerTitle.innerText = "Card Component";
  
  card.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}

// ------------------------------------------Image Component--------------------------------------------
const image = [
  {
    id: "main",
    path: "../components/image/main.html"
  },
  {
    id: "navigation",
    path: "../components/image/nav.html"
  }
];
const loadImage = src => {
  // make image nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  headerTitle.innerText = "Image Component";
  
  image.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
}
// ------------------------------------------Input Component--------------------------------------------

const input = [
  {
    id: "main",
    path: "../components/input/main.html"
  },
  {
    id: "navigation",
    path: "../components/input/nav.html"
  }
];
const loadInput = src => {
  // make input nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  
  // header title
  headerTitle.innerText = "Input Component";
  
  input.forEach((type)=>{
    fetch(type.path)
    .then(resp=>resp.text())
    .then(html=>document.getElementById(type.id).innerHTML = html)
    .catch(err=>console.log(err))
  })
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

const rating = [
  {
    id: "main",
    path: "../components/rating/main.html"
  },
  {
    id: "navigation",
    path: "../components/rating/nav.html"
  }
]
const loadRating = src => {
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  headerTitle.innerText = "Rating Component";
 
  rating.forEach((type)=>{
   fetch(type.path)
   .then(resp=>resp.text())
   .then(html=>document.getElementById(type.id).innerHTML = html)
   .catch(err=>console.log(err))
 })
}

const toast = [
  {
    id: "main",
    path: "../components/toast/main.html"
  },
  {
    id: "navigation",
    path: "../components/toast/nav.html"
  }
]

const loadToast = src => {
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  headerTitle.innerText = "Toast Component";
 
  toast.forEach((type)=>{
   fetch(type.path)
   .then(resp=>resp.text())
   .then(html=>document.getElementById(type.id).innerHTML = html)
   .catch(err=>console.log(err))
 })
}


const grid = [
  {
    id: "main",
    path: "../components/grid/main.html"
  },
  {
    id: "navigation",
    path: "../components/grid/nav.html"
  }
]

const loadGrid = src => {
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  closeSidebar();
  headerTitle.innerText = "Grid Utility";
 
  grid.forEach((type)=>{
   fetch(type.path)
   .then(resp=>resp.text())
   .then(html=>document.getElementById(type.id).innerHTML = html)
   .catch(err=>console.log(err))
 })
}


// open sidebar
const openSidebar = () => {
  document.querySelector(".sidebar").classList.add("open");
}
const closeSidebar = () => {
  document.querySelector(".sidebar").classList.remove("open");
}

loadgetStartedPage(null);
