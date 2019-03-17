/*
Basic rectangle class for sprites and animation with simple collision algorithm.
vel is a feature of type Vector()

TODO : ADD ROTATION
*/


class RectBody
{
    constructor(x, y, w, h, vel = 0)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vel = vel;
    }
    getCollision(obj)
    {
        if(this.x + this.w > obj.x && this.x < obj.x + obj.w
        && this.y + this.h > obj.y && this.y < obj.y + obj.h){
            return true;
        }
        return false;
    }
}
