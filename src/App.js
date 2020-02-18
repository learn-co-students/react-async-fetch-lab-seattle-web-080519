import React from 'react';

class App extends React.Component {
    // constructor(){
    //     this.state = {
    //         spacePeople: []
    //     }
    // }

    state = {
        spacePeople: []
    };

    

    fetchAPI = () => {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(({people}) => this.setState({
            spacePeople: people
        }))
    }

    componentDidMount(){
        this.fetchAPI();
    }

    render() {
        return(
            <div>
                {this.state.spacePeople.map((p, id) =>
                    <h1 key={id}>{p.name}</h1>
                    )}
            </div>
        )
    }

    // componentDidMount() {
    //     fetch("http://api.open-notify.org/astros.json")
    //     .then(response => response.json())
    //     .then(({people}) => this.setState({
    //         spacePeople: people
    //     }))
    // }
}
export default App;