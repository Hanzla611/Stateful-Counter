import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
           
            case 'dec':
                if(this.state.counter < 1){
                        this.setState({
                            counter:0
                  });
                  }else {
                    this.setState({
                        counter: this.state.counter -1
                    });
                  }


                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                if(this.state.counter < value){
                    this.setState({
                        counter:0
                    });
                  }else {
                    this.setState({
                        counter: this.state.counter -value
                    });
                  }
                break;
        }
    }
    

    render() {
        return (
            <div>
                <h1 className="text">Current Counter :{this.state.counter} </h1>
                <div className="button">
                    <button className="inc" onClick={()=>this.counterChangedHandler('inc')}>Increment 1</button>
                    <button className="dec" onClick={()=>this.counterChangedHandler('dec')}>Decrement -1</button>
                    <button className="add" onClick={()=>this.counterChangedHandler('add' , 10)}>Add 10</button>
                    <button className="dec" onClick={()=>this.counterChangedHandler('sub', 8)}>Subtract 8</button>
                </div>
            </div>
        );
    }
}

export default Counter;