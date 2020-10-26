// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i <= 8; i++){
    for(let j = 0; j <= 8; j++){
    if(i%2==0&&j%2==0){
      fill(255);
    }
    if(i%2==1&&j%2==1){
      fill(255);
    }
    else if(i==j){
      fill(255);
    }
    else if(i%2==0&&j==0){
      fill(255);
    }
    else if(i%2==0&&j==2){
      fill(255);
    }
    else if(i%2==0&&j==4){
      fill(255);
    }
    else if (i%2==0&&j==6) {
      fill(255);
    }
    else if(i%2==0&&j==8){
      fill(255);
    }
    else{
      fill(143);
    } // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    rect(size*i, size*j, size, size)
    if()
    }
  }
}
