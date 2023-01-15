
let sayi = prompt("Bir sayi giriniz.");
let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
    let rakam = sayi.charAt(i);
    toplam += rakam*rakam*rakam;
}

if (Number (toplam==sayi)) {
    console.log (`${sayi}, bir armstrong sayidir.`)
}

else {
    console.log (`${sayi}, bir armstrong sayi degildir.`)
}