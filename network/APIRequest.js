/*************************************************************
**	create base backend api class for next extend
*************************************************************/

function APIRequest() {}

/* All requestion class need to extend BaseJSNetwork class*/
APIRequest.prototype = new BaseJSNetwork();

APIRequest.prototype.baseBackendUrl = "";

/*example to api request method to backend */
APIRequest.prototype.getUploadUrl = function(requestData,responseHandler,failureHandler){
						requestData = addAccessTokenParam(requestData);
						var requestUrl = this.baseBackendUrl + "blob/v10/";
						this.getRequest(requestUrl, requestData, responseHandler, failureHandler);
					}

