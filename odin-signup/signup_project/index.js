class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "point"
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point (5, 5)
const p2 = new Point (10, 10)

p1.displayName;
p1.distance;
p2.displayName;
p2.distance;

console.log(Point.displayName);
console.log(Point.distance(p1, p2));
console.log(p1.distance)

//this is a method, it is an object with a function
let greet = {
    name: 'Joseph',
    sayHello: () => {
        console.log("Hello " + greet.name)
    }
}

//calling the method.
greet.sayHello()
