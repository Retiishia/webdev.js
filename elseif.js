const number = 12000;

if (number < 10) {
  console.log('Angka yang dimasukkan adalah sebuah satuan');
} else if (number < 100)
    console.log("Angka yang dimasukkan adalah sebuah puluhan");
    else if (number < 1000) {
        console.log("Angka yang dimasukkan adalah sebuah ratusan");
    } else if (number < 10000) {
        console.log("Angka yang dimasukkan adalah sebuah ribuan");
     } else {
            console.log("Angka melebihi belasan ribuan");
        }