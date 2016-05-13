if (typeof Blazy == 'function') { 
	
	var imgs = document.querySelectorAll('.with-image');
	
	Array.prototype.forEach.call(imgs, function(el, i){
		
		if (el.classList)
			el.classList.add('image-ready');
		else
			el.className += ' ' + 'image-ready';
	});
	
	
	var bLazy = new Blazy({
		selector: '.with-image',
	});
	
	
}