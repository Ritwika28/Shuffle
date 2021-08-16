window.onload = function(){
var elements = document.querySelectorAll('#item-group > div');
elements.forEach((elem,index) => elem.classList.add("class"+(index+1)));
}

function sorted(elems) {
	
	var toSort = Array.prototype.slice.call(elems, 0);

    toSort.sort(function(a,b){
        return parseInt(a.innerText) - parseInt(b.innerText);
    });
	
	for(var i = 1; i < toSort.length; i++) {
	elems[i].parentNode.appendChild(toSort[i]);
	}
	
    
}

function shuffle(elems) {
 
    allElems = (function(){
	var ret = [], l = elems.length;
	while (l--) { ret[ret.length] = elems[l]; }
	return ret;
    })();
 
    var shuffled = (function(){
        var l = allElems.length, ret = [];
        while (l--) {
            var random = Math.floor(Math.random() * allElems.length),
                randEl = allElems[random].cloneNode(true);
            allElems.splice(random, 1);
            ret[ret.length] = randEl;
			
        }
		
        return ret; 
    })(), l = elems.length;
	
 
    while (l--) {
        elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
        elems[l].parentNode.removeChild(elems[l]);
    }
 
}

document.getElementById('shuffle')
        .addEventListener('click', function (event) {
            shuffle( document.querySelectorAll('#item-group > div'))
});

document.getElementById('sort')
        .addEventListener('click', function (event) {
            sorted( document.querySelectorAll('#item-group > div'))
});
