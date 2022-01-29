const headerEl = document.getElementById("header");
const navigationEl = document.getElementById("navigation");

// load header component
fetch("/components/header/index.html")
.then(res => res.text())
.then(html => headerEl.innerHTML = html)
.catch(err => console.log(err));

// load navbar component
fetch("/components/navigation/index.html")
.then(res => res.text())
.then(html => navigationEl.innerHTML = html)
.catch(err => console.log(err));
