let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy")
    input.splice(2, 1, "Provinsi Bandar Lampung")
    input.splice(4, 0, "Pria")
    input.splice(5, 1, "SMA Internasional Metro")
    console.log(input)

    const daftarBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    let tgl = input[3].slice(3, 5)
    console.log(daftarBulan[parseInt(tgl) - 1])

    console.log(input[3].split("/").reverse())
    
    console.log(input[3].split("/").join("-"))

    console.log(input[1].slice(0, 15))
}

console.log(dataHandling2(input))

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */