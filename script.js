const class_mac = document.getElementsByClassName('mac');
const class_win = document.getElementsByClassName('win');
if(window.navigator.userAgent.toLowerCase().indexOf('mac os x')){
	for(let i=0; i<class_mac.length; i++){
		class_mac[i].classList.remove('hide');
	}
	for(let i=0; i<class_win.length; i++){
		class_win[i].classList.add('hide');
	}
}else{
	for(let i=0; i<class_mac.length; i++){
		class_mac[i].classList.add('hide');
	}
	for(let i=0; i<class_win.length; i++){
		class_win[i].classList.remove('hide');
	}
}

//idとdata-hashにページ番号を割り振る
[...document.getElementsByClassName('swiper-slide')].forEach( (element,index)=> {
	element.setAttribute("id",'page'+(index));
	element.dataset.hash = (index);
});

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
});

var mySwiper = new Swiper('.swiper-container', {
	keyboard: true,
	paginationClickable: true,
	hashNavigation:true,
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
});
mySwiper.on('slideChange',()=>{
	if(mySwiper.progress === 1){
		openEndModal();
	}else{
		closeEndModal();
	}
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

