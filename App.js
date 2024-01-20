
import { Component } from "react";
import Welcome from "./Components/Welcome";
class App extends Component{
    state = {isLoggedIn:true}
    render() {
        const {isLoggedIn} = this.state
       
        return(
            <div>
                <Welcome greetings="Hello" name="Sai"/>
                {isLoggedIn? <button>Logout</button> : <button>Login</button>}
            
            </div>
        )
    }
}



export default App;
