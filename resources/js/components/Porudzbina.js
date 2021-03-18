import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Porudzbina extends Component {
    constructor(props) {
        super(props);

        this.state = {
            proizvodi: this.props.proizvodi
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    submit(e) {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/porudzbina/post", {
            ime: this.state.ime,
            prezime: this.state.prezime,
            adresa: this.state.adresa,
            broj_telefona: this.state.broj_telefona,
            grad: this.state.grad,
            drzava: this.state.drzava,
            proizvodi: this.state.proizvodi
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container allButFooter">
                    <Navbar selektovani={[]} />

                    <form onSubmit={this.submit.bind(this)}>
                        <div className="row">
                            <div className="col">
                                Ime:
                                <input
                                    name="ime"
                                    placeholder="Unesite ime.."
                                    onChange={this.handleChange.bind(this)}
                                    type="text"
                                    class="form-control"
                                ></input>
                            </div>
                            <div className="col">
                                Prezime:
                                <input
                                    name="prezime"
                                    placeholder="Unesite prezime.."
                                    onChange={this.handleChange.bind(this)}
                                    type="text"
                                    class="form-control"
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Broj telefona:
                                <input
                                    name="broj_telefona"
                                    placeholder="Unesite broj telefona.."
                                    onChange={this.handleChange.bind(this)}
                                    type="text"
                                    class="form-control"
                                ></input>
                            </div>
                            <div className="col">
                                Adresa:
                                <input
                                    name="adresa"
                                    placeholder="Unesite adresu.."
                                    onChange={this.handleChange.bind(this)}
                                    type="text"
                                    class="form-control"
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Grad:
                                <input
                                    name="grad"
                                    placeholder="Unesite grad.."
                                    onChange={this.handleChange.bind(this)}
                                    type="text"
                                    class="form-control"
                                ></input>
                            </div>
                            <div className="col">
                                Drzava:
                                <input
                                    name="drzava"
                                    placeholder="Unesite drzavu.."
                                    onChange={this.handleChange.bind(this)}
                                    type="text"
                                    class="form-control"
                                ></input>
                            </div>
                            <input
                                className="btn btn-primary btn-block"
                                type="submit"
                                value="PORUCI"
                            ></input>
                        </div>
                    </form>
                </div>
                <Footer active="porudzbina" />
            </React.Fragment>
        );
    }
}

if (document.getElementById("porudzbina")) {
    const el = document.getElementById("porudzbina");

    const proizvodi = JSON.parse(el.dataset.proizvodi);
    ReactDOM.render(
        <Porudzbina proizvodi={proizvodi} />,
        document.getElementById("porudzbina")
    );
}
