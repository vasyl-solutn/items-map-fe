import React, { Component } from 'react';

class ApiCallComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: false, // Add a loading state
    };
  }

  componentDidMount() {
    this.setState({ loading: true }); // Set loading to true when the component mounts and the API call starts
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json =>
        setTimeout(() => { // Simulate a delay
          this.setState({ data: json, loading: false }); // Set loading to false and data to the response after the delay
        }, 2000) // Delay in milliseconds, e.g., 2000ms = 2 seconds
      );
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div>
        {loading ? (
          <p>Loading...</p> // Display this text while loading is true
        ) : data ? (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        ) : (
          <p>Data not found</p> // Display this if there is no data
        )}
      </div>
    );
  }
}

export default ApiCallComponent;
