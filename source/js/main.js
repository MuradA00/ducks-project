import './_vendor';
// import './_functions';
// import './_components';


const accsItems = document.querySelectorAll('.faq-list__item');
const mobNav = document.querySelector('.header-nav');
const panelMenu = document.querySelector('.menu-burger');
const winModal = document.querySelector('#win-modal')
const winButton = document.querySelector('#win-button');
const roulettePanelButtons = document.querySelectorAll('.roulette-toggle');
const soundToggler = document.querySelector('.heading-sound')
const body = document.body;
const upgradeTabsButtons = document.querySelectorAll('.upgrade-tabs__item');

const closeModalByOuterClick = (modal) => {
  const modalContainer = modal.querySelector('.modal-inner');

  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      hideModal();
      modal.classList.remove('modal--active');
    }
  })
}

const hideModal = () => {
  body.classList.remove('locked')
  document.documentElement.classList.remove('locked')
}

const showModal = () => {
  body.classList.add('locked');
  document.documentElement.classList.add('locked');
}

if (soundToggler) {
  soundToggler.addEventListener('click', () => soundToggler.classList.toggle('heading-sound--disabled'))
}

if (winButton) {
  winButton.addEventListener('click', () => {
    winModal.classList.add('modal--active');

    closeModalByOuterClick(winModal);
    showModal();
  })
}

const handleToggleItems = (array, activeClass) => {
  if (array.length > 0) {
    array.forEach(item => {
      item.addEventListener('click', () => {
        array.forEach(item => item.classList.remove(activeClass));
        item.classList.add(activeClass);
      })
    })
  }
}

handleToggleItems(upgradeTabsButtons, 'upgrade-tabs__item--active');
handleToggleItems(roulettePanelButtons, 'roulette-toggle--active');

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

