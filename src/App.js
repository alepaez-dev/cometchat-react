import logo from './logo.svg';
import './App.css';
import * as CONSTANTS from "./constants/constants";
import { CometChat } from "@cometchat-pro/chat"

// UI KIT
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

const createUserCometchat = (uid, name) => {
  let user = new CometChat.User(uid);
  user.setName(name);
    
  CometChat.createUser(user, CONSTANTS.AUTH_KEY).then(
    user => {
      console.log("user created", user);
    }, error => {
      console.log("error", error)
    }
  )
}

const loginUserCometchat  = (uid) => {
  CometChat.login(uid, CONSTANTS.AUTH_KEY).then(
    user => {
      console.log("Login successful", { user });
    }, 
    error => {
      console.log("Login failed with exception", { error })
    }
  )
}

function App() {
  return (
    <div className="App">
      <button onClick={() => createUserCometchat("user1", "Alejandra Paez")}>
        Crear usuario
      </button>

      <button onClick={() => loginUserCometchat("bere1")}>
        Login
      </button>

      <div style={{ width: "800px", height: "800px" }}>
        <CometChatUI />
      </div>


    </div>
  );
}

export default App;
