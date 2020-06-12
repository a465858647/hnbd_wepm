define(['jquery'], function ($) {
	$('#jixigaosu').on('click', addJxgsProject);
	function addJxgsProject() {
		var jxgsNode = ztreeObj.getNodeByParam('name', '机西高速项目', null);
		var flag = jxgsNode.checked;
		ztreeObj.checkNode(jxgsNode, !flag, true, true);
	}
});
