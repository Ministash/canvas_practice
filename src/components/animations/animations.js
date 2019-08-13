import React from "react";
import Canvas from "../canvas/index";

class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radius: 90,

        };
        this.updateAnimationState = this.updateAnimationState.bind(this);
    }


    componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      }
    
      updateAnimationState() {
          if(this.state.circleR < 400){
              this.setState(prevState => ({ circle: prevState.circleR + 1 }));
              this.rAF = requestAnimationFrame(this.updateAnimationState);
          }
      }
    
      componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
      }




    render() {
            return <Canvas radius={this.state.radius} />;

    }
};

export default Animation;