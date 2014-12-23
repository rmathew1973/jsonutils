//Converts array of name value pairs to object
module.exports.convertNameValueArrayToObject = function(arr){
	var args = {};
	arr.forEach(function(x){
		args[x.name] = x.value;
	});
	return args;	
};

//Converts object to name value pairs
module.exports.convertObjectToNameValuePairs = function(obj){
	var arr = [];
	Object.key(obj).forEach(function(key){
		arr.push({name:key,value:obj[key]});
	});
	return arr;
};

//Sorts array of objects by name of object element
//Object element may be in the form of name.subname to sort by field of value of element
module.exports.sortObjectArrayByKey = function(arr,key){
	arr.sort(function(a,b){
		var arg1,arg2;
		name.split(".").forEach(function(x){
			if(arg1){
				arg1 = arg1[x];
				arg2 = arg2[x];
			}else{
				arg1 = a[x];
				arg2 = b[x];
			}
		});
		if(arg1.toString().toLowerCase() < arg2.toString().toLowerCase()){
			return -1;
		}
		if(arg1.toString().toLowerCase() > arg2.toString().toLowerCase()){
			return 1;
		}
		return 0;
	});
	return this;	
};

module.exports.combineObjects = function(){
	var obj = {};
	arguments.forEach(function(x){
		Object.keys(x).forEach(function(key){
			obj[key] = x[key];
		});
	});
	return obj;
};