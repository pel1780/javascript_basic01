const TOP_BANNER = document.querySelector('.top_banner');
const TOP_BANNER_BTN = document.querySelector('.top_banner i');

const TOP_BANNER_CLOSE = () => {
    TOP_BANNER.classList.add('on');
}

TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_CLOSE);

const TAB_MENU = document.querySelectorAll('.tab_menu>li');
const TAB_CONTENT = document.querySelectorAll('.tab_content>li');
// 유사배열로 html을 선탁하였음.
console.log(TAB_MENU);

const BY = ['<li>menu01</li>', '<li>menu02</li>', '<li>menu03</li>']
console.log(TAB_CONTENT[0]);

// TAB_MENU[0].addEventListener('click', () => {
//     TAB_CONTENT[0].classList.add('on');
//     TAB_CONTENT[1].classList.remove('on');
//     TAB_CONTENT[2].classList.remove('on');
// })
// TAB_MENU[1].addEventListener('click', () => {
//     TAB_CONTENT[0].classList.remove('on');
//     TAB_CONTENT[1].classList.add('on');
//     TAB_CONTENT[2].classList.remove('on');
// })
// TAB_MENU[2].addEventListener('click', () => {
//     TAB_CONTENT[0].classList.remove('on');
//     TAB_CONTENT[1].classList.remove('on');
//     TAB_CONTENT[2].classList.add('on');
// })

TAB_MENU.forEach(function (it, idx) {
    console.log(it, idx);
    it.addEventListener('click', () => {
        TAB_MENU.forEach(it => it.classList.remove('on'));
        TAB_MENU[idx].classList.add('on');
        TAB_CONTENT.forEach(it => it.classList.remove('on'));
        TAB_CONTENT[idx].classList.add('on');
    });
});

new Swiper('.mainVisual', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});

const SUB_TEXT = ['제품01', '제품02', '제품03', '제품04', '제품05']

const SUB_SLIDE = new Swiper('.subSlide', {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    // },
    slideActiveClass: 'on',
    pagination: {
        el: ".dots",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' bb">' + SUB_TEXT[index] + "</span>";
        },
    },
});

const LEFT_ARROW = document.querySelector('.sub i:nth-child(1)');
const RIGHT_ARROW = document.querySelector('.sub i:nth-child(2)');

LEFT_ARROW.addEventListener('click', () => {
    SUB_SLIDE.slidePrev(2500);
});
RIGHT_ARROW.addEventListener('click', () => {
    SUB_SLIDE.slideNext(2500);
});