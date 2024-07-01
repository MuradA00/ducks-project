import './_vendor';
// import './_functions';
// import './_components';


const accsItems = document.querySelectorAll('.faq-list__item');
const mobNav = document.querySelector('.header-nav');
const panelMenu = document.querySelector('.menu-burger');
const roulettePanelButtons = document.querySelectorAll('.roulette-toggle');
const body = document.body;

roulettePanelButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.remove('roulette-toggle--active');
  })
});

const menuHandler = () => {
  panelMenu.classList.toggle('menu-burger--active');

  if (panelMenu.classList.contains('menu-burger--active')) {
    mobNav.classList.add('header-nav--active')
    document.documentElement.style.overflow = 'hidden';
    body.style.overflow = 'hidden'
  } else {
    mobNav.classList.remove('header-nav--active')
    document.documentElement.style.overflow = '';
    body.style.overflow = ''
  }
}

if (mobNav) {
  panelMenu.addEventListener('click', menuHandler);
}

if (accsItems) {
  accsItems.forEach(item => {
    const itemHeader = item.querySelector('.faq-list__header')
    itemHeader.addEventListener('click', function() {
      item.classList.toggle('faq-list__item--active')
      const hiddenBlock = item.querySelector('.faq-list__hidden')
      const hiddenContent = item.querySelector('.faq-list__content')

      if (item.classList.contains('faq-list__item--active')) {
        hiddenBlock.style.maxHeight = `${hiddenContent.scrollHeight}px`;
      }
      if (!item.classList.contains('faq-list__item--active')) {
        hiddenBlock.style.maxHeight = 0;
      }
    })
  })

}

if (Swiper) {
  const swiper = new Swiper('.slider-main', {
    speed: 300,
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      clickable: true,
      el: '.slider-pagination'
    }
  });
}

