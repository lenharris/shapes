document.addEventListener('DOMContentLoaded', () => {
    const square:HTMLElement = document.getElementById('square');
    const circle:HTMLElement = document.getElementById('circle');
    const rectangle:HTMLElement = document.getElementById('rectangle');
    const triangle:HTMLElement = document.getElementById('triangle');
    
    const shapeContainer:HTMLDivElement=(<HTMLDivElement>document.getElementById('screen'));
   
    
    const userValue = (<HTMLInputElement>document.getElementById("myValue")).value;
    

    // shape class
    class Shape {
        div:HTMLDivElement;
        input;
        value: number;
        constructor() {
            
            this.div = document.createElement('div');
    
            this.div.addEventListener('click', function() {
    //Clicking on any shape should call a method named describe(), which should update the statistics in the sidepanel in index.html    
                // describe();
            } );
            this.div.addEventListener('dblclick', function() {
        //Double clicking on any shape should remove the shape from the screen
                this.remove();
            });
        }
        draw(id){
            shapeContainer.appendChild(this.div);
        }

    
    }
    
    // square class
    class Square extends Shape {
        
        constructor() {
         super();
        this.div.id = "square-shape";
        this.div.style.height = `${userValue}px`;
        this.div.style.width = `${userValue}px`;
        }
        
    }


     // square button
     square.addEventListener("click", ()=>{
        let newSquare= new Square;
        
        newSquare.draw("square-shape");

    });

    

    // function getRandomPosition(div) {
    //     for(var i = 0; i < 6; i++) {
    //         [Math.floor(Math.random() * )]
    //     }
    // }
    
    // circle class
    class Circle extends Shape { 
        radius: number;
        constructor() {
            super();
        
            this.div.id ="circle-shape";
            this.radius = 0;
            
        }
    
    }
    
    // triangle class
    class Triangle extends Shape {
        height: number;
        constructor() {
            super();
            this.div.id = "triangle-shape";
            this.height;
           
        }
    }
    
    // rectangle class
    class Rectangle extends Shape {
        width: number;
        height: number;
        constructor() {
            super();
            this.width;
            this.height;
            this.div.id;
        }
    }

    

    circle.addEventListener("click", ()=>{
        let newCircle = new Circle;

        newCircle.draw("circle-shape");
    });

    // triangle.addEventListener("click", ()=>{
    //     let newTriangle = new Triangle;

    //     newTriangle.draw("triangle-shape");
    // });

    // rectangle.addEventListener("click", ()=>{
    //     let newRectangle = new Rectangle;

    //     newRectangle.draw("rectangle-shape");
    // });

})
