// ================= STATUS =================
let musicStarted = false;

// 🔥 cegah browser simpan posisi scroll
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// ================= AMBIL NAMA TAMU =================
function getNamaTamu() {
  const params = new URLSearchParams(window.location.search);
  return params.get("to");
}

// ================= FORMAT NAMA =================
function formatNama(nama) {
  return nama
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

// ================= SAAT HALAMAN LOAD =================
window.onload = () => {
  // kembali ke atas
  window.scrollTo(0, 0);

  // kunci scroll
  document.body.classList.remove("scroll-active");

  // sembunyikan halaman 2
  const page2 = document.getElementById("page2");
  if (page2) {
    page2.style.display = "none";
    page2.classList.remove("show-page");
  }

  // ================= SET NAMA TAMU =================
  const nama = getNamaTamu();

  if (nama) {
    const guestElement = document.getElementById("guestName");

    if (guestElement) {
      const namaRapi = formatNama(decodeURIComponent(nama));
      guestElement.innerText = "Bpk/Ibu " + namaRapi;
    }
  }

  // ================= EVENT FORM =================
  const form = document.getElementById("ucapanForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const hp = document.getElementById("hp").value.trim();
      const ucapan = document.getElementById("ucapan").value.trim();

      if (!nama || !hp || !ucapan) {
        alert("Harap isi semua data!");
        return;
      }

      const nomorTujuan = "6282188988853";

      const pesan = `Halo, saya ${nama}%0A
No HP: ${hp}%0A
Ucapan:%0A${ucapan}`;

      const url = `https://wa.me/${nomorTujuan}?text=${pesan}`;

      window.open(url, "_blank");
    });
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

  if (page2) {
    page2.style.display = "block";

    setTimeout(() => {
      page2.classList.add("show-page");

      page2.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  }
}