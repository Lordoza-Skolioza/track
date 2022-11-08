// ten JS to jeden wielki komentarz XD
// "c.zmienna" jesli chce sie do czegoś odnieść co ma ID "MyCanvas" w html'u
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//wielkos 50??
//szerokość i wysokość canvasa jakims cude to działa(width 16 i height 9 dla skali 16:9 + mnożenie przez ta sama liczbe)
wielkosc = 98 //NIE ZMIENIAĆ bo później moze sie popsuć(chyba ale mam nadzieje ze nie)
c.width = 16 * wielkosc
c.height = 9 * wielkosc

var y = 100
var x = 100

var kierunek=0
var idz=0

var skok=0

//wykrywanie czy przycisk jest wsiśnięty a drugie to kiedy przycisk bedzie w górze WoW 
window.onkeydown = function (e) {
    if (!e) e = window.event;
    if (e.keyCode == 65){
    //    console.log("A")
        kierunek = -1;
        idz=1
    }
    if (e.keyCode == 68){
    //    console.log("D")
        kierunek = 1;
        idz=1
    }
    if (e.keyCode == 87){
    //    console.log("W")
        skok=1
    }
    if (e.ctrlKey){
    //    console.log("CRTL")
    }
    if (e.shiftKey){
    //    console.log("SHIFT")
    }
}

window.onkeyup = function (e) {
    if (!e) e = window.event;
    if (e.keyCode == 65){
    //    console.log("---A---")
        if(kierunek != 1){
            kierunek = 0;
            idz=0;
        }


    }
    if (e.keyCode == 68){
    //    console.log("---D---")
        if(kierunek != -1){
            kierunek = 0;
            idz=0;
        }
        

    }
    if (e.keyCode == 87){
    //    console.log("---W---")
        skok=0
    }
    if (e.ctrlKey){
    //    console.log("---CRTL---")
    }
    if (e.shiftKey){
    //    console.log("---SHIFT---")
    }
}

function ruch(){
    if(idz==1){
    gracz.position.x = gracz.position.x + kierunek*2.5
    }
}




var vel=0

function velocity(){
    if( (gracz.boki.stopy >= c.height) && (skok == 0)){
        vel=0;
    }else if(vel >= 7){
            vel=vel;
    }else{
        vel=vel+0.1;
    }
}


function up(){
    if(skok == 1){
        vel = -5;
    }
}







class Gracz{
    constructor(){
        this.position = {
            x: (c.width / 2) - 10,
            y: c.height - 600,
        }

        this.height = 20;
        this.width = 20;
        this.boki = {
            stopy: this.position.x + this.height
        }
    }    


    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height); 

    }

    update(){
        if ( (this.boki.stopy <= c.height) || (skok == 1)) {
            this.position.y = this.position.y + vel



            this.boki.stopy = this.position.y + this.height
        }

        velocity();
        ruch();
        up();
    }
}
const gracz = new Gracz()




function dupa() {
    window.requestAnimationFrame(dupa)
    // czyszczenie
    ctx.clearRect(0, 0, c.width, c.height);
    //console.log("ok")
    //tło - to po czym sie porusza kwadrat
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, c.width, c.height);


    gracz.draw();
    gracz.update();




    //console.log(kierunek)
    console.log(vel)
}



//window.requestAnimationFrame(dupa);
dupa();







//pewnie później juz bedzie do wywalenia

// dla sterowania przyciskami
function A() {
    gracz.position.x = gracz.position.x - 5
    //    console.log("A")
}
function W() {
    //tu bedzie skok jak sie uda XD 
    //    console.log("W")
    skok=1;
      setTimeout(() => {
        skok=0;
    }, 100);
}
function D() {
    gracz.position.x = gracz.position.x + 5
    //    console.log("D")
}






function stopskok(){
  
}





//stare

// to bedzie do wyjebania XD ale najpierw ogarnać jak sprawić zeby sprawdzało czy przycisk jest przyciśnięty 
// movement lewo prawo (moze góra/skok później)
// document.addEventListener('keyidz', function (event) {
//     if (event.keyCode == 65) {
//         x = x - 5
//     //    console.log('nacisłes A ¯\_(❍_❍)_/¯');
//     }
//     else if (event.keyCode == 68) {
//         x = x + 5

//     //    console.log('nacisłes D ¯\_(❍_❍)_/¯');
//     }
// });


// pozycja startowa 
// y = (c.height - 44)
// x = (c.width / 2) - 10


// function gracz(){
//     ctx.fillStyle = "red";
//     ctx.fillRect(x, y, 20, 20);
//     //dół kwadratu
//     stopy = y + 20
//     ruch();
// }
