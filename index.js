function hellTriangle(elements) {
	while (elements.length !== 1) {
	  var len = elements.length;
	  var row = [];
	  var current = elements[len-2];
	  var currentLen = current.length - 1;
	  var end = elements[len-1];

	  for ( var i = 0; i <= currentLen; i++ ) {
	    row.push(Math.max(current[i] + end[i] || 0, current[i] + end[i+1] || 0) )
	  }

	  elements.pop();
	  elements.pop();

	  elements.push(row);
	}

	return parseInt(elements.toString());
}