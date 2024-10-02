var list = document.querySelector('.list');
var items = list.querySelectorAll('.list__item');
var openManager = document.querySelector('.openManager');
var hiddenManager = document.querySelector('.hiddenManager');
hiddenManager.addEventListener('click', function(){
    hiddenManager.classList.add('hiddenClass');
    openManager.classList.remove('hiddenClass');
    items[8].classList.add('hiddenClass');
    items[9].classList.add('hiddenClass');
    items[10].classList.add('hiddenClass');
})
openManager.addEventListener('click', function(){
    openManager.classList.add('hiddenClass');
    hiddenManager.classList.remove('hiddenClass');
    items[8].classList.remove('hiddenClass');
    items[9].classList.remove('hiddenClass');
    items[10].classList.remove('hiddenClass');
})
new Swiper ('.blocks',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }})