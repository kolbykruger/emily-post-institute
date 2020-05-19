//Blog Categories (if a selectbox)
let blogCategories = {
    elem: document.querySelector('select#blog_categories'),
    init: function() {
        if (this.elem) {
            this.elem.addEventListener('change', function(e) {
                window.location.href = window.location.href.split('?')[0] + '?category=' + e.target.value
            });
        }
    }
}.init();

//Responsive iFrame
$('iframe[src*="youtube"],iframe[src*="vimeo"]').wrap('<div class="responsive-iframe"/>');

//Accordion
document.addEventListener('DOMContentLoaded', function() {
    let accordion = document.querySelectorAll('.accordion-title');

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            let panel = this.nextElementSibling;

            if (panel.style.maxHeight){
                this.classList.remove('open');
                panel.style.maxHeight = null;
                panel.setAttribute('aria-hidden', true);
                panel.setAttribute('aria-expanded', false);
            } else {
                this.classList.add('open');
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.setAttribute('aria-hidden', false);
                panel.setAttribute('aria-expanded', true);
            }
        });
    }
});

//Flickity Carousel
$('.carousel .group').flickity({
    cellSelector: '.slide',
    wrapAround: true,
    adaptiveHeight: false,
    cellAlign: 'center',
    prevNextButtons: true,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 8000,
});

$('.features .group').flickity({
    cellSelector: '.item',
    contain: true,
    adaptiveHeight: true,
    cellAlign: 'left',
    prevNextButtons: true,
    pageDots: false,
    imagesLoaded: true,
    groupCells: 2,
});

//Menu Books
document.addEventListener('DOMContentLoaded', function() {
    let bestSellers = document.querySelector('.books-menu .menu-section:nth-of-type(1) .book-list');
    let bestSellerChildren = '';
    let newProducts = document.querySelector('.books-menu .menu-section:nth-of-type(2) .book-list');
    let newProductsChildren = '';

    if (bestSellers) {
        bestSellerChildren = bestSellers.querySelectorAll('.book-item');
    }
    if (newProducts) {
        newProductsChildren = newProducts.querySelectorAll('.book-item');
    }

    if (bestSellerChildren.length > 3) {
        //do slider
        var menuSliderOne = new Flickity(bestSellers, {
            cellSelector: '.book-item',
            wrapAround: false,
            adaptiveHeight: true,
            cellAlign: 'left',
            contain: true,
            groupCells: 3,
            prevNextButtons: false,
            pageDots: true,
            imagesLoaded: true,
        });
    }

    if (newProductsChildren.length > 3) {
        //do slider
        var menuSliderOne = new Flickity(newProducts, {
            cellSelector: '.book-item',
            wrapAround: false,
            adaptiveHeight: true,
            cellAlign: 'left',
            contain: true,
            groupCells: 3,
            prevNextButtons: false,
            pageDots: true,
            imagesLoaded: true
        });
    }


});

//Universal Tables
$('table').wrap("<div class='universal-table'></div>");
