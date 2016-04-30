var	preBtn = document.getElementById("prebtn"),
	inBtn = document.getElementById("inbtn"),
	postBtn = document.getElementById("postbtn"),
	treeRoot = document.getElementsByClassName('root')[0],
	list=[],
	timer = null;
window.onload = function (){
	preBtn.addEventListener("click", pre);
	function pre() {
		reset();
		preOrder(treeRoot);
		changeColor();
	}
	inBtn.addEventListener("click", ino);
	function ino(){
	    reset();
	    inOrder(treeRoot);
	    changeColor();
    }
	postBtn.addEventListener("click", post);
	function post(){
	    reset();
	    postOrder(treeRoot);
	    changeColor();
    }
}

//前序遍历
function preOrder(t) {
	if (!(t == null)) {
		list.push(t);
		preOrder(t.firstElementChild);
		preOrder(t.lastElementChild);
	}
}

//中序遍历
function inOrder(t) {
	if (!(t == null)) {
		inOrder(t.firstElementChild);
		list.push(t);
		inOrder(t.lastElementChild);
	}
}

//后序遍历
function postOrder(t) {
	if (!(t == null)) {
		postOrder(t.firstElementChild);
		postOrder(t.lastElementChild);
		list.push(t);
	}
}

//颜色变化函数
function changeColor() {
	var i = 0;
	list[i].style.backgroundColor = 'darkseagreen'
	timer = setInterval(function (argument) {
		i++;
		if (i < list.length) {
			list[i-1].style.backgroundColor = '#fff';
			list[i].style.backgroundColor = 'darkseagreen';
		} else {
			clearInterval(timer);
			list[list.length-1].style.backgroundColor = '#fff';
		}
	},500)
}

//初始化样式
function reset() {
	list = [];
	clearInterval(timer);
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = '#fff';
	}
}