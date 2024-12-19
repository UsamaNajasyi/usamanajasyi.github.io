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

// Pilih semua gambar di dalam #myprojects
const projectImages = document.querySelectorAll('.project-image');
const modal = document.getElementById('item-detail-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

// Tambah event listener ke setiap gambar
projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    // Ambil data dari atribut gambar
    const title = image.getAttribute('data-title');
    const description = image.getAttribute('data-description');
    const imageSrc = image.getAttribute('data-image');

    // Set konten modal
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;

    // Tampilkan modal
    modal.style.display = 'block';
  });
});

// Tambahkan event listener untuk "See Detail" link
const seeDetailLinks = document.querySelectorAll('.see-detail');
seeDetailLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const cardBody = e.target.closest('.card-body');
    const image = cardBody.querySelector('.project-image');

    // Ambil data dari atribut gambar
    const title = image.getAttribute('data-title');
    const description = image.getAttribute('data-description');
    const imageSrc = image.getAttribute('data-image');

    // Set konten modal
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;

    // Tampilkan modal
    modal.style.display = 'block';
  });
});

// Tutup modal saat tombol "close" diklik
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Tutup modal saat klik di luar modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
