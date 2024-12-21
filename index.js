class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Getter for diameter
    get diameter() {
        return this.radius * 2;
    }

    // Setter for diameter
    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    // Getter for circumference
    get circumference() {
        return this.diameter * Math.PI;
    }

    // Setter for circumference
    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
    }

    // Getter for area
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Setter for area
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}

// Example Usage:
const circle = new Circle(10);

// Test circumference getter
console.log(circle.circumference); // Should return ~62.83185307179586

// Test circumference setter
circle.circumference = 94.24777960769379; // Corresponds to a radius of 15
console.log(circle.radius); // Should return 15
