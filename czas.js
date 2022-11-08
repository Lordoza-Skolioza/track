const miesac_slow = ["Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Październik", "Listopad", "Grudzien"];

czas = document.getElementById("czas");


var pentla_licz = 4;

function czasu()
{
    setTimeout(() => {
        czasu()
        //console.log("CZASU WYWOŁANE!")
    }, 250);
    const d = new Date();
    rok = d.getFullYear(); 
    dzien = d.getDate();
    let miesac = miesac_slow[d.getMonth()];
    godz = d.getHours();
    min = d.getMinutes();
    sek = d.getSeconds();



    if(pentla_licz == 4){
        pentla_licz = 1;
        czas.innerHTML = dzien +" "+ miesac+ " "+ rok +" | "+ godz+":"+ min+":"+ sek;
    }else{
        pentla_licz++
    }

}
czasu()