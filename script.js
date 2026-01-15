// --- KONFIGURASI DATA (MODEL) ---
// Karakter '#' artinya kotak hitam (blok).
// Huruf artinya kotak jawaban.
// Angka (misal '1') adalah penanda nomor soal di kotak tersebut.
const puzzleLayout = [
//['0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0','1','2','3'] // Indeks Kolom
  ['#','#','#','1','A','L','1','C','H','I','T','E','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], // Baris 0
  ['#','#','#','#','#','#','N','#','#','#','#','#','#','2','2','B','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], // Baris 1
  ['#','3','#','#','#','#','D','#','#','#','#','3','m','M','G','#','#','#','4','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], // Baris 2
  ['#','F','#','#','#','#','E','#','#','#','#','#','#','#','4','A','M','B','R','I','U','M','#','#','#','#','#','#','#','#','#','#','#','#'], // Baris 3
  ['#','I','#','#','#','#','S','#','#','#','#','#','#','#','M','I','#','#','A','#','#','#','#','#','5','#','#','#','#','#','#','#','#','#'], // Baris 4
  ['5','O','R','F','I','R','I','#','#','#','6','#','#','#','#','R','#','#','F','#','#','#','#','#','U','#','#','#','#','#','#','#','#','#'], // Baris 5
  ['#','L','#','#','#','#','6','A','M','B','O','R','A','#','#','#','#','#','I','#','#','#','#','#','7','A','K','A','U','#','#','#','#','#'], // Baris 6
  ['#','I','#','#','#','#','#','#','#','#','L','#','8','A','S','I','G','7','T','#','#','#','#','#','O','#','#','#','#','#','#','#','#','#'], // Baris 7
  ['#','T','#','#','#','#','#','#','#','#','A','#','#','#','#','#','#','C','#','#','#','#','#','#','I','#','#','#','#','#','#','#','#','#'], // Baris 8
  ['#','#','#','#','#','#','#','#','#','#','R','#','#','#','#','#','#','H','#','#','9','L','8','T','S','E','R','#','#','#','#','#','#','#'], // Baris 9
  ['#','#','#','#','#','#','#','#','9','#','I','#','#','#','#','#','#','T','#','#','#','#','N','#','#','#','#','#','#','#','#','#','#','#'], // Baris 10
  ['#','#','#','#','#','#','#','10','A','R','S','T','E','N','11','Z','P','Y','R','A','12','I','D','#','#','#','#','#','#','#','#','#','#','#'], // Baris 11
  ['#','#','#','#','#','#','#','O','O','#','A','#','#','#','T','#','#','O','#','#','I','#','O','#','#','#','#','#','#','#','#','#','#','#'], // Baris 12
  ['#','#','#','#','#','#','#','E','L','#','S','#','#','#','R','#','#','S','#','#','N','#','G','#','#','#','#','#','#','#','13','#','#','#'], // Baris 13
  ['#','#','14','#','#','#','#','L','I','#','I','#','#','#','O','#','#','A','#','#','O','#','E','#','#','#','#','#','#','#','N','#','#','#'], // Baris 14
  ['#','#','11','E','O','L','I','A','N','#','#','#','#','#','M','#','#','U','#','#','R','#','N','#','#','#','#','#','#','#','T','#','#','#'], // Baris 15
  ['#','#','L','#','#','#','#','C','#','#','#','#','#','#','A','#','#','R','#','#','#','#','I','#','#','#','#','#','#','#','I','#','#','#'], // Baris 16
  ['#','#','D','#','#','#','#','A','#','#','#','#','#','#','T','#','#','U','#','#','#','#','12','A','R','S','15','I','F','I','K','A','S','I'], // Baris 17
  ['#','#','I','#','#','13','E','N','G','#','#','#','#','#','O','#','#','S','#','#','#','#','#','#','#','#','O','#','#','#','L','#','#','#'], // Baris 18
  ['#','#','V','#','#','#','#','T','#','#','#','#','14','A','L','C','#','#','#','#','#','#','#','#','#','#','B','#','#','#','I','#','#','#'], // Baris 19
  ['#','#','I','#','#','#','#','H','#','#','#','#','#','#','I','#','#','#','#','#','#','#','#','#','#','#','A','#','#','#','N','#','#','#'], // Baris 20
  ['#','#','A','#','#','#','#','#','#','#','#','#','#','#','15','R','I','N','I','L','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], // Baris 21
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], // Baris 22
];


// Kunci Jawaban (Koordinat x, y mulai dari 0)
// Format: [baris, kolom, huruf_benar]
const answerKey = [
  // Baris 0
  {r: 0, c: 3, val: 'M'}, {r: 0, c: 4, val: 'A'}, {r: 0, c: 5, val: 'L'}, {r: 0, c: 6, val: 'A'}, {r: 0, c: 7, val: 'C'}, {r: 0, c: 8, val: 'H'}, {r: 0, c: 9, val: 'I'}, {r: 0, c: 10, val: 'T'}, {r: 0, c: 11, val: 'E'},
  // Baris 1
  {r: 1, c: 6, val: 'N'}, {r: 1, c: 13, val: '1'}, {r: 1, c: 14, val: '2'}, {r: 1, c: 15, val: '7'},
  // Baris 2
  {r: 2, c: 1, val: 'O'}, {r: 2, c: 6, val: 'D'}, {r: 2, c: 11, val: '1'}, {r: 2, c: 12, val: '9'}, {r: 2, c: 13, val: '2'}, {r: 2, c: 14, val: '9'}, {r: 2, c: 18, val: 'G'},
  // Baris 3
  {r: 3, c: 1, val: 'F'}, {r: 3, c: 6, val: 'E'}, {r: 3, c: 14, val: 'K'}, {r: 3, c: 15, val: 'A'}, {r: 3, c: 16, val: 'M'}, {r: 3, c: 17, val: 'B'}, {r: 3, c: 18, val: 'R'}, {r: 3, c: 19, val: 'I'}, {r: 3, c: 20, val: 'U'}, {r: 3, c: 21, val: 'M'},
  // Baris 4
  {r: 4, c: 1, val: 'I'}, {r: 4, c: 6, val: 'S'}, {r: 4, c: 14, val: 'M'}, {r: 4, c: 15, val: 'I'}, {r: 4, c: 18, val: 'A'}, {r: 4, c: 24, val: 'D'},
  // Baris 5
  {r: 5, c: 0, val: 'P'}, {r: 5, c: 1, val: 'O'}, {r: 5, c: 2, val: 'R'}, {r: 5, c: 3, val: 'F'}, {r: 5, c: 4, val: 'I'}, {r: 5, c: 5, val: 'R'}, {r: 5, c: 6, val: 'I'}, {r: 5, c: 10, val: 'P'}, {r: 5, c: 15, val: 'R'}, {r: 5, c: 18, val: 'F'}, {r: 5, c: 24, val: 'U'},
  // Baris 6
  {r: 6, c: 1, val: 'L'}, {r: 6, c: 6, val: 'T'}, {r: 6, c: 7, val: 'A'}, {r: 6, c: 8, val: 'M'}, {r: 6, c: 9, val: 'B'}, {r: 6, c: 10, val: 'O'}, {r: 6, c: 11, val: 'R'}, {r: 6, c: 12, val: 'A'}, {r: 6, c: 18, val: 'I'}, {r: 6, c: 24, val: 'B'}, {r: 6, c: 25, val: 'A'}, {r: 6, c: 26, val: 'K'}, {r: 6, c: 27, val: 'A'}, {r: 6, c: 28, val: 'U'},
  // Baris 7
  {r: 7, c: 1, val: 'I'}, {r: 7, c: 10, val: 'L'}, {r: 7, c: 12, val: 'M'}, {r: 7, c: 13, val: 'A'}, {r: 7, c: 14, val: 'S'}, {r: 7, c: 15, val: 'I'}, {r: 7, c: 16, val: 'G'}, {r: 7, c: 17, val: 'I'}, {r: 7, c: 18, val: 'T'}, {r: 7, c: 24, val: 'O'},
  // Baris 8
  {r: 8, c: 1, val: 'T'}, {r: 8, c: 10, val: 'A'}, {r: 8, c: 17, val: 'C'}, {r: 8, c: 24, val: 'I'},
  // Baris 9
  {r: 9, c: 10, val: 'R'}, {r: 9, c: 17, val: 'H'}, {r: 9, c: 20, val: 'G'}, {r: 9, c: 21, val: 'L'}, {r: 9, c: 22, val: 'E'}, {r: 9, c: 23, val: 'T'}, {r: 9, c: 24, val: 'S'}, {r: 9, c: 25, val: 'E'}, {r: 9, c: 26, val: 'R'},
  // Baris 10
  {r: 10, c: 8, val: 'K'}, {r: 10, c: 10, val: 'I'}, {r: 10, c: 17, val: 'T'}, {r: 10, c: 22, val: 'N'},
  // Baris 11
  {r: 11, c: 7, val: 'C'}, {r: 11, c: 8, val: 'A'}, {r: 11, c: 9, val: 'R'}, {r: 11, c: 10, val: 'S'}, {r: 11, c: 11, val: 'T'}, {r: 11, c: 12, val: 'E'}, {r: 11, c: 13, val: 'N'}, {r: 11, c: 14, val: 'S'}, {r: 11, c: 15, val: 'Z'}, {r: 11, c: 16, val: 'P'}, {r: 11, c: 17, val: 'Y'}, {r: 11, c: 18, val: 'R'}, {r: 11, c: 19, val: 'A'}, {r: 11, c: 20, val: 'M'}, {r: 11, c: 21, val: 'I'}, {r: 11, c: 22, val: 'D'},
  // Baris 12
  {r: 12, c: 7, val: 'O'}, {r: 12, c: 8, val: 'O'}, {r: 12, c: 10, val: 'A'}, {r: 12, c: 14, val: 'T'}, {r: 12, c: 17, val: 'O'}, {r: 12, c: 20, val: 'I'}, {r: 12, c: 22, val: 'O'},
  // Baris 13
  {r: 13, c: 7, val: 'E'}, {r: 13, c: 8, val: 'L'}, {r: 13, c: 10, val: 'S'}, {r: 13, c: 14, val: 'R'}, {r: 13, c: 17, val: 'S'}, {r: 13, c: 20, val: 'N'}, {r: 13, c: 22, val: 'G'}, {r: 13, c: 30, val: 'A'},
  // Baris 14
  {r: 14, c: 2, val: 'V'}, {r: 14, c: 7, val: 'L'}, {r: 14, c: 8, val: 'I'}, {r: 14, c: 10, val: 'I'}, {r: 14, c: 14, val: 'O'}, {r: 14, c: 17, val: 'A'}, {r: 14, c: 20, val: 'O'}, {r: 14, c: 22, val: 'E'}, {r: 14, c: 30, val: 'N'},
  // Baris 15
  {r: 15, c: 2, val: 'A'}, {r: 15, c: 3, val: 'E'}, {r: 15, c: 4, val: 'O'}, {r: 15, c: 5, val: 'L'}, {r: 15, c: 6, val: 'I'}, {r: 15, c: 7, val: 'A'}, {r: 15, c: 8, val: 'N'}, {r: 15, c: 14, val: 'M'}, {r: 15, c: 17, val: 'U'}, {r: 15, c: 20, val: 'R'}, {r: 15, c: 22, val: 'N'}, {r: 15, c: 30, val: 'T'},
  // Baris 16
  {r: 16, c: 2, val: 'L'}, {r: 16, c: 7, val: 'C'}, {r: 16, c: 14, val: 'A'}, {r: 16, c: 17, val: 'R'}, {r: 16, c: 22, val: 'I'}, {r: 16, c: 30, val: 'I'},
  // Baris 17
  {r: 17, c: 2, val: 'D'}, {r: 17, c: 7, val: 'A'}, {r: 17, c: 14, val: 'T'}, {r: 17, c: 17, val: 'U'}, {r: 17, c: 22, val: 'K'}, {r: 17, c: 23, val: 'A'}, {r: 17, c: 24, val: 'R'}, {r: 17, c: 25, val: 'S'}, {r: 17, c: 26, val: 'T'}, {r: 17, c: 27, val: 'I'}, {r: 17, c: 28, val: 'F'}, {r: 17, c: 29, val: 'I'}, {r: 17, c: 30, val: 'K'}, {r: 17, c: 31, val: 'A'}, {r: 17, c: 32, val: 'S'}, {r: 17, c: 33, val: 'I'},
  // Baris 18
  {r: 18, c: 2, val: 'I'}, {r: 18, c: 5, val: 'S'}, {r: 18, c: 6, val: 'E'}, {r: 18, c: 7, val: 'N'}, {r: 18, c: 8, val: 'G'}, {r: 18, c: 14, val: 'O'}, {r: 18, c: 17, val: 'S'}, {r: 18, c: 26, val: 'O'}, {r: 18, c: 30, val: 'L'},
  // Baris 19
  {r: 19, c: 2, val: 'V'}, {r: 19, c: 7, val: 'T'}, {r: 19, c: 12, val: 'T'}, {r: 19, c: 13, val: 'A'}, {r: 19, c: 14, val: 'L'}, {r: 19, c: 15, val: 'C'}, {r: 19, c: 26, val: 'B'}, {r: 19, c: 30, val: 'I'},
  // Baris 20
  {r: 20, c: 2, val: 'I'}, {r: 20, c: 7, val: 'H'}, {r: 20, c: 14, val: 'I'}, {r: 20, c: 26, val: 'A'}, {r: 20, c: 30, val: 'N'},
  // Baris 21
  {r: 21, c: 2, val: 'A'}, {r: 21, c: 14, val: 'T'}, {r: 21, c: 15, val: 'R'}, {r: 21, c: 16, val: 'I'}, {r: 21, c: 17, val: 'N'}, {r: 21, c: 18, val: 'I'}, {r: 21, c: 19, val: 'L'}
];

const soalMendatar = [
  "1. Batu hijau dekorasi di Piala Dunia tahun 2022",
  "2. Jumlah gunungapi aktif di Indonesia",
  "3. Gas alam berbahaya hasil semburan lumpur dan gas",
  "4. Ledakan evolusi kehidupan dikenal sebagai ledakan",
  "5. Emas dan perak yang berasosiasi dengan tembaga disebut tembaga",
  "6. Gunung penyebab tahun tanpa musim panas",
  "7. Vegetasi pencegah abrasi pantai",
  "8. Fosil manusia gua pawon ditemukan di gunung",
  "9. Penyebab tsunami di Greenland",
  "10. Puncak gunung tertinggi di Indonesia",
  "11. Bentuk lahan akibat proses erosi angin",  
  "12. Proses pelapukan dan erosi kimia terumbu karang dan batugamping yang terangkat menjadi daratan",
  "13. Simbol persegi hitam pada peta sebaran kekayaan sumber daya geologi melambangkan",
  "14. Batu dengan skala Mohs 1)",
  "15. Tugu yang menandakan posisi 175 meter menuju titik penemuan fosil Pithecantropus erectus"
];

const soalMenurun = [
  "1. Alat paleolitik dari Pasir Panyandakan terbuat dari bahan batu",
  "2. Panjang Sesar Lembang",
  "3. Runtunan asal kerak samudera yang muncuL ke permukaan oleh proses tektonik",
  "4. Bahan pembuat pensil",
  "5. Penemu Pithecanthropus erectus (the missing link)",
  "6. Mikroskop yang bisa mengatur arah cahaya sehingga mineral di dalam batu tampak bias gandanya yang berwarna-warni",
  "7. Satu-satunya dinosaurus yang ditemukan di Indonesia",
  "8. Sinkhole-pelarutan merupakan salah satu faktor penyebab penurunan muka tanah yang bersifat",
  "9. Hasil pelapukan dari batuan granit",
  "10. Ikan purba yang masih hidup sampai saat ini",
  "11. Struktur sedimen tertua di bumi yang terbentuk dari aktivitas mikroorganisme",
  "12. Logam yang ditemukan dalam jumlah relatif sedikit",
  "13. Salah satu perangkap migas yang berbentuk lipatan cembung ke atas",
  "14. Kota tempat terjadinya gempa bumi terbesar di dunia",
  "15. Danau kaldera terbesar di dunia",
];
// --- FUNGSI RENDER (VIEW) ---
// Mengadaptasi logika HtmlRenderer.scala untuk menggambar grid
function initGame() {
  const gridContainer = document.getElementById('tts-grid');
  
  // Set ukuran grid CSS berdasarkan data layout
  gridContainer.style.gridTemplateColumns = `repeat(${puzzleLayout[0].length}, 40px)`;
  
  puzzleLayout.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');

      if (cell === '#') {
        cellDiv.classList.add('block');
      } else {
        // Cek apakah ada nomor soal (jika karakter adalah angka)
        if (!isNaN(cell) && cell !== ' ') {
             const numberSpan = document.createElement('span');
             numberSpan.classList.add('question-number');
             numberSpan.innerText = cell;
             cellDiv.appendChild(numberSpan);
        }

        const input = document.createElement('input');
        input.maxLength = 1;
        input.dataset.row = rowIndex;
        input.dataset.col = colIndex;
        input.classList.add('tts-input');
        
        // Auto-focus logic (pindah kotak otomatis)
        input.addEventListener('keyup', (e) => handleInput(e, input));
        
        cellDiv.appendChild(input);
      }
      gridContainer.appendChild(cellDiv);
    });
  });

  // Render Soal
  renderClues();
}

