import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import React, { useState } from "react";
import LanguagePreference from "./components/LanguagePreference";
import Footer from "./components/Footer";
import SearchHistory from "./components/SearchHistory";
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   var history = new Array();
  //   this.state = {
  //     history: history,
  //     name: "ll",
  //   };
  //this.onClick = this.onClick.bind(this);
  // }
  // onClick() {
  //   this.setState({

  //   })
  // }

  render() {
    // console.log(this.state.history);
    return (
      <div>
        <div className="container">
          <Logo />
          <Form /*onClick={this.state.onClick}*/ />
          {/* <SearchHistory history={this.state.history} /> */}
          <LanguagePreference />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
