const headerEl = document.getElementById("header");

fetch("/components/header/index.html")
.then(res => res.text())
.then(html => headerEl.innerHTML = html)
.catch(err => console.log(err));
