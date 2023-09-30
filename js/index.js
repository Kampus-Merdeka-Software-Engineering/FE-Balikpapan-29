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

// BOOKING START

    // Kode untuk menampilkan Pop Up Booking
    // Ambil elemen-elemen yang diperlukan
    const openPopupButton = document.getElementById("openPopup");
    const closePopupButton = document.getElementById("closePopup");
    const popupForm = document.getElementById("popupForm");

    // Tambahkan event listener untuk tombol "Booking"
    openPopupButton.addEventListener("click", function() {
        popupForm.style.display = "block"; // Tampilkan popup saat tombol "Booking" diklik
    });
    
    // Tambahkan event listener untuk tombol "Tutup" di popup
    closePopupButton.addEventListener("click", function() {
        popupForm.style.display = "none"; // Sembunyikan popup saat tombol "Tutup" diklik
    });
    // ---------------------------------------------------------------------------------------- //

    // KODE UNTUK MEMILIH DOCTOR BERDASARKAN SERVICE YANG DIPILIH
    document.addEventListener('DOMContentLoaded', function () {
        const serviceSelect = document.getElementById('service');
        const doctorSelect = document.getElementById('doctor');

        // Mappings antara service dan doctor
        const doctorMap = {
            'Tooth Filling': ['Carter Dias', 'Tatiana Dias', 'Jaylon Calzoni'],
            'Tooth Whitening': ['Emery Kenter'],
            'Denture Fitting' : ['Carter Dias', 'Tatiana Dias', 'Jaylon Calzoni'],
            'Dental Health Consultation': ['Tatiana Dias', 'Jaylon Calzoni'],
            'Tooth Extraction' : ['Tatiana Dias', 'Jaylon Calzoni'],
            'Professional Scalling' : ['Philip Aminoff'],
            'Dental Check Up' : ['Tatiana Dias', 'Jaylon Calzoni'],
            'Braces Installation': ['Jocelyn Dokidis']
        };

        // Fungsi untuk memperbarui pilihan doctor berdasarkan service yang dipilih
        serviceSelect.addEventListener('change', function () {
            const selectedservice = serviceSelect.value;
            const availabledoctor = doctorMap[selectedservice] || [];

            // Hapus semua pilihan doctor yang ada
            doctorSelect.innerHTML = '';

            // Tambahkan pilihan doctor yang sesuai dengan service yang dipilih
            availabledoctor.forEach(doctor => {
                const option = document.createElement('option');
                option.textContent = doctor;
                doctorSelect.appendChild(option);
            });
        });
    });

    // ---------------------------------------------------------------------------------------- //

    // Kode agar hari minggu tidak dapat di pilih, dikarenakan hari libur.
    document.addEventListener("DOMContentLoaded", function () {
        const dateInput = document.getElementById("date");

        // Mengecek apakah browser mendukung notifikasi
        if ('Notification' in window) {
            Notification.requestPermission();
        }

        // Menggunakan notifikasi daripada alert
        dateInput.addEventListener("change", function () {
            const selectedDate = new Date(dateInput.value);
            if (selectedDate.getDay() === 0) {
                if (Notification.permission === 'granted') {
                    const notification = new Notification("Hari Minggu Tidak Tersedia", {
                        body: "Silakan pilih tanggal lain untuk reservasi.",
                        // icon: "path/to/icon.png" // Ganti dengan URL ikon Anda
                    });
                    
                    // Bisa menambahkan event click untuk menangani tindakan lebih lanjut
                    notification.onclick = function () {
                        // Lakukan tindakan setelah notifikasi diklik (jika diperlukan)
                    };
                } else if (Notification.permission !== 'denied') {
                    Notification.requestPermission().then(permission => {
                        if (permission === 'granted') {
                            // Notifikasi diizinkan, pilih tanggal lain
                        } else {
                            // Notifikasi ditolak
                            // Anda dapat menampilkan pesan alternatif jika notifikasi tidak diizinkan
                            alert("Silakan pilih tanggal lain untuk reservasi.");
                        }
                    });
                } else {
                    // Notifikasi sudah pernah ditolak, tampilkan pesan alternatif
                    alert("Silakan pilih tanggal lain untuk reservasi.");
                }
                dateInput.value = ""; // Kosongkan input tanggal
            }
        });
    });