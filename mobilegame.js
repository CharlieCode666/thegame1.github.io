alert("你是那個藍色方塊，你的目的就是收集黃黃的小方塊，吃綠綠的方塊可以加速，但小心不要被紅色方塊給抓到，不然你所收集到的黃黃方塊都會不見，祝你好運！")
alert("記得不要吃太多綠綠的方塊!!!")

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
/*============================*/    
    var x = 5;
    var y = 540;
    var dir = 0;
/*============================*/    
    var t = Date.now();
    let speed = 100;
    var Score = 0;
    var M = 12;
/*============================*/    

    var coin1x = Math.random() * (388-15)
    var coin1y = Math.random() * (570-15)
    var coin2x = Math.random() * (388-15)
    var coin2y = Math.random() * (570-15)
    
    var speedupx = Math.random() * (388-15)
    var speedupy = Math.random() * (570-15)
/*============================*/
    var line1x = 30;
    var line1y = 480;
    
    var line2x = 238;
    var line2y = 480;
    
    var line3x = 30;
    var line3y = 90;
    
    var line4x = 238;
    var line4y = 90;
    
    var line5x = 144;
    var line5y = 235;
    
    var line6x = 144;
    var line6y = 230;
    
    var line7x = 144;
    var line7y = 350;
    
    var line8x = 65;
    var line8y = 230;
    
/*============================*/
    /* 鬼 */
    
    var ghostx1 = 260;
    var ghosty1 = 280;
    
    var ghostx2 = 90;
    var ghosty2 = 280;
    
    var ghostx3 = 180;
    var ghosty3 = 420;

    var ghostx4 = 160;
    var ghosty4 = 20;
    
    let move1 = 1.2;
    let move2 = 2;
    let move3 = 1.6;
    let move4 = 0.8;
    
/*============================*/

  /* 按鍵部分 */  

let top = document.getElementById('top');
top.ontouchstart = function() {
  dir = 1;
}
top.ontouchend = function() {
  dir = 0;
}

let bottom = document.getElementById('bottom');
bottom.ontouchstart = function() {
  dir = 2;
}
bottom.ontouchend = function() {
  dir = 0;
}

 let right = document.getElementById('right');
right.ontouchstart = function() {
  dir = 3;
}
right.ontouchend = function() {
  dir = 0;
}

