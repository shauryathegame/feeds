function popupfeed(url) {


  // string to specify window features

	var myfeatures = "toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,status=yes,resizable=no,width=800,height=400";
	
	thefeed = window.open( url, 'feed2jspop', myfeatures);
	if (window.focus) {thefeed.focus()}
}
