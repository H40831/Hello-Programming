var mySwiper = new Swiper('.swiper-container', {
	keyboard: true,
	paginationClickable: true,
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
});

[...document.getElementsByClassName('swiper-slide')].forEach( (element,index)=> {
	element.setAttribute("id",'page'+(index));
});

/*
document.addEventListener('keydown', (event) => {
	let key = event.key;
	if(key=='ArrowLeft'){

		//return;
	}
	if(key=='ArrowRight'){

		//return;
	}
	if(key=='ArrowUp'){

		//return;
	}
	if(key=='ArrowDown'){

		//return;
	}
});
*/

