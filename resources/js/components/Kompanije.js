import React, { Component } from "react";
import ReactDOM from "react-dom";
import firma from "./firma";
export default class Firme extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firme: []
        };
        this.ucitavanje();
    }

    ucitavanje() {
        axios.get("http://127.0.0.1:8000/firme/get").then(res => {
            const firme = res.data.firme;

            firme.map(async firma => {
                firma.televizori = await this.ucitavanjeTelevizora(
                    firma.id
                );
                this.setState({ firme: firme });
            });
        });
    }

    async ucitavanjeTelevizora(firma_id) {
        const response = await axios.get(
            "http://127.0.0.1:8000/firme/get-televizori?firma_id=" +
                firma_id
        );
        return response.data.televizori;
    }

    prikazfirma() {
        {
            if (this.state.firme.length != 0)
                return this.state.firme.map(k => {
                    if (k != null)
                        return <firma firma={k} key={k.id} />;
                });
            else return "Nema firma!";
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "#4ccf6f" }} className="container">
                <div className="row ">
                    <div className="col d-flex justify-content-center">
                        <h4>firme:</h4>
                    </div>
                </div>
                {this.prikazfirma()}
            </div>
        );
    }
}

if (document.getElementById("firme")) {
    ReactDOM.render(<firme />, document.getElementById("firme"));
}
