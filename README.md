jsonutils
=========

Various helper methods for use with json objects and arrays of json objects

This is a work in progress

convertNameValueArrayToObject takes an array of name value pairs and converts it to an object

convertObjectToNameValuePairs does the opposite of convertNameValueArrayToObject.  It takes an object and converts it to an array of name value pairs

sortObjectArrayByKey sorts an array by the key passed in.

combineObjects takes an indeterminate number of objects and combines them into one object.

sort_by can be passed to sort function of array to allow sorting on multiple keys of objects in array