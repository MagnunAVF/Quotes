import React from 'react';

const API_URL = 'http://localhost:5000'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: " ",
    };
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then(json => this.setState({quote: json.quote}))
  }

  render() {
    return (
      <div className="App">
        { this.state.quote !== " " ? (
          <div>
            <h1>Quote</h1>
              <h3>{this.state.quote}</h3>
            <button
              className="more"
              onClick={this.getQuotes}>
              Give me another!
            </button>
          </div>
        ) : (
          <div>
            <h1>No Quote!</h1>
            <button
              className="more"
              onClick={this.getQuotes}>
              Give One
            </button>
          </div>
        ) }
      </div>
    );
  }
}

export default App;
