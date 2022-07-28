import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeast: data,
      selectedBeast: {},
      showModal: false,
    };
  }

  displayModel = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Main allBeast={this.state.allBeast} displayModel={this.displayModel} />
        <SelectedBeast
          show={this.state.showModal}
          handleClose={this.handleClose}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
