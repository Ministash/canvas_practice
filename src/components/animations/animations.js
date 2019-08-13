import React from "react";
import Canvas from "../canvas/index";
import { red } from "ansi-colors";

class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radius: 90,
        };
        this.updateAnimationState = this.updateAnimationState.bind(this);
    }

    updateAnimationState() {
        let num = window.innerHeight * 1.5;
        console.log(num);
        if (this.state.radius < num) {
            this.setState(prevState => ({ radius: prevState.radius + 20 }));
            this.rAF = requestAnimationFrame(this.updateAnimationState);
            console.log(this.state.radius);
        }
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
    }


    radiusBoolean = () => {
        this.updateAnimationState();
    }




    render() {
        return (
            <div onClick={this.radiusBoolean}>
                <Canvas radius={this.state.radius}  />;

            </div>
        )

    }
};

export default Animation;