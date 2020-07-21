import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'


class FetchApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      image: ''
    }
    this.fetchApi = this.fetchApi.bind(this);
  }

  fetchApi() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => this.setState({ image: data, loaded: true }))
  }

  componentDidMount() {
    setTimeout(() => this.fetchApi(), 3000)
  }

  render() {
    if (!this.state.loaded) {
      return <CircularProgress/>
    }
    return (
      <div>
        <img src={this.state.image.message} alt="random dog from api" />
        <button onClick={this.fetchApi}>Fetch!</button>
      </div>
    )
  }
}

export default FetchApi;