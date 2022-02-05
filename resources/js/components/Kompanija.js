import React, { Component } from "react";
import ReactDOM from "react-dom";
import Televizor from "./Televizor";
import Forma from "./Forma";

export default class Firma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firma: this.props.firma,
            prikazaniTelevizori: false,
            prikazForme: false
        };
        this.onDeleteTelevizor = this.onDeleteTelevizor.bind(this);
        this.prikazTelevizora = this.prikazTelevizora.bind(this);
        this.prikazForme = this.prikazForme.bind(this);
        this.displayTelevizoriFirme = this.displayTelevizoriFirme.bind(
            this
        );
    }

    prikazTelevizora() {
        this.setState({ prikazaniTelevizori: !this.state.prikazaniTelevizori });
    }
    prikazForme() {
        this.setState({ prikazForme: !this.state.prikazForme });
    }

    displayTelevizoriFirme() {
        if (this.state.prikazaniTelevizori)
            return (
                <table className="table table-border table-dark">
                    <thead>
                        <tr>
                            <th style={{ width: "20%" }} scope="col-2">
                                Model
                            </th>
                            <th style={{ width: "20%" }} scope="col-3">
                                Velicina
                            </th>
                            <th style={{ width: "20%" }} scope="col-2">
                                Rezolucija
                            </th>
                            <th scope="col-5">Akcije</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!this.state.prikazForme ? (
                            this.state.firma.Televizori.map(a => {
                                return (
                                    <Televizor
                                        onDelete={this.onDeleteTelevizor}
                                        key={a.id}
                                        Televizor={a}
                                    />
                                );
                            })
                        ) : (
                            <Forma
                                key={this.state.firma.id}
                                firmaID={this.state.firma.id}
                            />
                        )}
                    </tbody>
                </table>
            );
    }
    onDeleteTelevizor(id) {
        this.setState(stariState => {
            let Televizori = stariState.firma.Televizori.filter(
                a => a.id != id
            );
            let firma = stariState.firma;
            firma.broj_Televizora--;
            firma.Televizori = Televizori;
            return { firma: firma };
        });
    }
    render() {
        return (
            <div className="container ">
                <div className="row d-flex justify-content-center">
                    <h5
                        style={{ cursor: "pointer" }}
                        onClick={this.prikazTelevizora}
                        onDoubleClick={this.prikazForme}
                    >
                        {" "}
                        {this.state.firma.naziv_firma +
                            " (" +
                            this.state.firma.broj_Televizora +
                            ")"}
                    </h5>
                </div>

                <div className="row ">{this.displayTelevizoriFirme()}</div>
            </div>
        );
    }
}

if (document.getElementById("firma")) {
    ReactDOM.render(<firma />, document.getElementById("firma"));
}
