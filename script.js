let isEndPage = false;
document.addEventListener('keydown', (event) => {
	let key = event.key;
	if(key=='ArrowUp'){
		toLarge();
		//return;
	}
	if(key=='ArrowDown'){
		toSmall();
		//return;
	}

	if(key=='ArrowRight'){
		if(isEndPage){
			openEndModal();
		}
	}
	if(key=='ArrowLeft'){
		if(isEndPage){
			closeEndModal();
		}
	}

});

var mySwiper = new Swiper('.swiper-container', {
	keyboard: true,
	paginationClickable: true,
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
});
mySwiper.on('slideChange',()=>{
	if(mySwiper.realIndex === mySwiper.slides.length-1){
		isEndPage = true;
	}else{
		isEndPage = false;
	}
});

[...document.getElementsByClassName('swiper-slide')].forEach( (element,index)=> {
	element.setAttribute("id",'page'+(index));
});

fontSize = 1.00;
paddingTop = 5;
swiperContainer = document.getElementsByClassName('swiper-container')[0];
function toLarge() {
	fontSize = parseFloat( (fontSize + 0.06).toFixed(2) );
	paddingTop = parseFloat( (paddingTop + 0.3).toFixed(1) );
	document.body.style.fontSize = fontSize + 'em';
	swiperContainer.style.paddingTop = paddingTop + '%';
}
function toSmall() {
	fontSize = parseFloat( (fontSize - 0.06).toFixed(2) );
	paddingTop = parseFloat( (paddingTop - 0.3).toFixed(1) );
	document.body.style.fontSize = fontSize + 'em';
	swiperContainer.style.paddingTop = paddingTop + '%';
}

const endModal = document.getElementById('endModal');
function openEndModal() {
	endModal.style.opacity = 1;
	endModal.style.pointerEvents = 'auto';
}
function closeEndModal() {
	endModal.style.opacity = 0;
	endModal.style.pointerEvents = 'none';
}

