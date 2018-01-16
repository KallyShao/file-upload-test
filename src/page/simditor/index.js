/*
* @Author: Administrator
* @Date:   2018-01-16 14:44:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-16 14:45:25
*/

var Simditor = require('simditor');

//富文本编辑区域
var editor = new Simditor({
  	textarea: $('#editor'),
	placeholder: '这里输入文字...',
	toolbar: true,	//设置工具栏的选项，默认为true,显示所有选项
	toolbarFloat: false,	//页面滚动的时候toolbar不固定在顶部
	pasteImage: true,	//默认false
	//富文本区域图片上传的一个占位，一般可以设为图片上传失败时候的一个默认图片
	defaultImage: 'http://img.happymmall.com/dce7d4e1-98f2-485c-a365-e70015c780a1.jpg',	
	// params: {name: '', value: ''},
	upload: {
		url: _cf.getServerUrl('/cfmall/index.php/Home/Center/uppic'),
		params: null,	//上传图片时传给server的其他参数
		fileKey: "richImg[]",
		connectionCount: 1,	//同时选择的图片数量
	},
	success: function(res){
		console.log(res);
	}
	
});