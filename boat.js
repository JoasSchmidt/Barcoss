class Boat{
    constructor(x,y,w,h,boatpos){
        this.body=Bodies.rectangle(x,y,w,h)
        World.add(world,this.body)
        this.w=w
        this.h=h
        this.boatpos=boatpos
        this.image=loadImage("assets/boat.png")
    }
    show(){
        var pos= this.body.position
        var angle= this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,this.boatpos,this.w,this.h)
        pop()
    }
}