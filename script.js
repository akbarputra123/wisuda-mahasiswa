// ================= STATUS =================
let musicStarted = false;

// 🔥 cegah browser simpan posisi scroll
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// ================= RESET SAAT REFRESH =================
window.onload = () => {
  // kembali ke atas
  window.scrollTo(0, 0);

  // kunci scroll lagi
  document.body.classList.remove("scroll-active");

  // sembunyikan halaman 2
  const page2 = document.getElementById("page2");
  if (page2) {
    page2.style.display = "none";
    page2.classList.remove("show-page");
  }
};

// ================= BUKA UNDANGAN =================
function bukaUndangan() {
  const music = document.getElementById("bg-music");

  // play musik sekali
  if (!musicStarted && music) {
    music.play().catch(() => {});
    musicStarted = true;
  }

  // aktifkan scroll
  document.body.classList.add("scroll-active");

  const page2 = document.getElementById("page2");

  // tampilkan halaman 2 + animasi
  page2.style.display = "block";

  setTimeout(() => {
    page2.classList.add("show-page");

    page2.scrollIntoView({
      behavior: "smooth"
    });
  }, 100);


}

// ================= KIRIM UCAPAN KE WHATSAPP =================
document.getElementById("ucapanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const hp = document.getElementById("hp").value;
  const ucapan = document.getElementById("ucapan").value;

  // validasi sederhana
  if (!nama || !hp || !ucapan) {
    alert("Harap isi semua data!");
    return;
  }

  // nomor tujuan (pakai format internasional TANPA 0)
  const nomorTujuan = "6282197480491";

  // format pesan
  const pesan = `Halo, saya ${nama}%0A
No HP: ${hp}%0A
Ucapan:%0A${ucapan}`;

  // link WhatsApp
  const url = `https://wa.me/${nomorTujuan}?text=${pesan}`;

  // buka WhatsApp
  window.open(url, "_blank");
});