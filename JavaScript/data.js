// FORM PEMBELIAN
document.getElementById('btn-whatsapp').onclick = function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value; // Menambahkan email
    var productId = document.getElementById('product-id').value; // Menambahkan ID produk
    var address = document.getElementById('address').value;

    // Membuat pesan untuk WhatsApp
    var message = "Nama: " + name + 
                "\nNomor Telepon: " + phone + 
                "\nEmail: " + email + // Menambahkan email ke pesan
                "\nID Produk: " + productId + // Menambahkan ID produk ke pesan
                "\nAlamat: " + address;

    // Membuat URL WhatsApp
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=6281413263843&text=' + encodeURIComponent(message);
    
    // Membuka URL WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
};

// FORM CONTACT
document.querySelector('.contact-container button').onclick = function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Membuat pesan untuk WhatsApp
    var message =   "Nama: " + name + 
                    "\nEmail: " + email;

    // Membuat URL WhatsApp
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=6281413263843&text=' + encodeURIComponent(message);
    
    // Membuka URL WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
};