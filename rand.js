var geoJson = require('countries.geo.json');

var features = geoJson.features.map(function(feat) {
	feat.properties.density = Math.random() * 100;
	return feat;
});
console.log(JSON.stringify(geoJson));
