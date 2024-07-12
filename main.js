// Array gambar yang ingin dipilih secara acak
const daftarGambar = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];
  
  function ambilGambarSecaraAcak() {
    const hasil = Math.floor(Math.random() * daftarGambar.length);
    return [daftarGambar[hasil],hasil];
  }
    const kembali1 = ambilGambarSecaraAcak();
    const kembali2 = ambilGambarSecaraAcak();
    document.querySelector(".img1").setAttribute("src", "./images/"+ kembali1[0]);
    document.querySelector(".img2").setAttribute("src", "./images/"+ kembali2[0]);
    
    function siapaYangmenang (){
     if ((kembali1[1]+1) - (kembali2[1]+1) > 0 ){
         document.querySelector("h1").innerHTML = "Player 1 Menang🚩";
        }else if((kembali1[1]+1) - (kembali2[1]+1) < 0 ){
          document.querySelector("h1").innerHTML = "Player 2 Menang🚩";
        }else{
          document.querySelector("h1").innerHTML = "Imbang";
        }

  }
  
  siapaYangmenang ()