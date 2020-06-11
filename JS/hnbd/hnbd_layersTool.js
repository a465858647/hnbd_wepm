define(['jquery', 'js/ztree/jquery.ztree.core.js', 'js/ztree/jquery.ztree.excheck.js', 'js/ztree/jquery.ztree.exedit.js'], function ($) {
	var oDiv = document.getElementById('div1');
	var oDiv2 = document.getElementById('cesiumdiv');
	var timer;
	oDiv.onmouseover = function () {
		startMove(oDiv2.offsetWidth - oDiv.offsetWidth);
	};
	oDiv.onmouseout = function () {
		startMove(oDiv2.offsetWidth - 40);
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
				console.log('oDiv.offsetLeft结果是：' + oDiv.offsetLeft);
				console.log('end是：' + end);
			}
		}, 30);
	}
	var zTreeObj;
	var setting = {};
	var zNodes = [
		{ name: 'test1', open: true, children: [{ name: 'test1_1' }, { name: 'test1_2' }] },
		{ name: 'test2', open: true, children: [{ name: 'test2_1' }, { name: 'test2_2' }] },
	];
	$(document).ready(function () {
		zTreeObj = $.fn.zTree.init($('#treeDemo'), setting, zNodes);
	});
});
