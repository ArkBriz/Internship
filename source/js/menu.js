const body = document.querySelector('.page-body');
const menu = document.querySelector('.header__navigation');
const menuToggler = document.querySelector('.header__menu-button');
const submenuTogglers = menu.querySelectorAll('.header__navigation-toggle');
const menuLinks = menu.querySelectorAll('.header__navigation-link, .header__subnavigation-link');

const resetTabindex = () => {
  menuLinks.forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });
  submenuTogglers.forEach((toggler) => {
    toggler.setAttribute('tabindex', '-1');
  });
};

const updateTabIndex = () => {
  resetTabindex();

  if (menu.classList.contains('header__navigation--closed')) {
    return;
  }

  const links = menu.querySelectorAll('.header__navigation-link');

  links.forEach((link) => {
    link.setAttribute('tabindex', '0');
  });

  submenuTogglers.forEach((toggler) => {
    toggler.setAttribute('tabindex', '0');

    const isSubmenuOpen = toggler.classList.contains('header__navigation-toggle--active');

    if (isSubmenuOpen) {
      const openedMenuParent = toggler.closest('.header__navigation-item');

      if(openedMenuParent) {
        const sublinks = openedMenuParent.querySelectorAll('.header__subnavigation-link');
        sublinks.forEach((sublink) => {
          sublink.setAttribute('tabindex', '0');
        });
      }
    }
  });
};

const toggleMenu = () => {
  const isClosed = menu.classList.contains('header__navigation--closed');

  menu.classList.toggle('header__navigation--closed');
  menuToggler.classList.toggle('header__menu-button--open');
  body.classList.toggle('page-body--menu-open');

  menuToggler.setAttribute('aria-expanded', isClosed ? 'true' : 'false');

  updateTabIndex();
};

const closeMenu = () => {
  if (!menu.classList.contains('header__navigation--closed')) {
    menu.classList.add('header__navigation--closed');
    menuToggler.classList.remove('header__menu-button--open');
    body.classList.remove('page-body--menu-open');

    menuToggler.setAttribute('aria-expanded', 'false');

    resetTabindex();
  }
};

updateTabIndex();

menuToggler.addEventListener('click', () => toggleMenu());

submenuTogglers.forEach((toggler) => {
  toggler.addEventListener('click', () => {
    const isExpanded = toggler.classList.toggle('header__navigation-toggle--active');
    toggler.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

    updateTabIndex();
  });
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });

  link.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      closeMenu();
    }
  });
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMenu();
  }
});

document.addEventListener('click', (evt) => {
  const isClickInsideMenu = menu.contains(evt.target);
  const isClickOnMenuToggler = menuToggler.contains(evt.target);

  if (!isClickInsideMenu && !isClickOnMenuToggler) {
    closeMenu();
  }
});

document.addEventListener('focusin', (evt) => {
  if (!menu.classList.contains('header__navigation--closed') &&
    !menu.contains(evt.target) &&
    evt.target !== menuToggler) {
    closeMenu();
  }
});
