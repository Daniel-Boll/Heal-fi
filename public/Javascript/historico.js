let ul = document.getElementById("timeline");

function teste(){
	let change = document.getElementById("1st");
	change.className = "timeline-badge success"
}

function getHistorico(){
	console.log("Alo");
	let li = document.createElement("li");
	li.setAttribute("class", "timeline-inverted")
	// badge
	let div_badge = document.createElement("div");
	div_badge.setAttribute("class", "timeline-badge");
	let icon = document.createElement('i');
	icon.setAttribute("class", "fa fa-check");

	// panel
	let div_panel = document.createElement("div");
	div_panel.setAttribute("class", "timeline-panel");

	// heading
	let div_heading = document.createElement("div");
	div_heading.setAttribute("class", "timeline-heading");
	let title = document.createElement("h4");
	title.setAttribute("class", "timeline-title");
	title.innerHTML = "teste"

	// corpo
	let div_body = document.createElement("div");
	div_body.setAttribute("class", "timeline-body");
	let p_body = document.createElement("p");
	p_body.innerHTML = "Thiago és gay";

	li.appendChild(div_badge);
	div_badge.appendChild(icon);
	li.appendChild(div_panel);
	div_panel.appendChild(div_heading);
	div_heading.appendChild(title);
	li.appendChild(div_body);
	div_panel.appendChild(div_body);
	div_body.appendChild(p_body);
	ul.appendChild(li);

}
