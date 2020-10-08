import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            
            <header >
              <Link to="/">DimePac - Store&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
              <br></br>
              <header style={{ textAlign: 'right', alignSelf: 'stretch'}}>
              <a href="#bottom" id="scroll-to-bottom">Checkout</a>
              </header>
            </header>
            
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer id="bottom">Copyright ©2020 DimePac. All rights reserved</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
