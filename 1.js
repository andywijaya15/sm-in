/*
Nama                : Andy Wijaya
Bahasa yg digunakan : Node JS
untuk menjalankannya silahkan install node dan buka terminal di folder yang berisi 1.js dan jalankan menggunakan perintah node 1.js
Untuk nilai input jika ingin diganti silahkan ganti dibagian yang sudah saya comment "Input"
*/

/* 
1.Tuliskan fungsi untuk menghitung jumlah terkecil dan terbesar sebanyak $m element
 dari suatu array[n].
*/

// input array
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
