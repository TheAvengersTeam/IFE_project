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
function renderAqiList() {

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
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {
	<form>
        <input name="添加" type="button" value="add-btn" onclick="addBtnHandle()"/> ;
        <input name="删除" type="button" value="delete-btn" onclick="delBtnHandle()"/>
    </form> 
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
