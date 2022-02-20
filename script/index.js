const headerTitle = document.getElementById("header-title");


const clickedItems = [];
let router;
const removeActiveAll = () => {
  clickedItems.forEach(item => {
    item?.classList.remove("active");
  })
  clickedItems.length = 0;
}

const loadPage = (src,targetPage,utility=false) => {
  // make installation nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");
  closeSidebar();

  headerTitle.innerText =  
  (targetPage === 'getStarted' || targetPage === 'install') ? "Elevate UI" :
  utility ? `${targetPage} Utility` : `${targetPage} Component`;
  
  router[targetPage].forEach(async (type)=>{
    try {
      const code = await fetch(type.path);
      const parsedCode = await code.text();
      document.getElementById(type.id).innerHTML = parsedCode;
    } catch (error) {
      console.log(error);      
    }
  })
}

// open sidebar
const openSidebar = () => {
  document.querySelector(".sidebar").classList.add("open");
}
const closeSidebar = () => {
  document.querySelector(".sidebar").classList.remove("open");
}

const firstRender = async () => {
  try {
    const data = await fetch('../assets/router.json');
    router = await data.json();
    return loadPage(null,'getStarted');
  } catch (err) {
    console.log(err);    
  }
}

firstRender();
