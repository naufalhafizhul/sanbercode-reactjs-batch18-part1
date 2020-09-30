// Soal 1
var kataPertama = "saya";
var kataKedua ="senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var upper = kataKeempat.toUpperCase();
var firstlatter = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);


console.log(kataPertama);
console.log(firstlatter);
console.log(kataKetiga);
console.log(upper);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var strint1 = parseInt(kataPertama);
var strint2 = parseInt(kataKedua);
var strint3 = parseInt(kataKetiga);
var strint4 = parseInt(kataKeempat);
var hasil = strint1 + strint2 + strint3 + strint4;

console.log('penjumlahan: ' + hasil );

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15,18);  
var kataKeempat = kalimat.substring(19,25); 
var kataKelima = kalimat.substring(25,32); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 55

if ( nilai >= 80 ) {
    console.log("Nilai A")
    }
      else if(nilai >= 70 && nilai < 80 ) {
        console.log("Nilai B")    
    } else if( nilai >= 60 && nilai < 70) {
        console.log("Nilai C")
    } else if ( nilai >= 50 && nilai <60 ) {
        console.log("Nilai D")
    } else {
        console.log("Nilai E")
    }


// soal 5 
var tanggal = 3;
var bulan = 8;
var tahun = 2000;

switch(bulan){
    case 1 : {bulan = 'Januari'; break;}
    case 2 : {bulan = 'Februari'; break;}
    case 3 : {bulan = 'Maret'; break;}
    case 4 : {bulan = 'April'; break;}
    case 5 : {bulan = 'Mei'; break;}
    case 6 : {bulan = 'Juni'; break;}
    case 7 : {bulan = 'Juli'; break;}
    case 8 : {bulan = 'Agustus'; break;}
    case 9 : {bulan = 'September'; break;}
    case 10 : {bulan = 'Oktober'; break;}
    case 11 : {bulan = 'November'; break;}
    case 12 : {bulan = 'Desember'; break;}
}

console.log (tanggal + ' ' + bulan + ' ' + tahun);