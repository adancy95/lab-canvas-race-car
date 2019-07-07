window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame(400, 750);
  };

  function startGame(canvasWidth,canvasHeight) {
    //grab the canvas from the html
    const canvas = document.getElementById("canvas");
    
    //create a 2d context
    const ctx = canvas.getContext("2d");

    //create the green rectangle background
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    //creates the grey rectangle
    ctx.fillStyle = 'grey';
    ctx.fillRect(25, 0, canvasWidth-50, canvasHeight);

    //creates the white rectangle 
    ctx.fillStyle = 'white';
    ctx.fillRect(35, 0, canvasWidth-70, canvasHeight);

    //creates the grey rectangle
    ctx.fillStyle = 'grey';
    ctx.fillRect(45, 0, canvasWidth-90, canvasHeight);
    
    //creates the lane divider
    for(let i = 10; i < canvasHeight; i+=50){
      ctx.fillStyle = 'white';
      ctx.fillRect(canvasWidth/2, i, 5, 25);

    }

    //creates an image using the image constructor
    let carImg = new Image();
    carImg.src = './images/car.png';

    let carX = 190;
    let carY = 700;
    
    carImg.addEventListener("load", function() {
      ctx.drawImage(carImg, carX, carY, 30, 50);
       }, false);

    
    //image animation steps

    // Clear the canvas
    
    // Save the canvas state

    //Draw animated shapes

    //Restore the canvas state

    canvas.addEventListener("keydown", keyDownEvent, false);

    function keyDownEvent(e){
  
     
      if(e.keyCode === 37){
         //player presses the left key
         if(carX >=45){
          carX -= 15;
         }
      } else if(e.keyCode === 39){
         //player presses the right key
        if(carX <= canvasWidth - 45){
          carX += 15;
        }
       
      }
    }


   





  }
};
