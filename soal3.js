//input
let printSegitiga = 5;

//validasi
if(typeof printSegitiga != 'number'){

    //output jika input bukan angka
    console.log('Maaf, data harus berupa angka')

} else {
    
    for(let i = printSegitiga;i >= 1; i--) { //loop sebanyak baris


        let hasil = "";  //penyimpanan sementara

        for(let j = 1; j <= i ; j++) { //loop sebanyak kolom
            hasil += j + " ";
        }


        //output hasil
        console.log(hasil)
    }

}