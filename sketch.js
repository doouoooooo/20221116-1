var face_x = [] 
var face_y = []
var face_size = []
var face_num = 2
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  //mic= new p5.AudioIn()
  for(var i=0;i<face_num;i++){
    face_size[i] = random(190,400)  //臉的大小190~400
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
  }
}



function draw() {
  background(220);
  textSize(40)
  text("x:"+mouseX+  "y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++){
  //var micLevel=mic.getevel
  //console.log(micLevel)
  //for(var)

push() 
var f_s = face_size[j]
translate(face_x[j],face_y[j])
  //background(0)
  //noStroke()
  fill("#d90429")
  rect(0,0,f_s,f_s/1.4)
  
  fill("#e9c46a")
  ellipse(-f_s/3.5+map(mouseX,0,width,-f_s/21,f_s/7),0+map(mouseY,0,height,-f_s/21,f_s/7),60)//左眼
  fill("#e76f51")
  ellipse(f_s/4.2+map(mouseX,0,width,-f_s/21,f_s/7),0+map(mouseY,0,height,-f_s/21,f_s/7),100)//右眼
  //console.log(map(mouseX,0,width,-20,60))
  fill("#e9c46a")
  rect(-f_s/4.66,-f_s/4.2,f_s/2.8,f_s/14)//左眉毛
  fill("#e9d8a6")
  rect(f_s/4.2,-f_s/4.2,f_s/2.8,f_s/14)//右眉毛
 
  fill("#0077b6")
  rect(0,f_s/42,f_s/14,f_s/5.25)//鼻
  fill("#588157")
  rect(-f_s/1.68,f_s/42,f_s/8.4,f_s/2.8)//左耳
  fill("#0077b6")
  rect(f_s/1.68,f_s/42,f_s/75,f_s/2.8)//右耳


  if(mouseIsPressed)
  {
  fill("#e9d8a6")
  arc(0,f_s/4.2,f_s/2.1,f_s/4.2,0,180)
  //mouseIsPressed為true，代表有按下滑鼠
    fill("#e9d8a6")
  arc(0,f_s/5.6,f_s/2.1,f_s/2.8,0,180) //下弧
  }
  else              
  {
    //mouseIsPressed為false，代表沒有按下滑鼠
    fill("#e9d8a6")
    arc(0,f_s/5.6,f_s/2.1,f_s/2.1,0,180)//上弧
  
    noFill()
 pop()
 }
 
}
}