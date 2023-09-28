// NAVBAR
    let navbar = document.querySelector('.navbar');
    document.addEventListener('scroll' , () => {
        if(window.top.scrollY > 19) {
            navbar.classList.add('scroll');
        } else{
            navbar.classList.remove('scroll');
            navbar.style.transition = '.4s ease';
        }
    })

    // menu hamburger
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list ul');

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

// CONTACT

    // alert email
    function validateForm() {
        let x = document.forms["contact-form"]["email"].value;
        if (x == "") {
        alert("Email must be filled out");
        return false;
        }
    }

    // alert message terkirim
    document.getElementById("btnSend").addEventListener("click", function() {
        alert("Your message has been sent! We will respond soon");

        window.location.href = "/contact.html";
    });