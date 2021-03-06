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
              <Link to="/">DimePac - Store (Tax Included)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
              <br></br>
              
              <header style={{ textAlign: 'right', alignSelf: 'stretch'}}>
              <a href="#bottom" id="scroll-to-bottom">Checkout</a>
              </header>
              
            </header>
            
            
            <main>
            <p><small>&nbsp;1 free snack (up to $3) per customer.</small></p>
            <p><small>&nbsp;Receive a text for adjusted total after order.</small></p>
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
