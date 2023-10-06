// Fungsi untuk menampilkan pop-up
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Fungsi untuk menyembunyikan pop-up
function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Menambahkan event listener untuk tombol "How to Payment"
var paymentButton = document.getElementById("show-popup-button");
paymentButton.addEventListener("click", showPopup);

// Menambahkan event listener untuk tombol tutup pop-up
var closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", hidePopup);

// Anda dapat memanggil hidePopup() di bawah ini jika ingin menutup pop-up secara default saat halaman dimuat.
hidePopup();
