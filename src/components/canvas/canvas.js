import React from "react";
import './canvas.css';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        //Creating a ref to the DOM node through our class constructor. This allows us to attach a ref on the div in the dom with the matching ref.
        this.canvasRef = React.createRef()
    }


    componentDidMount() {
        //Making a variable for the canvas
        const canvas = this.canvasRef.current;
        //This is the "context" with which we are making our shapes through
        const ctx = canvas.getContext('2d');

        //Making an event listener for the window so we can cause the canvas to be the same size as the viewport
        window.addEventListener('resize', resizeCanvas, false);


        function resizeCanvas() {
            //setting the canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            //Drawing needs to be in side of resizeCanvas else when the window is resized everything will reset
            drawStuff();
        }
        resizeCanvas();


        function drawStuff() {
            const { radius } = this.props;
            let arcHeight = window.innerHeight / 2;
            let arcWidth = window.innerWidth / 2;

            ctx.beginPath();
            ctx.arc(arcWidth, arcHeight, 200, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'black';
            ctx.fill();

            // ctx.clearRect(0, 0,  window.innerWidth, window.innerHeight);

        }
    }






    render() {

        return <canvas ref={this.canvasRef}></canvas>;
    }
};

export default Canvas;