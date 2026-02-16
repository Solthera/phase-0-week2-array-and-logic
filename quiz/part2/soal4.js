function pasanganTerbesar(num) {
  let str = num.toString()
  let terbesar = 0

  for (let i = 0; i < str.length - 1; i++) {
    let pasangan = str.slice(i, i + 2)
    let pasanganInt = parseInt(pasangan)

    if (pasanganInt > terbesar) {
      terbesar = pasanganInt
    }
  }

  return `Pasangan terbesar dari ${str} adalah ${terbesar}`
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99