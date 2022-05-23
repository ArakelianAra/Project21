class ground{
constructor(x,y,w,h){
this.x=x
this.y=y
this.width=w
this.height=h
var options={
    isStatic:true
}
this.body=Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,options)
Matter.World.add(world,this.body)

}
display(){
    push()
    rectMode(CENTER)
    rect(this.x,this.y,this.width,this.height)
    pop()
}
}