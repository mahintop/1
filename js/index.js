function adjustHeaderSize() {
        const header = document.querySelector('header');
        const logo = document.querySelector('.logo');
        const nav = document.querySelector('nav');

      const headerHeight = logo.offsetHeight > nav.offsetHeight ? logo.offsetHeight : nav.offsetHeight;
        header.style.height = `${headerHeight}px`;
}

    window.addEventListener('resize', adjustHeaderSize);
    adjustHeaderSize(); // Call the function initially to set the initial size
