require.config({
	baseUrl: 'src',
});

require(['common/main'], function (common) {
	'use strict';
	require(['common-ui/main'], function (common) {
		require(['settings/main-app']);
	});
});
