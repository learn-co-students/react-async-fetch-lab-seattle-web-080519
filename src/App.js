// create your App component here
import React, {Component} from 'react'
const API = 'http://api.open-notify.org/astros.json'

class App extends Component {
state = {
    'peopleInSpace': ''
};

componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({peopleInSpace: data.people}))
    .then(() =>console.log(this.state))
};

render() {
    return (
        <div>
            {/*this.state.peopleInSpace*/}
            <h1>I am a website</h1>
        </div>
    )
};
}

export default App