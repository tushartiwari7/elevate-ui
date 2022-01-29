const headerEl = document.getElementById("header");
const navigationEl = document.getElementById("navigation");
const sidebarEl = document.getElementById("sidebar");

// load header component
fetch("/layout/header/header.html")
.then(res => res.text())
.then(html => headerEl.innerHTML = html)
.catch(err => console.log(err));

// load navbar component
fetch("/layout/navigation/navigation.html")
.then(res => res.text())
.then(html => navigationEl.innerHTML = html)
.catch(err => console.log(err));

// load sidebar Component
fetch("/layout/sidebar/sidebar.html")
.then(res => res.text())
.then(html => sidebarEl.innerHTML = html)
.catch(err => console.log(err));
