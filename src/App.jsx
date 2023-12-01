import { PureComponent } from "react";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Catagory from "./pages/catagory";
import { AppWrapper } from "./style";

export class App extends PureComponent {
  render() {
    return (
      <AppWrapper color={"blue"}>
        <h2>App</h2>
        <div id="container">
          <Home />
          <Profile />
          <Catagory />
        </div>
      </AppWrapper>
    );
  }
}

export default App;
