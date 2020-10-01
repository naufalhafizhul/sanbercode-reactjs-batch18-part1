// soal 1
console.log("LOOP PERTAMA");
var ulang  = 2;
while(ulang <= 20){
    console.log(ulang + " - I love Coding");
    ulang += 2;
}

console.log("LOOP KEDUA");
var n  = 20;
while(n > 0){
    console.log(n + "- I will become a frontend developer");
    n -= 2;
}
console.log("  ")
// soal 2

 for (var k = 1; k <= 20; k++){
     if (k%2 == 0){
         console.log(k + '- Berkualitas')
     } else if (k %3== 0 && k %1== 0){
         console.log(k +'- I love Coding')
     } else {
         console.log(k +'- Santai')
     }
 }
 console.log(' ');
//   soal 3
var d = '';
for (var i=1;i<=7;i++){
    for (var j=1;j<=i;j++){
        d += '#'
    }
    d += '\n'
}
console.log(d);

console.log(' ');
// soal 4
var kalimat="saya sangat senang belajar javascript"
var yuk = kalimat.split(" ");
console.log(yuk);

console.log(' ')


// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(var q = 0; q<5; q++){
    console.log(daftarBuah[q])
}