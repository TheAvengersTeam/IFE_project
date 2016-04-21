 /*简化选择器*/

 function $(ele) {
     return document.querySelector(ele);
 }
 var arrayBubble=[];
 var snapshots = []; 
 function rancolor(){
	var colorstr=["#441d49", "#538289", "#a02730", "#73832a", "#005db1", "#10193a"];
	var i=Math.floor(Math.random()*10);
	return colorstr[i];
	/*var value=document.getElementById("inputbox").value;
	if(value<=60)
	    return colorstr[0];
	else if(value>60&&value<=70)
	    return colorstr[1];
	else if(value>70&&value<=80)
	    return colorstr[2];
	else if(value>80&&value<=90)
	    return colorstr[3];
	else if(value>90&&value<100)
	    return colorstr[4];
	else 
	    return colorstr[5];
	    */
 }

 function init() {
     initData();
     updata();
 }

 $("#sort").onclick = function() {
     if (arrayBubble.length == 0) return alert("队列为空");
     arrayBubble.bubbleSort();
     timer = setInterval(paint, interval); //定时绘制
     function paint() {
         var snapshot = snapshots.shift() || [];
         if (snapshot.length !== 0) {
             arrayBubble(snapshot);
         } else {
             clearInterval(timer); //绘制结束
             return;
         }
     }
 }
 
var ul = document.getElementsByTagName('ul')[0];
var box = document.getElementsByClassName('box');
 $("#left-in").onclick = function() {
    try {
         arrayBubble.unshift(getInputValue());
     } catch (e) {
         alert(e.message);
     }
    updata();
 }
 $("#right-in").onclick = function() {
    try {
        arrayBubble.push(getInputValue());
    } catch (e) {
        alert(e.message);
    }
    updata();
 }
 $("#left-out").onclick = function() {
    if (arrayBubble.length === 0) return alert("队列为空");
     arrayBubble.shift();
    updata();
 }
 $("#right-out").onclick = function() {
    if (arrayBubble.length === 0) return alert("队列为空");
     arrayBubble.pop();
    updata();
 }
 $("#random").onclick = function() {
    initData(50);
    updata();
 }

 function bubbleSort(arr) {
     snapshots = [];
     if (arr.length < 1) {
         return arr;
     }
     var temp;
     for (var i = 0; i < arr.length; i++) {
         for (var j = 0; j < arr.length - i - 1; j++) {
             if (arr[j] > arr[j + 1]) {
                 temp = arr[j + 1];
                 arr[j + 1] = arr[j];
                 arr[j] = temp;
                 snapshots.push(JSON.parse(JSON.stringify(arr))); // 记录快照
             }
         }
     }
     return arr;
 }
 document.getElementById("sort").onclick=function()
 {
	var i = 0,j = 1,temp;
	len = arrayBubble.length;
	timer = null;
	timer = setInterval(run,25);
	function run() {
		if (i < len) {
			if (j < len) {
				if (arrayBubble[i] > arrayBubble[j]) {
					temp = arrayBubble[i];
					arrayBubble[i] = arrayBubble[j];
					arrayBubble[j] = temp;
					updata();
				}
				j++;
			} else {
			i++;
			j = i + 1;
		}
	} else {
	    clearInterval(timer);
	    return;
	    }
    }
}
 Array.prototype.bubbleSort = function() {
         return bubbleSort(this);
     }
     //随机产生60个10~100的数   
 function initData(number) {
 	arrayBubble = [];
     for (var i = 0; i < number; i++) {
         arrayBubble.push(Math.floor(Math.random() * 90 + 10));
     }
 }
 //渲染数组
 var arrayBubble=[];
 var str="";
 function updata(){
 	var container=document.getElementById("list");
	container.innerHTML="";
	for(i=0;i<=arrayBubble.length-1;i++){
		var lielement=document.createElement("li");
		lielement.innerText=arrayBubble[i];
		lielement.style.height=arrayBubble[i]*2;
		lielement.style.backgroundColor=rancolor();
		lielement.setAttribute("id","li-"+i);
		container.appendChild(lielement);
	}
	document.getElementById("inputbox").value="";
}

 //验证输入是否为数字
 function isNumber(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
 }
 
function getInputValue() {
     if (arrayBubble.length >= 60) throw new Error("队列长度超过60");
     var value = $("#inputbox").value.trim();
     if (!isNumber(value)) throw new Error('输入值无效');
     value = parseInt(value);
     if (value < 10 || value > 100) throw new Error('输入值越界');
     return value;
 }