let left = document.getElementById('left');
left.ontouchstart = function() {
  dir = 4;
}
left.ontouchend = function() {
  dir = 0;
}

  /* 觸發事件 && 計算 && 動畫 */

  function draw(){
    
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();
    
    var fps = Math.round(1 / timePassed);
    
    context.clearRect(0, 0, 388, 570)
    
    context.beginPath();
    
    context.font = '10px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("FPS: " + fps, 6, 12);
    
    context.font = '10px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("Score: " + Score, 50, 12);
    
/*===========================================*/
    
    context.rect(x, y, 20, 20);
    context.Style = "#ffffcc";
    context.fill();
    
    context.lineWidth = 3;
    context.strokeStyle = "#ffffff";
    context.stroke();
    
  if(dir == 1){
     if(y > 0){
      y -= (speed * timePassed)   
     }
    }
    
   if(dir == 2){
  if(y+23 < 570 ){
     y += (speed * timePassed)
  }
    }
  
  else if(dir == 3){
    if(x+23 < 388){
      x += (speed * timePassed)
    }
  }
  
  else if(dir == 4){
    if(x > 0){
      x -= (speed * timePassed)
    }
  }
    
  
/*===========================================*/
  
  context.beginPath();
  
  context.rect(coin1x, coin1y, 15, 15);
  context.fillStyle = "#ffff00";
  context.fill();
  
  if (coin1x <= x+23 && x <= coin1x+15 && coin1y <= y+23 && y <= coin1y+15) {
            Score++;
            coin1x = Math.random() * (290-15);
            coin1y = Math.random() * (270-15);
        }
  
/*===========================================*/    
 context.beginPath();
  
  context.rect(coin2x, coin2y, 15, 15);
  context.fillStyle = "#ffff00";
  context.fill();
  
  if (coin2x <= x+23 && x <= coin2x+15 && coin2y <= y+23 && y <= coin2y+15) {
            Score++;
            coin2x = Math.random() * (290-15);
            coin2y = Math.random() * (270-15);
        }  
  
/*===========================================*/

 context.beginPath();
  
  context.rect(speedupx, speedupy, 15, 15);
  context.fillStyle = "#00ff99";
  context.fill();
  
  if (speedupx <= x+23 && x <= speedupx+15 && speedupy <= y+23 && y <= speedupy+15) {
            speed += 50;
            speedupx = Math.random() * (290-15);
            speedupy = Math.random() * (270-15);
        }  

/*===========================================*/
  
  context.beginPath();
  
  context.rect(line1x, line1y, 120, 5);
  context.fillStyle = "#0000ff"
  context.fill();
  
  if (line1x <= x+23 && x <= line1x+123 && line1y <= y+23 && y <= line1y+8){
    dir = 0;
  }
  
  context.beginPath();
  
  context.rect(line2x, line2y, 120, 5);
  context.fillStyle = "#0000ff"
  context.fill();
  
  if (line2x <= x+23 && x <= line2x+123 && line2y <= y+23 && y <= line2y+8){
    dir = 0;
  }
  
  context.beginPath();
  
  context.rect(line3x, line3y, 120, 5);
  context.fillStyle = "#0000ff"
  context.fill();
  
  if (line3x <= x+23 && x <= line3x+123 && line3y <= y+23 && y <= line3y+8){
    dir = 0;
  }
  
  context.beginPath();
  
  context.rect(line4x, line4y, 120, 5);
  context.fillStyle = "#0000ff"
  context.fill();
  
  if (line4x <= x+23 && x <= line4x+123 && line4y <= y+23 && y <= line4y+8){
    dir = 0;
  }
  
  context.beginPath();
  
  context.rect(line5x, line5y, 5, 120);
  context.fillStyle = "#0000ff"
  context.fill();
  
  if (line5x <= x+23 && x <= line5x+8 && line5y <= y+23 && y <= line5y+123){
    dir = 0;
  }
  
  context.beginPath();
  
  context.rect(line6x, line6y, 120, 5);
  context.fillStyle = "#0000ff"
  context.fill();
  
  if (line6x <= x+23 && x <= line6x+123 && line6y <= y+23 && y <= line6y+8){
    dir = 0;
  }
  
  context.beginPath();
  
  context.rect(line7x, line7y, 120, 5);
  context.fillStyle = "#0000ff"
  context.fill();
  
  if (line7x <= x+23 && x <= line7x+123&& line7y <= y+23 && y <= line7y+8){
    dir = 0;
  }
  
  context.beginPath();
  
  context.rect(line8x, line8y, 5, 120);
  context.fillStyle = "#0000ff"
  context.fill();
  
  if (line8x <= x+23 && x <= line8x+8 && line8y <= y+23 && y <= line8y+123){
    dir = 0;
  }
  
/*===========================================*/
  
  context.beginPath();
  context.rect(ghostx1, ghosty1, 30, 30)
  context.fillStyle = "red";
  context.fill();
  
  
  context.lineWidth = 3;
  context.strokeStyle = "#ffffff"
  context.stroke();
  
  if (ghostx1 <= x+23 && x <= ghostx1+33 && ghosty1 <= y+23 && y <= ghosty1+33) {
            Score -= 100;
        }
  
  
    ghostx1 += move1 * (speed * timePassed);
    
    if(ghostx1 >= 350 || ghostx1 <= 187){
    move1 *= -1;
    }
  
/*===========================================*/

  context.beginPath();
  context.rect(ghostx2, ghosty2, 30, 30)
  context.fillStyle = "red";
  context.fill();
  
  
  context.lineWidth = 3;
  context.strokeStyle = "#ffffff"
  context.stroke();
  
  if (ghostx2 <= x+23 && x <= ghostx2+33 && ghosty2 <= y+23 && y <= ghosty2+33) {
            Score -= 100;
        }
  
  ghosty2 -= move2 * (speed * timePassed);
  
  if(ghosty2 >= 430 || ghosty2 <= 120){
    move2 *= -1;
  }

/*===========================================*/


  context.beginPath();
  context.rect(ghostx3, ghosty3, 30, 30)
  context.fillStyle = "red";
  context.fill();
  
  
  context.lineWidth = 3;
  context.strokeStyle = "#ffffff"
  context.stroke();
  
  
  if (ghostx3 <= x+23 && x <= ghostx3+33 && ghosty3 <= y+23 && y <= ghosty3+33) {
            Score -= 100;
        }
  
    ghosty3 += move3 * (speed * timePassed);
    
    if(ghosty3 >= 530 || ghosty3 <= 380){
    move3 *= -1;
    }

/*===========================================*/

 
  context.beginPath();
  context.rect(ghostx4, ghosty4, 30, 30)
  context.fillStyle = "red";
  context.fill();
  
  
  context.lineWidth = 3;
  context.strokeStyle = "#ffffff"
  context.stroke();
  
  
  if (ghostx4 <= x+23 && x <= ghostx4+33 && ghosty4 <= y+23 && y <= ghosty4+33) {
            Score -= 100;
        }
  
  ghostx4 += 1.2 * move4 * (speed * timePassed);
    
    if(ghostx4 >= 340 || ghostx4 <= 20){
    move4 *= -1;
    }

/*===========================================*/

  
  if(Score >= M){
    dir = 0;
    Score = 0;
    x = 5;
    y = 540;
    alert("你贏了!")
  }
  else if(Score < 0){
    Score = 0;
    x = 5;
    y = 540;
    alert("你輸了!");
    alert("請重新開始");
  }
window.requestAnimationFrame(draw);
  }
    draw();
};
