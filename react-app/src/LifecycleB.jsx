import React, {Component} from "react";

export default class LifecycleB extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "Pranav"
        }
        console.log("Constructor B");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps B");
        return null;
    }

    componentDidMount(){
        console.log("Mounted B");
    }

    shouldComponentUpdate(){
        console.log("B shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("B getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("B componentDidUpdate");
    }

    render(){
        console.log("Render");
        return <h1>Lifecycle B</h1>
    }


}