Package.describe({
	summary: "jQuery-isotope for Meteor (including centered masonry)"	
});

Package.on_use(function (api) {
	api.use('jquery','client');
	api.add_files([
		'jquery.isotope.js',
		'centeredMasonry.js',
		'style.css'
	],'client');
});