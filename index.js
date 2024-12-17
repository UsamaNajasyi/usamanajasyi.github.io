// Menutup navbar otomatis setelah klik tautan
document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    // Menutup navbar setelah tautan diklik
    var navbarCollapse = document.getElementById('navbarNav');
    var navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Memicu aksi collapse
    }
  });
});

// listener untuk scroll
window.addEventListener('scroll', function () {
  var socialIcons = document.querySelector('.social-icons');

  // Posisi scroll dari atas halaman
  var scrollPosition = window.scrollY;

  // Jika scroll lebih dari 100px, sembunyiin tombol sosial media
  if (scrollPosition > 100) {
    socialIcons.classList.add('hidden');
  } else {
    socialIcons.classList.remove('hidden');
  }
});
