function controller(event){//EVENT HANDLER FOR KEYBOARD INPUTS
    if(event.key=='Enter'){
        if(runWrkernum==0){
          Run();
          runsound.play();
          moveBackground();
          updateScore();
          flamLocations.forEach(generateFlame);
          
        }
    }
    if(event.key==' '){
        if(jumpWrkernum==0){
            if(runWrkernum!=0){
            clearInterval(runWrkernum);
            runsound.pause();
            Jump();
            jumpsound.play();
            }
        }
    }
}       
//CREATING RUN FUNCTION ;)
var runImgnum=1;
var runWrkernum=0;
var runsound= new Audio('run.mp3');
runsound.loop=true;

function Run(){

    runWrkernum=setInterval(()=>{
        runImgnum=runImgnum+1;
        if(runImgnum==9){
            runImgnum=1;
        }
    
    document.getElementById('boy').src='run'+runImgnum+'.png';
    },150)
}
//CREATING JUMP FUNCTION ;)

var jumpImgnum=1;
var jumpWrkernum=0;
var boymargintop=310;
var jumpsound= new Audio('jump.mp3');

function Jump(){
  jumpWrkernum=setInterval(()=>{ 
        jumpImgnum=jumpImgnum+1;
        if(jumpImgnum<8){
           boymargintop=boymargintop-15;
           document.getElementById('boy').style.marginTop=boymargintop+'px'
        }
        if(jumpImgnum>7){
            boymargintop=boymargintop+15;
            document.getElementById('boy').style.marginTop=boymargintop+'px'
        }
    
        
        if(jumpImgnum==13){

            jumpImgnum=1;
            clearInterval(jumpWrkernum);
            jumpWrkernum=0;
            Run();
            runsound.play();
        }
        document.getElementById('boy').src='jump'+ jumpImgnum + '.png'
    },100);
}
var backGworker=0;
var backGposition=0;
function moveBackground(){

    backGworker=setInterval(()=>{
        backGposition=backGposition-10;
        document.getElementById('background').style.backgroundPositionX=backGposition+'px';






    },50);
}
var scoreWorker=0;
var score=0;
function updateScore(){
    
    scoreWorker=setInterval(()=>{
        if(score==2600){
            alert('You Won!,Please Press OK to Start a New Game');
            window.location.reload();
        }
       score=score+10;
       document.getElementById('score').innerHTML=score

    },50)
}
var flamLocations=['500','1000','1500','2000','2500'];
Fworker=0
function generateFlame(x){

    var i = document.createElement('img');
    i.src='flame.gif';
    i.className='flame';
    i.style.marginLeft=x+ 'px';
    document.getElementById('background').appendChild(i);
    Fworker=setInterval(()=>{
        if(x==140){
            if(jumpWrkernum==0){
                  clearInterval(runWrkernum);
                  runsound.pause();
                  clearInterval(backGworker);
                  clearInterval(scoreWorker);
                  dead();

            }
        }



        x=x-10;
        i.style.marginLeft=x+'px';  

    },50)
    
}
var deadWrkr=0;
var deadImgnum=1;
var deadsound=new Audio('dead.mp3');
function dead(){
 deadWrkr=setInterval(()=>{deadImgnum=deadImgnum+1
        if(deadImgnum==11){
        deadImgnum=1;
        clearInterval(deadWrkr);
        new Audio('dead.mp3');
        alert('Game Over!');
        window.location.reload();
        }
        document.getElementById('boy').src='dead'+deadImgnum+'.png';





    },100);

   

}




