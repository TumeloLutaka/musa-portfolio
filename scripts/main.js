
toggleBtn = document.querySelector('#toggle-btn')
navLinks = document.querySelector('#nav-links')

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})