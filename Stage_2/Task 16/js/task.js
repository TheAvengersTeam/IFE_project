/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() 
{
    var city = document.getElementsByName("aqi-city-input").value;
    var index = document.getElementsByName("aqi-value-input").value;
    
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
	var table=document.createElement('aqiTable');
    table.setAttribute('style','width: 450px;');
    //将标题添加进表格 
    table.appendChild(caption);
    //调用createTr()方法生成标题行并将其添加到table中。 
    table.appendChild(createTr('城市','空气质量','操作')); 
    //定义button
    var btn = document.createElement("button"); 
 	btn.onclick = function(){ 
 		delBtnHandle(tr); 
 	} 
 	btn.innerHTML = "删除"; 
    //for循环json对象,然后将循环到的对象通过createTr()方法生成行，添加到table中 
    for(var i=0;i<data.length;i++){ 
    table.appendChild(createTr(data[i].city,data[i].aircondition),btn); 
    }  
    document.getElementById("aqiTable").appendChild(tr);
}

    var createTr = function(city,aircondition,operate){
        var tr=document.createElement('tr');
        var tdCity=document.createElement('td'); 
        tdCity.innerHTML = city; 
        var tdAircondition= document.createElement('td'); 
        tdAircondition.innerHTML = aircondition; 
        tr.appendChild(tdCity); 
        tr.appendChild(tdAircondition); 
        return tr;      
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
function delBtnHandle(strCity) {
  // do sth.
  delete aqiData[strCity];       //删除掉获取到的城市的数据
  renderAqiList();
}

function init() {
    var btn=document.getElementById("add-btn");
   
    btn.addEventListener("click",function(){
       
        addBtnHandler();
   
    },false);
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var btn=document.getElementById("del-btn");
   
    btn.addEventListener("click",function(){
       
        delBtnHandler();
   
    },false);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
