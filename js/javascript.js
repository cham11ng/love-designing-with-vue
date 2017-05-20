var count = 0;
var addList = document.querySelector("#add-list");
var pageTitle = document.getElementById('page-title');
var listsContainer = document.getElementById('lists')
var lists = document.querySelectorAll('#lists li');

listsContainer.addEventListener("click", activateItem);

// event delegation
function activateItem(e) {
	if (e.target.nodeName == "LI") {
		pageTitle.innerHTML = e.target.innerHTML;
		for (var i = e.target.parentNode.children.length - 1; i >= 0; i--) {
			e.target.parentNode.children[i].classList.remove('active');
		}

		e.target.classList.add('active');
	}
}

addList.addEventListener('click', addItem);

function addItem() {
	listsContainer.innerHTML += '<li class="pointer">New Title '+ ++count +'</li>';
}