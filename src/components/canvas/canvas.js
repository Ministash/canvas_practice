import React from "react";
import './canvas.css';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newRadius: this.props.radius
        }

        //Creating a ref to the DOM node through our class constructor. This allows us to attach a ref on the div in the dom with the matching ref.
        this.canvasRef = React.createRef()
        this.resizeCanvas = this.resizeCanvas.bind(this);
    }


    componentDidMount() {
        //Making an event listener for the window so we can cause the canvas to be the same size as the viewport
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas, false);
        this.drawStuff(90);
    }

    componentDidUpdate(){
        this.drawStuff(this.props.radius);
    }



    resizeCanvas = () => {
        //Making a variable for the canvas
        const canvas = this.canvasRef.current;

        //This is the "context" with which we are making our shapes through
        const ctx = canvas.getContext('2d');

        //setting the canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //Drawing needs to be in side of resizeCanvas else when the window is resized everything will reset
        this.drawStuff(this.state.newRadius);
    }


    drawStuff = (radius) => {
        //Making a variable for the canvas
        const canvas = this.canvasRef.current;

        //This is the "context" with which we are making our shapes through
        const ctx = canvas.getContext('2d');

        let arcHeight = window.innerHeight / 2;
        let arcWidth = window.innerWidth / 2;
        let height = window.innerHeight;
        let width = window.innerWidth;

            ctx.save();
            ctx.beginPath();
            ctx.clearRect(0, 0, width, height);
            ctx.arc(arcWidth, arcHeight, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.restore();


    }








    render() {
        return  <canvas ref={this.canvasRef}/>
    }
};

export default Canvas;