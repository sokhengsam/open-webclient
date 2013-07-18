(function($){
	$.fn.scrollPagination = function(options){
		if(!$(this).is($(window))) throw new IllegalDOMBindingException("Unsupport DOM Binding");
		var options = $.extend(defaultOptions, options);
 		$(window).scroll(function () { 
			if ($(window).scrollTop() >= $(document).height() - $(window).height() && !options.isAjaxLoading) {
			     options.isAjaxLoading = true;
			     options.callbackHandler(function(){
			     options.isAjaxLoading = false;
			     });
			}
		});
		addLoading();
	};
	
	function addLoading(){
		defaultOptions.loadingContainer.addClass(defaultOptions.loadingClass);			
	}
	
	var defaultOptions = {
		callbackHandler: "",
		loadingClass: "",
		loadingContainer: "",
		isAjaxLoading: false
	}
	
})(jQuery);
