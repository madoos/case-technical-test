const utilMiddleware = {
	enableCORS: function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  console.log('**************');
	  next();
	}
}

export default utilMiddleware;