document
	.getElementById("filterContent")
	.setAttribute("style", "display: none;");
function showFilter() {
	document
		.getElementById("filterContent")
		.setAttribute("style", "display: block;");
}

function filterArticles() {
	// .checked returns a boolean (true/false), .value usually just returns "on"
	let opinion = document.getElementById("opinionCheckbox").checked;
	let update = document.getElementById("updateCheckbox").checked;
	let recipe = document.getElementById("recipeCheckbox").checked;

	// Helper function to loop through elements and set display
	function setDisplay(className, displayValue) {
		let elements = document.getElementsByClassName(className);
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.display = displayValue;
		}
	}

	if (opinion) {
		setDisplay("opinion", "block");
	} else {
		setDisplay("opinion", "none");
	}

	if (update) {
		setDisplay("update", "block");
	} else {
		setDisplay("update", "none");
	}

	if (recipe) {
		setDisplay("recipe", "block");
	} else {
		setDisplay("recipe", "none");
	}
}

function showAddNew() {
	document.getElementById("newContent").style.display = "block";
}

function addNewArticle() {
	let title = document.getElementById("inputHeader").value;

	let content = document.getElementById("inputArticle").value;

	let selectedRadio = document.querySelector(
		'input[name="articleType"]:checked',
	);
	let type = selectedRadio.labels[0].textContent;
	const sect = document.getElementById("articleList");

	article = document.createElement("article");
	span = document.createElement("span");
	para = document.createElement("p");
	para2 = document.createElement("p");
	a = document.createElement("a");
	h2 = document.createElement("h2");
	span.className = "marker";
	span.textContent = type;
	article.className = type.toLowerCase();
	h2.textContent = title;
	para.textContent = content;
	a.href = "moreDetails.html";
	a.textContent = "Read more...";

	sect.appendChild(article);
	article.appendChild(span);
	article.appendChild(h2);
	article.appendChild(para);
	article.appendChild(para2);
	para2.appendChild(a);
}
/*
<div id="articleList">
    <article class="opinion" id="a1">
        <span class="marker">Opinion</span>
        <h2>Article 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, efficitur a facilisis id, venenatis in elit. Nulla dictum vel metus at auctor. Integer venenatis pretium mauris id ultrices. Duis sagittis ligula eget erat hendrerit, ut lobortis libero mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie vehicula quam, non accumsan odio pulvinar ac. Quisque placerat, lorem sed mattis rhoncus, purus tortor sodales tortor, sed viverra turpis orci in neque. Fusce ullamcorper euismod diam tincidunt vehicula. Quisque id dui tincidunt, porta tortor id, mattis quam. Donec et feugiat ipsum. Morbi sapien leo, mattis quis magna eget, vehicula tempus mauris</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    </article>
*/
