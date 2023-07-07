// Input
const bahasaIndonesia = 8;
const matematika = 89;
const ipa = 93;
const bahasaInggris = 75;

//validasi
if( typeof bahasaIndonesia != 'number' ||
    typeof matematika != 'number' ||
    typeof ipa != 'number' ||
    typeof bahasaInggris != 'number' ){
        
        //output jika input bukan berupa angka
        console.log('Yang anda masukan bukan angka')

    } else {

    //proses menghitung rata rata
    const nilaiRataRata = (bahasaIndonesia + matematika + ipa + bahasaInggris) / 4 ;

    //menentukan grade
    let grade;

    switch(true) {
        case 100 >= nilaiRataRata >= 90:
            grade = "A";
            break;

        case 89 >= nilaiRataRata >= 80:
            grade = "B";
            break;

        case 79 >= nilaiRataRata >= 70:
            grade = "C";
            break;
        
        case 69 >= nilaiRataRata >= 60:
            grade = "D";
            break;
        
        case 59 >= nilaiRataRata >= 0:
            grade = "E";
            break;

    }

    //tampilkan output
    console.log(`Nilai rata-ratanya adalah ${nilaiRataRata}.\nDan gradenya ${grade}`);


} 