// 1.Tuliskan fungsi untuk menghitung jumlah terkecil dan terbesar sebanyak $m element
// dari suatu array[n].

// contoh array
arr = [2, 4, 6, 10, 8];

const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

const countMinMax = (m) => {
  // urutkan array dulu
  sortArr = arr.sort((a, b) => a - b);
  max = sum(sortArr.slice(-m));
  min = sum(sortArr.slice(0, m));
  console.log({ terkecil: min, terbesar: max });
};

// input element m disini
countMinMax(3);

// 2.Tuliskan sebuah fungsi untuk menulis angka dari $m sampai $n, yang mana jika
// angka yang akan ditulis kelipatan 3, maka yang akan ditulis bukan angka melainkan
// tulisan ‘saku’ dan jika angka tersebut kelipatan ‘5’ akan menuliskan ‘mas’. Jika angka
// tersebut kelipatan dari 3 dan 5, maka akan menuliskan ‘sakumas’. Dan jika angka
// tersebut bukan keduanya maka fungsi tersebut akan menuliskan sebuah angka.

const cek = () => {
  if (i % 3 == 0 && i % 5 == 0) return "sakumas";
  if (i % 3 != 0 && i % 5 == 0) return "mas";
  if (i % 3 == 0 && i % 5 != 0) return "saku";
  return i;
};

const angka = (a, b) => {
  if (a > b) {
    console.log("Bilangan awal lebih besar dari bilangan akhir");
  } else {
    let text = "";
    for (i = a; i <= b; i++) {
      text += cek(i);
    }
    console.log(text);
  }
};

angka(1, 15);

// 3.1 Tuliskan query untuk menampilkan Jumlah siswa di setiap kelasnya.

// SELECT kelas,COUNT(id) AS "Jumlah Siswa" FROM Siswa GROUP BY kelas

// 3.2 Tuliskan query untuk menampilkan extrakurikuler yang dapat diambil setiap
// siswa sesuai dengan kelasnya

// SELECT a.nama AS Nama ,GROUP_CONCAT(b.nama) AS Ekstrakurikuler FROM Siswa a INNER JOIN Ekstrakurikuler b ON a.kelas=b.kelas GROUP BY a.nama

// 3.3 Berikan pendapatmu mengenai tabel diatas dan jika menurutmu table diatas
// kurang atau bisa diperbaiki, berikan design table yang menurutmu lebih baik.

// Untuk Tabel Ekstrakurikuler untuk nama bisa diisi dengan nama ekstra yang sesuai dengan kelasnya,seperti pada ekstra Komputer tidak usah ditulis lagi,cukup ditambahkan ke row Karate,jadi tabelnya seperti ini:
/*
|id|nama            |kelas|
|1|Karate,Komputer  |2    |
|2|Komputer         |1    |
|3|Pramuka          |3    |
*/
// Sehingga tidak perlu menggunakan group concat untuk menampilkan ekstrakurikuler yang dapat diambil,tinggal menuliskan query dibawah ini maka hasilnya akan samaa seperti nomor 3.2

// SELECT a.nama AS Nama,b.nama AS Ekstrakurikuler FROM Siswa a INNER JOIN Ekstrakurikuler b ON a.kelas=b.kelas
