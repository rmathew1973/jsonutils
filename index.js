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

var sort_by;
(function() {
    // utility functions
    var default_cmp = function(a, b) {
            if (a == b) return 0;
            return a < b ? -1 : 1;
        },
        getCmpFunc = function(primer, reverse) {
            var dfc = default_cmp, // closer in scope
                cmp = default_cmp;
            if (primer) {
                cmp = function(a, b) {
                    return dfc(primer(a), primer(b));
                };
            }
            if (reverse) {
                return function(a, b) {
                    return -1 * cmp(a, b);
                };
            }
            return cmp;
        };

    // actual implementation
    sort_by = function() {
        var fields = [],
            n_fields = arguments.length,
            field, name, reverse, cmp;

        // preprocess sorting options
        for (var i = 0; i < n_fields; i++) {
            field = arguments[i];
            if (typeof field === 'string') {
                name = field;
                cmp = default_cmp;
            }
            else {
                name = field.name;
                cmp = getCmpFunc(field.primer, field.reverse);
            }
            fields.push({
                name: name,
                cmp: cmp
            });
        }

        // final comparison function
        return function(A, B) {
            var a, b, name, result;
            for (var i = 0; i < n_fields; i++) {
                result = 0;
                field = fields[i];
                name = field.name;

                result = field.cmp(A[name], B[name]);
                if (result !== 0) break;
            }
            return result;
        }
    }
}());
model.exports.sort_by = sort_by;