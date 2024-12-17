// Ambil elemen-elemen dari DOM
let form = document.getElementById("form");

// Elemen untuk FORM REGISTER
let registrasi = document.getElementById("registrasi");
let garis = document.getElementById("garis");
let text1 = document.getElementById("text1");
let daftarButton = document.getElementById("daftarButton");
let userInput = document.getElementById("userInput");
let passInput = document.getElementById("passInput");

// Elemen untuk FORM LOGIN
let regis = document.getElementById("regis");
let text = document.getElementById("text");
let login = document.getElementById("login");
let garis1 = document.getElementById("garis1");
let loginButton = document.getElementById("loginButton");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");

// Fungsi untuk menyembunyikan dan menampilkan elemen
function toggleDisplay(elements, display) {
    elements.forEach(element => {
        element.style.display = display;
    });
}

// Inisialisasi tampilan awal
toggleDisplay([registrasi, garis, userInput, passInput, daftarButton, text1], "none");

// Fungsi untuk menampilkan form registrasi
function formRegis() {
    toggleDisplay([registrasi, garis, userInput, passInput, daftarButton, text1], "block");
    toggleDisplay([text, login, garis1, loginButton, usernameInput, passwordInput], "none");
}

// Fungsi untuk menampilkan form login
function formLogin() {
    toggleDisplay([registrasi, garis, userInput, passInput, daftarButton, text1], "none");
    toggleDisplay([text, login, garis1, loginButton, usernameInput, passwordInput], "block");
}

// Fungsi untuk mendaftar
function onDaftar() {
    localStorage.setItem("username", userInput.value);
    localStorage.setItem("password", passInput.value);

    // Sembunyikan form registrasi dan tampilkan form login
    toggleDisplay([registrasi, garis, userInput, passInput, daftarButton, text1], "none");
    toggleDisplay([text, login, garis1, loginButton, usernameInput, passwordInput], "block");
    
    alert("Anda Telah Terdaftar");
}

// Fungsi untuk login
function onLogin() {
    if (usernameInput.value == userInput.value && passwordInput.value == passInput.value) {
        // Redirect to another page if login is successful
        window.location.href = 'web.html'; 
    } else {
        alert('Invalid username or password');
    }
}

// FORM PEMBELIAN
function sendToWhatsApp(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const productId = document.getElementById('product-id').value;
    const ukuran = document.getElementById('size').value;
    const address = document.getElementById('address').value;

    // Membuat pesan untuk WhatsApp
    const message = `Nama: ${name}\nNomor Telepon: ${phone}\nEmail: ${email}\nID Produk: ${productId}\nUkuran/Size: ${ukuran}\nAlamat: ${address}`;
    
    // Mengganti spasi dengan %20 untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Nomor WhatsApp
    const whatsappNumber = '6285893017949';

    // Membuat URL WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Mengarahkan ke URL WhatsApp
    window.open(whatsappURL, '_blank');
}

// FORM CONTACT
function sendContactToWhatsApp() {
    // Mengambil nilai dari input
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    // Membuat pesan untuk WhatsApp
    const message = `Name: ${name}\nEmail: ${email}`;
    
    // Mengganti spasi dengan %20 untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Nomor WhatsApp
    const whatsappNumber = '085893017949';

    // Membuat URL WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Mengarahkan ke URL WhatsApp
    window.open(whatsappURL, '_blank');
}

// DETAIL
function kemejaDetail() {
    const detailElement = document.querySelector('.detail');
    const close = document.getElementById('close');

    close.onclick = function() {
        detailElement.style.transform = 'scale(0)';
    }
    console.log("berhasil");
    detailElement.style.transform = 'scale(1)';
}
function celanaDetail() {
    const detailElement = document.querySelector('.detailC');
    const close = document.getElementById('closeC');

    close.onclick = function() {
        detailElement.style.transform = 'scale(0)';
    }
    console.log("berhasil");
    detailElement.style.transform = 'scale(1)';
}
function sepatuDetail() {
    const detailElement = document.querySelector('.detailS');
    const close = document.getElementById('closeS');

    close.onclick = function() {
        detailElement.style.transform = 'scale(0)';
    }
    console.log("berhasil");
    detailElement.style.transform = 'scale(1)';
}