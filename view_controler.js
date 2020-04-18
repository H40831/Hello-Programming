function $(selector,foreach_callback=null) {
	let elements = document.querySelectorAll(selector);
	if( elements.length === 0 ) return undefined;
	if( foreach_callback === null ) return elements;
	for(let i=0; i<elements.length; i++){
		foreach_callback(elements[i]);
	}
	return elements;
};

function change_color(color_name) {
	$('[class^=color-]', target => {
		for(let i=0; i<target.classList.length; i++){
			if(target.classList[i].indexOf('color-') === 0){
				target.classList.remove(target.classList[i]);
			}
		}
		target.classList.add('color-'+color_name);
	})
}

