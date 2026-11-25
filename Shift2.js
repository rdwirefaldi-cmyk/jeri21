// Membuat array berisi nama-nama anggota shift 2
const namaShift2 = [
    "Wisnu Wijaya",
    "Akbar Hariadi",
    "Febria Syafaatul Wahidah",
    "Lina Nurhasanah",
    "Maiva Rianita",
    "Madina Rita Sari",
    "Naya Alitia Sari",
    "Rima Enjelita",
    "Hikmatuz Zulfa",
    "Rafa Dwi Refaldi",
    "Saskia Yulanda",
    "Ridho Maulana Yusuf",
    "Suci Safira",
    "Herlina Fitriani"
];

// Menampilkan output berupa list/daftar nama di terminal/console
console.log("========================================");
console.log("     DAFTAR NAMA ANGGOTA SHIFT 2        ");
console.log("========================================");

namaShift2.forEach((nama, index) => {
    console.log(`${index + 1}. ${nama}`);
});

console.log("========================================");