function renderClues() {
  const ulAcross = document.getElementById('clues-across');
  const ulDown = document.getElementById('clues-down');
  
  soalMendatar.forEach(s => {
    let li = document.createElement('li'); li.innerText = s; ulAcross.appendChild(li);
  });
  soalMenurun.forEach(s => {
    let li = document.createElement('li'); li.innerText = s; ulDown.appendChild(li);
  });
}

function handleInput(e, currentInput) {
    // Logika sederhana untuk pindah ke kotak berikutnya
    if (currentInput.value.length === 1) {
       // Cari input berikutnya di DOM (bisa ditingkatkan logikanya)
       // Untuk prototype, user bisa tap manual atau pakai Tab
    }
}

// --- LOGIKA VALIDASI ---
function cekJawaban() {
  const nama = document.getElementById("nama").value.trim();
  if (!nama) { alert("Mohon isi nama dulu!"); return; }

  let benarSemua = true;
  const inputs = document.querySelectorAll('.tts-input');
  
  // Reset warna
  inputs.forEach(i => i.style.backgroundColor = "white");

  inputs.forEach(input => {
    const r = parseInt(input.dataset.row);
    const c = parseInt(input.dataset.col);
    const userVal = input.value.toUpperCase();

    // Cari kunci jawaban untuk koordinat ini
    const key = answerKey.find(k => k.r === r && k.c === c);
    
    if (key) {
      if (userVal !== key.val) {
        benarSemua = false;
        input.style.backgroundColor = "#ffcccc"; // Merah muda jika salah
      } else {
        input.style.backgroundColor = "#ccffcc"; // Hijau muda jika benar
      }
    }
  });

  if (benarSemua) {
    localStorage.setItem("namaPengunjung", nama);
    alert("Selamat! Jawaban benar.");
    window.location.href = "certificate.html";
  } else {
    alert("Masih ada yang salah (ditandai merah). Semangat!");
  }
}

// Jalankan saat loading
window.onload = initGame;