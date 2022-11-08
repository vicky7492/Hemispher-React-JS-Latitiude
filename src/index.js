import React from 'react';
import ReactDOM from "react-dom";
import HemisphereDisplay from './HemisphereDisplay';


class App extends React.Component {

    state = { latitude: null, error: " " }
    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude }) },
            (error) => { this.setState({ error: error.message }) }
        );
    }

    render() {
        if (this.state.error && !this.state.latitude) {
            return this.state.error
        }
        else {
            return <div><HemisphereDisplay latitude={this.state.latitude} /></div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)



