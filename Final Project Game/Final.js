let c = canvas.getContext("2d");
let animationID;
let x = 50; y = 395;   //x and y of player
let ySpeed = -5;
let rwidth = 40
let rheight = 40
let xr = 620; yr = 380  //x and y of object



let objheight = Math.floor(Math.random()*80 + 20)
let objwidth = Math.floor(Math.random()*45 + 15)
let objspeed = Math.floor(Math.random()*4 + 3) + 1




window.addEventListener("keydown", move)
function move(e) {
  console.log(e.key)
  if (e.key == "ArrowUp") {
    ySpeed = -5
  }
}

function start() {
  document.getElementById("startbutton").disabled = true;

  animate()
}

function animate() {

  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = "grey";
  c.fillRect (x, y, rwidth, rheight)
  
  y += ySpeed;

  if(y<200){
    ySpeed = 5;
  }
  if(y>385){
    ySpeed = 0 }


  // background line \\
  c.strokeStyle = "grey";	
  c.moveTo(0, 400); //Start here
  c.lineTo(800, 400);	 //End here
  c.stroke();		//Draw line
  

// moving obstacles\\

  c.fillStyle = "grey"	//Set the fill color
  c.fillRect(xr, 430-objheight, objwidth,objheight);	//Draw a filled rectangle
  c.clearRect(0,0,0,0,)
  xr += -objspeed 

  if(xr<-30){
    xr = 640
    
    objheight = Math.floor(Math.random()*80 + 20)
    objwidth = Math.floor(Math.random()*45 + 15)
    objspeed = Math.floor(Math.random()*4 + 3) + 1
  }  

  
// if player hits object
if(x+40 > xr && y+40 > yr){
  ySpeed = 0
  objspeed = 0
 document.getElementById("startbutton").disabled = false;
 document.getElementById("keydown").disabled = true;
  window.cancelAnimationFrame(animationID);
 
}




  animationID = window.requestAnimationFrame(start);
}

  // background line \\
  c.strokeStyle = "grey";	
  c.moveTo(0, 400); //Start here
  c.lineTo(800, 400);	 //End here
  c.stroke();		//Draw line
  