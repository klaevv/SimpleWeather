import React, { Component } from 'react';

class WeatherNote extends Component {

  handleChange = (event) => {
    // ...
  }

  render() {
    return (
      <div className="weather-note">
        <input type="text" value={this.props.temperature} onChange={this.handleChange} />
      </div>
    );
  }
}

export default WeatherNote;
