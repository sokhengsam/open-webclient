(function($){
	$.fn.scrollPagination = function(options){
		if(!$(this).is($(window))) throw new IllegalDOMBindingException("Unsupport DOM Binding");
		var options = $.extend($.fn.scrollPagination.defaultOptions, options);
 		$(window).scroll(function () { 
			if ($(window).scrollTop() >= $(document).height() - $(window).height() && !options.isAjaxLoading) {
			     options.isAjaxLoading = true;
			     options.callbackHandler(function(){
				options.isAjaxLoading = false;
			     });
			}
		});
		$.fn.scrollPagination.addLoading();
	};
	$.fn.scrollPagination.addLoading = function(options){
		var options = $.extend($.fn.scrollPagination.defaultOptions, options);
		options.loadingContainer.addClass(options.loadingClass);			
	}
	$.fn.scrollPagination.defaultOptions = {
		callbackHandler: "",
		loadingClass: "",
		loadingContainer: "",
		isAjaxLoading: false
	}
	
})(jQuery);
