function iterativeLog (array) {
  array.forEach(function(element, index){
    console.log(index + ": " + element)
  })
};

function iterate(callBack) {
 var myArr =['a', 'b', 'c']
 myArr.forEach(callBack)
 return myArr
}

function doToArray(array, callBack) {
	array.forEach(callBack)
}
