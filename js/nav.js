// import {} from "https://cdn.jsdelivr.net/npm/animejs@4/+esm";

export function initNav() {
	var path = location.pathname.split("/").pop() || "index.html";
	var links = document.querySelectorAll(".nav-link");
	for (var i = 0; i < links.length; i++) {
		var href = links[i].getAttribute("href");
		if (href === path) links[i].classList.add("active");
		else links[i].classList.remove("active");
	}
}
