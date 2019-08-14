import React from "react";
import Animation from "../animations/index";
import './main-page.css'

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
        }

    }

    componentDidMount(){
        this.setState({height: this.windowDiv.clientHeight});
        this.setState({width: this.windowDiv.clientWidth});
        this.windowDiv.addEventListener('resize', this.divResize, false);
    }

    divResize = () =>{

    }


    render() {
        return  (
            <div ref={ (windowDiv) => this.windowDiv = windowDiv} className="window-div">
              <Animation props/>
            </div>
        )
    }
};

export default Canvas;