// soal 1
function halo(){
    var a;
    a = "Halo sanbers!"
    return a ;
}

console.log(halo());


// soal 2
function kalikan(angkapertama, angkakedua){
    
    return angkapertama*angkakedua;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

// soal 3
function introduce(name, age, address, hobby){
    var cetak 
    cetak = "Nama saya "+ [name] + ", umur saya " + [age] + " tahun, alamat saya di "+[address]+ ", dan saya punya hobby yaitu " + [hobby] + "!"
    return cetak
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// soal 4 
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objectDaftarPeserta = {
    nama : "Asep",
    jeniskelamin: "laki-laki",
    hobi: "baca buku",
    tahunlahir : 1992
}

console.log(objectDaftarPeserta.nama)
console.log(objectDaftarPeserta.hobi)

// soal 5
var buah = [{nama : "strawberry", warna:"merah", adabijinya:"tidak", harga:9000}, {nama:"jeruk", warna:"orange", adabijinya:"ada", harga:8000}, {nama:"semangka", warna:"Hijau dan Merah", adabijinya:"ada", harga: 10000}, {nama:"pisang", warna:"kuning", adabijinya:"tidak",harga:5000}]
console.log(buah[0])

// soal 6
var dataFilm = []

var listfilm = {
    judul : "Ford v Ferrari",
    durasi : "3 jam",
    genre : "seru",
    tahun : 2018
}

function tambahFilm(judul, durasi, genre,tahun) {
    dataFilm.push(listfilm)
    return dataFilm
}

tambahFilm("judul", "durasi", "genre", "tahun")
console.log(dataFilm)


