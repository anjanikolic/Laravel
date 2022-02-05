import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Televizor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            televizor: this.props.televizor,
            izmenaRez: false,
            novaRez: ""
        };
    }

    pozoviFormuZaIzmenu() {
        this.setState({ izmenaRez: !this.state.izmenaRez });
    }
    formaIzmena() {
        if (this.state.izmenaRez) {
            return (
                <input
                    placeholder="Nova rezolucija"
                    onChange={this.izmenaRez.bind(this)}
                ></input>
            );
        }
    }

    izmenaRez(e) {
        this.setState({ novaRez: e.target.value });
    }

    handleizmenaRez() {
        axios
            .put("http://127.0.0.1:8000/televizor/izmena", {
                id: this.state.televizor.id,
                rezolucija: this.state.novaRez
            })
            .then(res => {
                if (res.data.message === true) {
                    let televizor = this.state.televizor;
                    televizor.rezolucija = this.state.novaRez;
                    this.setState({ televizor });
                }
            });
    }

    obrisitelevizor() {
        axios
            .delete(
                "http://127.0.0.1:8000/televizor/brisanje?id=" +
                    this.state.televizor.id
            )
            .then(res => {
                if (res.data.message === true) {
                    this.props.onDelete(this.state.televizor.id);
                }
            });
    }

    render() {
        return (
            <tr>
                <td>{this.state.televizor.model}</td>
                <td>{this.state.televizor.velicina}</td>
                <td>{this.state.televizor.rezolucija}</td>
                <td>
                    <button
                        onDoubleClick={this.obrisitelevizor.bind(this)}
                        className="btn btn-warning"
                    >
                        Brisanje
                    </button>
                    <button
                        onDoubleClick={this.handleizmenaRez.bind(this)}
                        onClick={this.pozoviFormuZaIzmenu.bind(this)}
                        className="btn btn-primary"
                    >
                        Izmeni rezoluciju
                    </button>
                    {this.formaIzmena()}
                </td>
            </tr>
        );
    }
}

if (document.getElementById("televizor")) {
    ReactDOM.render(<televizor />, document.getElementById("televizor"));
}
