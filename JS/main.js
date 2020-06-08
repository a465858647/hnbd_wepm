require.config({
	baseUrl: '../JS',
	paths: {
		jquery: 'jquery.min',
		ceshi: 'ceshi',
	},
});
require(['ceshi'], function (ceshi) {
	alert(ceshi.name);
	ceshi.md1();
});
