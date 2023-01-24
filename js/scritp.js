let sidebar = document.querySelector(".sidebari");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.onclick = function() {
	sidebar.classList.toggle("active");
}