/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/

function dataHandling(_input) {
    let n = _input.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < _input[i].length; j++) {
            switch (j) {
                case 0:
                    console.log(`Nomor ID: ${_input[i][j]}`);
                    break
                case 1:
                    console.log(`Nama Lengkap: ${_input[i][j]}`);
                    break
                case 2:
                    console.log(`TTL: ${_input[i][j]} ${_input[i][j+1]}`);
                    break
                case 3:
                    break
                case 4:
                    console.log(`Hobi: ${_input[i][j]}`);
                    console.log("")
                    break
                default:
                    console.log("Index doesn't match")
            }
        }
    }
}

let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

console.log(dataHandling(input));

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/
