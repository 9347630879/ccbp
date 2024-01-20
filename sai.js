
import { Component } from "react";
import Welcome from "./Components/Welcome";
class App extends Component{
    state = {isLoggedIn:true}
    
    authreact = () =>{
        const {isLoggedIn} = this.state
        if (isLoggedIn === false){
            return <button>Logout</button>
        }
            return <button>Login</button>
    }

   
        
        render() {
        return(
            <div>
                <Welcome greetings="Hello" name="Sai"/>
                {this.authreact()}
                
            
            </div>
        )
    }
}



export default App;
