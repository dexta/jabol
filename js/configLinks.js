d("body").ready(function(){
	d("body").load("css","css/basic.css");
	d("body").load("js","links/default.js");
	if(inception.length>0 || false) {
		console.log("Inception "+inception);
		for(var l=0,ll=inception.length;l<ll;l++) {
			console.log("no "+l+" => "+inception[l].path);
			d("body").load(inception[l].typ,inception[l].path);
		}
	}
});