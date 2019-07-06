window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    //grab the canvas from the html
    const canvas = document.getElementById("canvas");
    
    //create a 2d context
    const ctx = canvas.getContext("2d");

    //create the green rectangle background
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 400, 900);

    //creates the grey rectangle
    ctx.fillStyle = 'grey';
    ctx.fillRect(25, 0, 350, 900);

    //creates the white rectangle 
    ctx.fillStyle = 'white';
    ctx.fillRect(35, 0, 330, 900);

    //creates the grey rectangle
    ctx.fillStyle = 'grey';
    ctx.fillRect(45, 0, 310, 900);
    
    //creates the lane divider
    for(let i = 10; i < 900; i+=50){
      ctx.fillStyle = 'white';
      ctx.fillRect(200, i, 5, 25);

    }

    //creates an image using the image constructor
    let carImg = new Image();
    carImg.src = './images/car.png';
    
    carImg.addEventListener("load", function() {
      ctx.drawImage(carImg, 190, 620, 30, 50);
       }, false);

    
   
    





  }
};
