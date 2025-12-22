import React, {Component} from "react";
import LifecycleB from "./LifecycleB";

export default class LifecycleA extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "Pranav"
        }
        console.log("Constructor A");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps A");
        return null;
    }

    componentDidMount(){
        console.log("Mounted A");
    }

    shouldComponentUpdate(){
        console.log("A shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("B getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("A componentDidUpdate");
    }

    stateChange = () => {
        this.setState = ({
            name: "Divya"
        })
    }

    render(){
        console.log("Render");
        return <div>
            <h1>Lifecycle A</h1>
            <button onClick={this.stateChange}>State Change</button>
            <LifecycleB />
        </div>
    }
}