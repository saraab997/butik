import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ArticleItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            proizvod: this.props.proizvod,
            slika: this.props.slika
        };
    }

    select() {
        this.props.select(this.state.proizvod);
    }
    delete() {
        axios
            .delete(
                "http://127.0.0.1:8000/odeca/delete?id=" +
                    this.state.proizvod.id
            )
            .then(() => {
                this.props.delete(this.state.proizvod);
            });
    }

    render() {
        return (
            <div class="card" style={{ width: "18rem" }}>
                <img
                    src={"./css/img/" + this.state.slika + ".jpg"}
                    class="card-img-top img-thumbnail"
                    alt="..."
                ></img>
                <div class="card-body">
                    <h5 class="card-title">{this.state.proizvod.naziv}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        {this.state.proizvod.kategorija}
                    </h6>
                    <div className="row">
                        <div className="col-2">
                            <input
                                onChange={this.select.bind(this)}
                                className="form-control"
                                type="checkbox"
                            ></input>
                        </div>
                        <div className="col ">
                            <a
                                onClick={this.delete.bind(this)}
                                class="btn btn-primary btn-block"
                            >
                                Delete
                            </a>
                            <a
                                href={
                                    "http://127.0.0.1:8000/odeca/getByID?id=" +
                                    this.state.proizvod.id
                                }
                                class="btn btn-secondary btn-block"
                            >
                                Show
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("articleitem")) {
    ReactDOM.render(<ArticleItem />, document.getElementById("articleitem"));
}
