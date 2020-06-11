define(['jquery', 'js/ztree/jquery.ztree.all.min.js'], function ($) {
	var oDiv = document.getElementById('div1');
	var oDiv2 = document.getElementById('cesiumdiv');
	var timer;
	oDiv.onmouseover = function () {
		startMove(oDiv2.offsetWidth - oDiv.offsetWidth);
	};
	oDiv.onmouseout = function () {
		startMove(oDiv2.offsetWidth - 20);
	};
	function startMove(end) {
		clearInterval(timer);
		timer = setInterval(function () {
			var speed = 0;
			if (oDiv.offsetLeft > end) {
				speed = -10;
				if (oDiv.offsetLeft <= end) {
					clearInterval(timer);
				}
				if (oDiv.offsetLeft > end) {
					oDiv.style.left = oDiv.offsetLeft + speed + 'px';
				}
			}
			if (oDiv.offsetLeft < end) {
				speed = 10;
				if (oDiv.offsetLeft >= end) {
					clearInterval(timer);
				}
				if (oDiv.offsetLeft < end) {
					oDiv.style.left = oDiv.offsetLeft + speed + 'px';
				}
			}
		}, 30);
	}
	var zTreeObj;
	var setting = {
		check: {
			enable: true, //true / false 分别表示 显示 / 不显示 复选框或单选框
			autoCheckTrigger: true, //true / false 分别表示 触发 / 不触发 事件回调函数
			chkStyle: 'checkbox', //勾选框类型(checkbox 或 radio）
			chkboxType: { Y: 'p', N: 's' }, //勾选 checkbox 对于父子节点的关联关系
		},
		callback: {
			onCheck: zTreeOnCheck,
		},
	};
	var zNodes = [
		{
			name: '影像',
			open: true,
			icon: '/img/layer/layers.png',
			children: [
				{ name: '谷歌', icon: '/img/layer/image.png' },
				{ name: '高德', icon: '/img/layer/image.png' },
			],
		},
		{ name: '地形', open: true, icon: '/img/layer/layers.png', children: [{ name: 'Cesium', icon: '/img/layer/dixing.png' }] },
		{ name: '标注', open: true, icon: '/img/layer/layers.png', children: [{ name: '二维地名', icon: '/img/layer/label.png' }] },
		{
			name: '项目',
			open: true,
			icon: '/img/layer/layers.png',
			children: [{ name: '机西高速项目', icon: '/img/layer/project.png', tId: 'project_jsgs' }],
		},
	];
	function zTreeOnCheck(event, treeId, treeNode) {
	
	}
	$(document).ready(function () {
		zTreeObj = $.fn.zTree.init($('#treeDemo'), setting, zNodes);
	});
});
