var _gaq = _gaq || [];
(function(){
	var GoogleAnalytics = function(account){
		//private var
		_gaq.push(['_setAccount', account]);
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	};
	//global fun
	GoogleAnalytics.prototype = {
			trackPageView: function(page){
								_gaq.push(['_trackPageview', page]);
								//console.log(page);
						   },
			trackEvent: function(category,name,label,value){
								_gaq.push(['_trackEvent', category,name,label]);
								//console.log(label);
							},
			trackSocial: function(network,socialAction,target,pagePath){
								_gaq.push(['_trackSocial', network,socialAction,target,pagePath]);
								//console.log(socialAction);
							},
			trackCustomVar: function(index,name,value,scope){
				 				_gaq.push(['_setCustomVar',index,name,value,scope]);
				 				//console.log(value);
							}
	};
	if(typeof exports !== 'undefined') exports.GoogleAnalytics = GoogleAnalytics;
	else window.GoogleAnalytics = GoogleAnalytics;
})();

//var googleAnalytics = new GoogleAnalytics('UA-39211749-1');
var googleAnalytics = new GoogleAnalytics('UA-39955842-6');//stage server
//var googleAnalytics = new GoogleAnalytics('UA-39955842-4');// production server