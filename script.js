const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

const text = "Muhammad Razaan Akbar";
let index = 0;
let isDeleting = false; // Status apakah sedang menghapus atau mengetik

function typeEffect() {
  const typingElement = document.getElementById("typing");
  
  if (isDeleting) {
    // Proses menghapus teks
    typingElement.innerHTML = text.substring(0, index - 1);
    index--;
  } else {
    // Proses mengetik teks
    typingElement.innerHTML = text.substring(0, index + 1);
    index++;
  }

  // Logika untuk berganti mode
  let typingSpeed = 120; // Kecepatan normal mengetik

  if (!isDeleting && index === text.length) {
    // Jika sudah selesai mengetik, tunggu sebentar lalu mulai hapus
    typingSpeed = 2000; // Jeda saat teks sudah lengkap
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    // Jika teks sudah terhapus semua, mulai ketik lagi
    isDeleting = false;
    typingSpeed = 500; // Jeda sebelum mulai mengetik lagi
  } else if (isDeleting) {
    // Kecepatan menghapus teks biasanya lebih cepat
    typingSpeed = 60;
  }

  setTimeout(typeEffect, typingSpeed);
}

window.onload = typeEffect;