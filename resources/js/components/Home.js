import React, { Component } from "react";
import ReactDOM from "react-dom";
import ArticleItem from "./ArticleItem";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            odeca: []
        };
        this.requestOdeca();
        this.selected = this.selected.bind(this);
        this.deleted = this.deleted.bind(this);
    }
    requestOdeca() {
        axios.get("http://127.0.0.1:8000/odeca/get").then(resp => {
            this.setState({ odeca: resp.data.odeca });
        });
    }
    selected(item) {
        console.log(item);
        const itemID = item.id;
        let odeca = this.state.odeca;
        odeca = odeca.map(p => {
            if (p.id == itemID) p.selected = !p.selected;
            return p;
        });
        this.setState({ odeca: odeca });
    }
    deleted(item) {
        this.setState(state => {
            return { odeca: state.odeca.filter(o => o.id != item.id) };
        });
    }
    prikazOdece() {
        return (
            <div className="row">
                {this.state.odeca.map(proizvod => {
                    return (
                        <div className="col-4">
                            <ArticleItem
                                select={this.selected}
                                delete={this.deleted}
                                key={proizvod.id}
                                slika={proizvod.kategorija}
                                proizvod={proizvod}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="container allButFooter">
                    <Navbar
                        selektovani={this.state.odeca.filter(p => p.selected)}
                    />
                    <h2 align="center">
                        Dobrodosli na kupovinu garDerobe.com!
                    </h2>
                    {this.prikazOdece()}
                </div>
                <Footer active="pocetna" />
            </React.Fragment>
        );
    }
}

if (document.getElementById("home")) {
    ReactDOM.render(<Home />, document.getElementById("home"));
}
