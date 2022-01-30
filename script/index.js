const headerEl = document.getElementById("header");
const headerTitle = document.getElementById("header-title");
const navigationEl = document.getElementById("navigation");
let previewEl = document.getElementById("preview");
let componentDesc = document.getElementById("desc");
let codeEl = document.getElementById("code");
let footerEl = document.getElementById("footer");
let BadgeBtn = document.getElementById("BadgeBtn");

// load avatar component
const loadAvatar = () => {

  // header title
  document.getElementById('header-title').innerText = "Avatar Component";
  //description
  fetch("./components/avatar/description.html")
  .then(res => res.text())
  .then(html => componentDesc.innerHTML = html)
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

const loadSquareAvatar = () => {
  
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

const loadTextAvatar = () => {
  
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

loadAvatar();