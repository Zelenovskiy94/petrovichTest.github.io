const container = document.querySelector('.product__area')

let pagesBlock = document.querySelector('.pages')
	let pagesAmount = (data.length)/10;
	for(let i = 1; i <= pagesAmount; i++) {
	pagesBlock.innerHTML += `<li class='page' id='${i}'>${i}</li>`
	}
	let pageDefault =  document.getElementById('1')
	pageDefault.classList.add('active-page')
	$('.pages').slick({
		infinite: false,
		prevArrow: '<span id="prev-slick" class="prev arrow"></span>',
		nextArrow: '<span id="next-slick" class="next arrow"></span>',	
	  	slidesToShow: 3,
	  	slidesToScroll: 3
	});
	let list = document.querySelectorAll('.page')
	for(let i = 0; i < list.length; i++){
		list[i].addEventListener('click', function () {
		let active = document.querySelector('.pages .active-page')
		if(active) {
			active.classList.remove('active-page')
		}
		this.classList.add('active-page')
		pages(event.target.id)
		})
	}




function pages(page = 1) {
	container.innerHTML =''
	if(page > 0) {
		page = (page-1)*10
	}
	for(let i = page; i < page + 10; i++) {

	let box = 2.47;         
	if (data[i].unit == 'шт.'){
		box = 3
	} else{box = 2.47}

	let str = data[i].assocProducts;
	var priceGoldAlt = Math.floor(data[i].priceGoldAlt);
	var priceRetailAlt = Math.floor(data[i].priceRetailAlt);
    container.innerHTML += `<div id="products_section">
        <div class="products_page pg_0">
            <div class="product product_horizontal">                                
                <span class="product_code">Код: ${data[i].code.substr(5)}</span>
                <div class="product_status_tooltip_container">
                    <span class="product_status">Наличие</span>
                </div>                                
                <div class="product_photo">
                    <a href="#" class="url--link product__link">
                        <img src="https:${data[i].primaryImageUrl}">
                    </a>                                    
                </div>
                <div class="product_description">
                    <a href="#" class="product__link">${data[i].title}</a>
                </div>
                <div class="product_tags hidden-sm">
                    <p>Могут понадобиться:</p>
                    <a href="#" class="url--link"> ${str.replace(/;/g,`,</a> <a href="#" class="url--link">`)}</a>
                </div>
                <div class="product_units">
                    <div class="unit--wrapper">
                        <div class="unit--select unit--active">
                            <p class="ng-binding">За ${data[i].unitAlt}</p>
                        </div>
                        <div class="unit--select">
                            <p class="ng-binding">За упаковку</p>
                        </div>
                    </div>
                </div>
                <p class="product_price_club_card">
                    <span class="product_price_club_card_text">По карте<br>клуба</span>
                    <span class="goldPrice">${priceGoldAlt}</span>
                    <span class="rouble__i black__i">
                        <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                        </svg>
                     </span>
                </p>
                <p class="product_price_default">
                    <span class="retailPrice">${priceRetailAlt}</span>
                    <span class="rouble__i black__i">
                        <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                        </svg>
                     </span>
                </p>
                <div class="product_price_points">
                    <p class="ng-binding">Можно купить за ${Math.floor(data[i].priceGoldAlt * data[i].unitRatioAlt* 100) / 100} балла</p>
                </div>
                <div class="list--unit-padd"></div>
                <div class="list--unit-desc">
                    <div class="unit--info">
                        <div class="unit--desc-i"></div>
                        <div class="unit--desc-t">
                            <p>
                                <span class="ng-binding">Продается упаковками:</span>
                                <span class="unit--infoInn">1 упак. = ${(data[i].priceRetail / data[i].priceRetailAlt).toFixed(2) + ' '+ data[i].unitAlt}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="product__wrapper">
                    <div class="product_count_wrapper">
                        <div class="stepper">
                            <input class="product__count stepper-input" type="text" value="1">
                            <span class="stepper-arrow up"></span>
                            <span class="stepper-arrow down"></span>                                            
                        </div>
                    </div>
                    <span class="btn btn_cart" data-url="/cart/" data-product-id="${data[i].productId}">
                        <svg class="ic ic_cart">
                           <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                        </svg>
                        <span class="ng-binding">В корзину</span>
                    </span>
                </div>
            </div>
        </div>
    </div>`	

		function counter() {
			let stepper = document.querySelectorAll('.stepper');
			let unitWrapper = document.querySelectorAll('.unit--wrapper')
			let goldPrice = document.querySelectorAll('.goldPrice')
			let retailPrice = document.querySelectorAll('.retailPrice')
			for(let j = 0; j < stepper.length; j++){
				document.addEventListener('click', function(event){
					let input = stepper[j].querySelector('.product__count')
					let up = stepper[j].querySelector('.up')
					let down = stepper[j].querySelector('.down')
					let value = input.getAttribute('value')
					value = +value
					if(event.target == up) {
						 value += 1
						 input.setAttribute('value', value)
					}
					if(event.target == down && value != 1) {
						 value -= 1
						 input.setAttribute('value', value)						
					}
					let active = unitWrapper[j].querySelectorAll('.unit--select')
					let binding = unitWrapper[j].querySelectorAll('.ng-binding')
					if(event.target == binding[0] ){
						active[0].classList.add('unit--active')
						active[1].classList.remove('unit--active')
							goldPrice[j].textContent = Math.floor(data[j + page*10].priceGoldAlt)
							retailPrice[j].textContent =  Math.floor(data[j + page*10].priceRetailAlt)

						
					}
					if(event.target == binding[1]){
						active[1].classList.add('unit--active')
						active[0].classList.remove('unit--active')
						goldPrice[j].textContent = data[j + page*10].priceGold
						retailPrice[j].textContent =  data[j + page*10].priceRetail
					}
				})					
			}

		}
		counter()
	}
}
pages()