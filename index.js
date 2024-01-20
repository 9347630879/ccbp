
import { Component } from "react";
import './index.css'

class Welcome extends Component {
    state = {count:0}
    Increment = () => {
        this.setState((prevstate) => ({count:prevstate.count + 1}))
        
    }
    Decrement = () => {
        this.setState((prevstate) => ({count:prevstate.count - 1}))
    }
    render() {
        const {count} = this.state
        return (
            <div className="container">
                <h1 className="heading">Counter</h1>
                <p>{count}</p>
                <div>
                    <button onClick={this.Increment} className="btn">increase</button>
                    <button onClick={this.Decrement} className="btn">decrease</button>
                </div>
            </div>
        )
    }
}




export default Welcome