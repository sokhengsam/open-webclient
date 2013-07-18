/*************************************************************
**	create base backend api class for next extend
*************************************************************/

function BaseJSNetwork() {}
	
BaseJSNetwork.prototype.getRequest = function(requestUrl,requestData,responseHandler,failureHandler) {
					$.get(requestUrl , requestData, function(response){
						responseHandler(response);
				      	},"json")
				     	.error(function(jqXHR, textStatus, errorThrown){
						failureHandler(jqXHR, textStatus, errorThrown);
				    	});
				    }

BaseJSNetwork.prototype.postRequest = function(requestUrl,requestData,responseHandler,failureHandler) {
						$.post(requestUrl , requestData, function(response, textStatus, jqXHR){
							responseHandler(response, textStatus, jqXHR);
						},"json")
						.error(function(jqXHR, textStatus, errorThrown){
							failureHandler(jqXHR, textStatus, errorThrown);
						});
				      }

BaseJSNetwork.prototype.deleteRequest = function(requestUrl,responseHandler,failureHandler){
						$.ajax({
							type: "DELETE",
							url: requestUrl,
							dataType: "json",
							success: function(data, textStatus, jqXHR) {
									responseHandler(data);
								 },
							error: function(jqXHR, textStatus, errorThrown) {
									failureHandler(jqXHR, textStatus, errorThrown);
								}
						});
					}


