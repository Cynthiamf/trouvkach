/* becodeorg/trouvkach
 *
 * /src/client/components/map.js - Map Component
 *
 * coded by Lionel Franco, Cynthia Martiny & Florent Bruyers
 * started at 11/09/2019
 */

import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";

class Maps extends React.Component {
    constructor() {
        super();
        this.state = {
            terminals: [],
            banks: [],
            coords: [0, 0],
        };
    }
    componentDidMount() {
        fetch("/api/terminals")
            .then(res => res.json())
            .then(terminals => {
                this.setState({terminals});
            });
        fetch("/api/banks")
            .then(res => res.json())
            .then(banks => {
                this.setState({banks});
            });
        navigator.geolocation.getCurrentPosition(pos =>
            this.setState({
                coords: [pos.coords.latitude, pos.coords.longitude],
            }),
        );
    }

    render() {
        return (
            <div>
                <Map
                    center={this.state.coords}
                    zoom={15}
                    style={{height: "400px", width: "800px"}}>
                    <TileLayer
                        attribution={
                            '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        }
                        url={"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}
                    />
                    <Marker position={this.state.coords}>
                        <Popup>{"Vous êtes ici !"}</Popup>
                    </Marker>
                    {this.state.terminals.map(terminal => (
                        <Marker
                            key={terminal._id}
                            position={[terminal.latitude, terminal.longitude]}>
                            <Popup>{`ATM: ${terminal.address}`}</Popup>
                        </Marker>
                    ))}
                </Map>
            </div>
        );
    }
}

export default Maps;
