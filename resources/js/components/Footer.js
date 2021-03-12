import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    viSteOvde(stranica) {
        if (this.props.active === stranica) return "(Vi ste ovde)";
    }

    render() {
        return (
            <footer className="text-center bg-dark ">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a
                            className={"nav-link "}
                            href="http://127.0.0.1:8000/"
                        >
                            Pocetna {this.viSteOvde("pocetna")}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={"nav-link "}
                            href="http://127.0.0.1:8000/formaZaPorudzbinu"
                        >
                            Porudzbina {this.viSteOvde("porudzbina")}
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}

if (document.getElementById("home")) {
    ReactDOM.render(<Home />, document.getElementById("home"));
}
