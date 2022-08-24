/*
Nama                : Andy Wijaya
Bahasa yg digunakan : Node JS
untuk menjalankannya silahkan install node dan buka terminal di folder yang berisi 2.js dan jalankan menggunakan perintah node 2.js
Untuk nilai input jika ingin diganti silahkan ganti dibagian yang sudah saya comment "Input"
*/

/* 
2.Tuliskan sebuah fungsi untuk menulis angka dari $m sampai $n, yang mana jika
 angka yang akan ditulis kelipatan 3, maka yang akan ditulis bukan angka melainkan
 tulisan ‘saku’ dan jika angka tersebut kelipatan ‘5’ akan menuliskan ‘mas’. Jika angka
 tersebut kelipatan dari 3 dan 5, maka akan menuliskan ‘sakumas’. Dan jika angka
 tersebut bukan keduanya maka fungsi tersebut akan menuliskan sebuah angka.
*/

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

// Input angka awal dan akhir disini
angka(1, 15);
