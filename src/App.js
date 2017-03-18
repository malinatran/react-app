import React from 'react';

// There are 2 ways to create a component:

// 1. Class
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    return (
      <div>
         <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

// 2. Stateless
const Widget = (props) =>
  <input type="text" onChange={props.update} />

export default App
