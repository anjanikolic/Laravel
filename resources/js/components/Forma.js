import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Forma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rezolucija: "",
            model: "",
            velicina: "",
            firma_id: this.props.firmaID
        };
    }

    handleDodavanjeTelevizora() {
        axios
            .post("http://127.0.0.1:8000/televizor/dodavanje", {
                model: this.state.model,
                velicina: this.state.velicina,
                rezolucija: this.state.rezolucija,
                firma_id: this.state.firma_id
            })
            .then(res => {});
    }

    noviTelevizorModel(e) {
        this.setState({ model: e.target.value });
    }
    noviTelevizorVelicina(e) {
        this.setState({ velicina: e.target.value });
    }
    noviTelevizorRezolucija(e) {
        this.setState({ rezolucija: e.target.value });
    }

    render() {
        return (
            <tr>
                <td>
                    <input
                        onChange={this.noviTelevizorModel.bind(this)}
                        placeholder="Model"
                    ></input>
                </td>
                <td>
                    <input
                        onChange={this.noviTelevizorVelicina.bind(this)}
                        placeholder="Velicina (10l)"
                    ></input>
                </td>
                <td>
                    <input
                        onChange={this.noviTelevizorRezolucija.bind(this)}
                        placeholder="Rezolucija"
                    ></input>
                </td>
                <td>
                    <button
                        onClick={this.handleDodavanjeTelevizora.bind(this)}
                        className="btn btn-success"
                    >
                        Dodaj Televizor
                    </button>
                </td>
            </tr>
        );
    }
}

if (document.getElementById("forma")) {
    ReactDOM.render(<Forma />, document.getElementById("forma"));
}
