const headerEl = document.getElementById("header");
const headerTitle = document.getElementById("header-title");
const navigationEl = document.getElementById("navigation");
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

// load avatar component
const loadAvatar = (src) => {
  // make avatar nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // header title
  document.getElementById('header-title').innerText = "Avatar Component";
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

//load alert component

const loadAlert = (src) => {
  // make alert nav-btn active
  removeActiveAll();
  clickedItems.push(src);
  src?.classList.add("active");

  // header title
  document.getElementById('header-title').innerText = "Alert Component";
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
  fetch("./components/alert/preview.html")
  .then(res => res.text())
  .then(html => previewEl.innerHTML = html)
  .catch(err => console.log(err));

  // //code
  fetch("./components/alert/code.html")
  .then(res => res.text())
  .then(html => codeEl.innerHTML = html)
  .catch(err => console.log(err));

  //footer
  fetch("./components/alert/footer.html")
  .then(res => res.text())
  .then(html => footerEl.innerHTML = html)
  .catch(err => console.log(err));

}

loadAvatar(null);