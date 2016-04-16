/** 
* aqiData，存储用户输入的空气指数数据 
* 示例格式： 
* aqiData = { 
*    "北京": 90, 
*    "上海": 40 
* }; 
*/ 
var aqiData = {}; 
var cityInput = document.getElementById("aqi-city-input"); 
var aqiInput = document.getElementById("aqi-value-input"); 
 
/** 
 * 从用户输入中获取数据，向aqiData中增加一条数据 
 * 然后渲染aqi-list列表，增加新增的数据 
 */ 

function addAqiData()  
{ 
    var city=document.getElementById("aqi-city-input").value;
    var index = document.getElementById("aqi-value-input").value; 
     
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5\uf900-\ufa2d]+$/)) 
    { 
    	alert("只允许输入中英文"); 
    	city=""; 
    } 
    else if(!index.match(/^[0-9]+$/)) 
    { 
    	alert("只允许输入数字"); 
    	index=""; 
    } 
     
    aqiData[city]=index; 
} 

 
/** 
* 渲染aqi-table表格 
*/ 

function renderAqiList(){ 
    //定义表格	  
	var table=document.getElementById('aqi-table'); //valentina 
    //清除所有的子节点 
//  var childs = table.childNodes; 
//  for(var i = childs.length - 1; i >= 0; i--) {  
//  table.removeChild(childs[i]);  
//} 

    //标题行
    if(!document.getElementById("title"))
    document.getElementById("aqi-table").innerHTML = '<tr id="title"><td>城市</td><td>空气质量</td><td>操作</td></tr>';

    //定义button 
    var btn2 = document.createElement("button");  
    btn2.setAttribute('id','del-btn');
 	btn2.innerText = "删除";  
 	
    var tr1=document.createElement('tr'); 
    var tdCity=document.createElement('td');  
    var tdAircondition= document.createElement('td'); 
    var tdOperate= document.createElement('td');   
    var city,value;
    for(var p in aqiData){
    	city=p;
    	value=aqiData[p];
    }
    if(!city || !value){
    	return ;	
    }
    tdCity.innerText =city;//= document.getElementById("aqi-city-input").value;  
    tdAircondition.innerText=value;// = document.getElementById("aqi-value-input").value;  
    btn2.addEventListener('click',function(){delBtnHandle(city);});
    tdOperate.appendChild(btn2);
    tr1.appendChild(tdCity);  
    tr1.appendChild(tdAircondition);  
    tr1.appendChild(tdOperate);
    document.getElementById("aqi-table").appendChild(tr1); 
} 
 
/** 
 * 点击add-btn时的处理逻辑 
 * 获取用户输入，更新数据，并进行页面呈现的更新 
 */ 
function addBtnHandle() { 
    addAqiData(); 
    renderAqiList(); 
} 
 
/** 
 * 点击各个删除按钮的时候的处理逻辑 
 * 获取哪个城市数据被删，删除数据，更新表格显示 
 */ 
function delBtnHandle(city) { 
    // do sth. 
    delete aqiData[city]; 
    renderAqiList(); 
} 

 
function init() { 
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数 
    document.getElementById("add-btn").addEventListener("click", addBtnHandle) 
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数 
    document.getElementById("aqi-table").addEventListener("click", function(event){ 
        if(event.target.nodeName.toLowerCase() === 'button') 
            delBtnHandle.call(null, event.target.dataset.city);
    }) 
} 

init(); 
