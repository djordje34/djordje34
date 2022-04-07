var movement=5;
var currentScore=0;
var pause=false
function changePlayerYD(){
    var player=document.getElementById("player");
    if(parseInt(player.style.top.split("%")[0])<75)
        player.style.top=parseInt(player.style.top.split("%")[0])+movement+"%";
}
function changePlayerYU(){
    var player=document.getElementById("player");
    if(parseInt(player.style.top.split("%")[0])>0)
        player.style.top=player.style.top.split("%")[0]-movement+"%";
}
function changePlayerYL(){
    var player=document.getElementById("player");
    if(parseInt(player.style.left.split("%")[0])>0)
        player.style.left=player.style.left.split("%")[0]-movement+"%";
}
function changePlayerYR(){
    var player=document.getElementById("player");
    if(parseInt(player.style.left.split("%")[0])<70)
        player.style.left=parseInt(player.style.left.split("%")[0])+movement+"%";
}


window.addEventListener('blur', function (event) {
    pause=true;
    document.getElementById("score").textContent="\nDon't lose your focus! Try to stay on this tab.";
});


function ListenInput(event){
    switch (event.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          console.log("DOWN")
          changePlayerYD()
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
            console.log("UP")
            changePlayerYU()
          break;
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
              console.log("LEFT")
              changePlayerYL()
              break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
              console.log("RIGHT")
              changePlayerYR()
                break;
            case " ":
                pause=!pause;
                if(pause)
                    document.getElementById("score").textContent="\nPaused";
                else
                    document.getElementById("score").textContent="\nResuming...";
                break;
        default:break;
}
}
document.addEventListener("keydown",function(event){ListenInput(event);});

function generateWalls(){
    if (!pause){
    var whereTo=Math.round(Math.random())
    if(whereTo===1)
      whereTo="bottom";
    else
      whereTo="top";
    
    chanceofMid=Math.round(Math.random())
    if(chanceofMid===1)
        whereTo+=":38%";
    else
        whereTo+=":0%";
    console.log(whereTo)
    var possible=true
    interval=Math.floor(1.5+Math.random()*2.5)
      if(possible){
        var where=document.getElementById("container");
        where.innerHTML+="<img src='img/wall.png' width='64px' height='168px' alt='wall' id='wall' style='"+whereTo+";'> ";
        wall=document.getElementById("wall");
        console.log(interval)
        wall.style.animation="moveWall "+interval+"s linear";
        console.log(wall.style.animation)
        //wall.innerHTML="<img src='img/wall.png' width='100%' height='100%' alt='wall'>"
        console.log("generated walls")
        possible=false
        wall.onanimationend=()=>{possible=true;console.log("DELETED");wall.parentNode.removeChild(wall)};
        currentScore+=10;
        document.getElementById("score").textContent=currentScore;
      }
    }
      setTimeout(generateWalls,interval*1000+500);
  }



  function elementsOverlap() {
      player=document.getElementById("player");
      wall=document.getElementById("wall");
      if(wall!=null){
    const domRect1 = player.getBoundingClientRect();
    const domRect2 = wall.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );}
    else
        return 0
  }
  function overlapCheck(){
      var truth=elementsOverlap()
        if(truth){
            console.log("OVERLAP");
            alert("GAME OVER");
            currentScore=0;
            document.getElementById("score").textContent=currentScore;
            location.reload()
        }
        setTimeout(overlapCheck,100);
  }