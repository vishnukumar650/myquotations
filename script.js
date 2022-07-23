let audio1 = document.getElementsByTagName('audio')[0];

let button = document.getElementById('btn1'); 

let song1 = false;
function start(){
    if(button.classList.contains('fa-play')){
        audio1.play();
        button.classList.remove('fa-play');
        button.classList.add('fa-pause');
        song1 = true;
    }
    else{
        audio1.pause();
        button.classList.remove('fa-pause');
        button.classList.add('fa-play');
        song1 = false;
    }
} 


let audio2 = document.getElementsByTagName('audio')[1];

let button2 = document.getElementById('btn2'); 

let song2 = false;

function start2(){

    if(button2.classList.contains('fa-play')){
        audio2.play();
        button2.classList.remove('fa-play');
        button2.classList.add('fa-pause');
        song2 = true;
    }
    else{
        audio2.pause();
        button2.classList.remove('fa-pause');
        button2.classList.add('fa-play');
        song2 = false;
    }

}


let quotations = [
    "When a man dwells on the pleasure of sense, the attraction for them arises in him, From attraction arises desire, the lust of possession, and this leads to passion, to anger.",
    "There is nothing lost or wasted in this life.",
    "Self-control is the Mantra of Success",
    "If you want to be Great, Think Great and Positive.",
    "Perform your obligatory duty, because action is indeed better than inaction.",
    "You are what you believe in, You become that which you believe you can become",
    "Live a well-balanced life, it will bring peace.",
    "Lust, Anger, and Greed are the three doors to hell.",
    "Love, tolerance, and selflessness should be practiced.",
    "This one’s for all those times you made an excuse for not accomplishing your goals."
];let hex = ["0", "1", "2", "3", "4", "5","6","7","8","9","A","B","C","D","E","F"];
let image=document.getElementsByTagName("img")[0];
let quote=document.getElementById("demo");
function change()
{
    
    let a=Math.floor(Math.random()*16);
    let imgName="img/gita"+a+".jpg";
    image.setAttribute("src",imgName);
    let b=Math.floor(Math.random()*quotations.length);
    quote.innerHTML=quotations[b];
    
    let x="#";
    let y="#";
    let z="#";
    for(let i=0;i<6;i++)
    {
        x+=hex[Math.floor(Math.random()*hex.length)];
        y+=hex[Math.floor(Math.random()*hex.length)];
        z+=hex[Math.floor(Math.random()*hex.length)];
    }
    let arr = [90,270];
    let deg = arr[Math.floor(Math.random()*arr.length)];
    document.body.style.backgroundImage= `linear-gradient(${deg}deg,${x}, ${y}, ${z})`;
    console.log(deg);
    screenShot();
}


// Screenshot


// After page is getting loaded, body of the page

// click

//dblclick

// keydown

// placing cursor

// there is delay in loading the web page

// body is loaded into the  browser  --> event



function screenShot(){
        $("#download").click();
      }

      $(document).ready(function(){
        var element = $(".demo");

        $("#download").on('click', function(){

          html2canvas(element, {
            onrendered: function(canvas) {
              var imageData = canvas.toDataURL("image/jpg");
              var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
              $("#download").attr("download", "image.jpg").attr("href", newData);
            }
          });

        });
      })

let count = 0;

document.addEventListener('keydown', (e) => {

    if(e.keyCode ==37 && e.keyCode == 40)
    {
      change();
    }
    else if(e.keyCode == 32){
      

      if(count == 0) {  
        start();
      }
      else if(count%2==0){
        start2();
        start();
      }
      else if(count%2==1) {
        start();   
        start2(); 
      }

      count++;

    }
     else if(e.keyCode==27){

        if(song1){
          start();
        }
        if(song2){
          start2();
        }
     }
     
    }
  );

