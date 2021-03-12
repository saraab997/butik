import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.porudzbinaURL = this.porudzbinaURL.bind(this);
    }
    porudzbinaURL() {
        const baseURL = "http://127.0.0.1:8000/";
        let endpoint = "formaZaPorudzbinu?";

        if (this.props.selektovani)
            this.props.selektovani.forEach((element, index) => {
                let id = "id";
                endpoint =
                    endpoint + id + "[" + index + "]" + "=" + element.id + "&";
            });
        return baseURL + endpoint;
    }
    render() {
        return (
            <nav
                style={{ backgroundColor: "#3C1518" }}
                className="navbar navbar-expand-lg text-white "
            >
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a
                                className="nav-link"
                                href="http://127.0.0.1:8000/"
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href={this.porudzbinaURL()}>
                                Porudzbina
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

if (document.getElementById("navbar")) {
    ReactDOM.render(<Navbar />, document.getElementById("navbar"));
}
