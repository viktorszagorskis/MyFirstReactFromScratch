import React, { Component } from 'react';

class CounterBlue extends Component {

    // constructor () {
    //     super();                // Base constructor
    //     this.handleIncementClick = this.handleIncementClick.bind(this);
    //      //https://youtu.be/Ke90Tje7VS0?t=3993
    // }
    
    state = { 
        count: 9,
        tags: ["tag1", "tag2", "tag3"]
        // iageUrl: 'https://picsum.photos/100'
     }; // STATE includes any data this component needs

     style = {
        fontSize: 60
     }

     renderTags () {
        //  if (this.state.tags)  
        if (this.state.tags.length === 0) return <p> There are no tags!</p>;
        if (this.state.tags.length === 1) return <p> There is one tag!</p>;
        return <ul> { this.state.tags.map(tag => <li key={tag}> {tag}</li> )}</ul> ;
         
     }

    handleIncrementClick = () => {
        // https://youtu.be/Ke90Tje7VS0
        this.setState({ count: this.state.count + 1 })
        console.log("Incement clicked, ", this.state.count);
    }

    handleDecrementClick = () => {
        // https://youtu.be/Ke90Tje7VS0
        this.setState({ count: this.state.count - 1 })
        console.log("Minus clicked, ", this.state.count);
    }

    render() { // RENDER interacts with DATA and represent or gather DATA dynamically
                // This is ASUNC method
        return (
        <div style={{color:"blue"}}>
            {/* <img src={this.state.iageUrl} alt=""/> */}
            <span style={ this.style } className= {this.getBadgeClasses()}> {this.formatCount()} </span> 
            <button 
                //https://youtu.be/Ke90Tje7VS0?t=4497
                onClick={ () => this.handleIncrementClick({ count : 99})} // inline func
                // onClick={this.handleIncementClick}
                className="btn btn-secondary btn-sm"> Increase </button> 
                <span className="m-1" ></span>
            <button 
                //https://youtu.be/Ke90Tje7VS0?t=4497
                onClick={ () => this.handleDecrementClick({ oho : 99})} // inline func
                // onClick={this.handleIncementClick}
                className="btn btn-secondary btn-sm"> Decrease </button> 

            { this.renderTags() }
        </div>
        );
    } 
    
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-secondary";
        return classes;
    }

    formatCount (){
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : <h1>{ count} </h1>;
        // return count === 0 ? 'Zero' : count;
        // return this.state.count === 0 ? 'Zero' : 22;
    }
}
 
export default CounterBlue;


