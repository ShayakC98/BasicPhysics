/*

Basic Vector class.

*/

class Vector
{
    constructor(x, y, z = 0)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(obj)
    {
        this.x += obj.x;
        this.y += obj.y;
        this.z += obj.z;
    }

    sub(obj)
    {
        this.x -= obj.x;
        this.y -= obj.y;
        this.z -= obj.z;
    }

    dot(obj)
    {
        return this.x * obj.x + this.y * obj.y + this.z * obj.z;
    }

    cross(obj)
    {
        return new Vector(this.y * obj.z - this.z * obj.y,
                         -this.x * obj.z + this.z * obj.x,
                          this.x * obj.y + this.y * obj.x);
    }
}
