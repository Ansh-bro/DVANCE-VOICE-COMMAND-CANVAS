x = 0;
y = 0;
screen_width="";
screen_height="";
draw_apple = "";
StarImg="";
to_number="";
speak_data="";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  to_number = Number(content);
  if(Number.isInteger(to_number)){
    x=Math.floor(Math.random()*1400);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "started drawing Apple";
    draw_apple = "set";
 }

}

function setup() {
  canvas = createCanvas(1400,600);
  screen_width = window.innerWidth;
  screen_height = window.innerHeight-150;
  canvas.position(0,150) ;
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1 <= to_number; i++)
    {
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(StarImg,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function preload(){
  StarImg = loadImage('Star.png');
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
