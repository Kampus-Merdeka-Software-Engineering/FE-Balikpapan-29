// NAVBAR

    // Script scrolling navbar
    let navbar = document.querySelector('.navbar');
    document.addEventListener('scroll' , () => {
        if(window.top.scrollY > 19) {
            navbar.classList.add('scroll');
        } else{
            navbar.classList.remove('scroll');
            navbar.style.transition = '.4s ease';
        }
    })

    // Script untuk klik menu hamburger
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list ul');

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });