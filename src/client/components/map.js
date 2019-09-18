/* becodeorg/trouvkach
 *
 * /src/client/components/map.js - Map Component
 *
 * coded by Lionel Franco, Cynthia Martiny & Florent Bruyers
 * started at 11/09/2019
 */

import React, {useState} from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";

const Maps = () => {
    const [coords, setCoords] = useState([0, 0]);
    const localisation = () => {
        navigator.geolocation.getCurrentPosition(pos =>
            setCoords([pos.coords.latitude, pos.coords.longitude]),
        );
    };
    localisation();
    return (
        <div>
            <Map
                center={coords}
                zoom={15}
                style={{height: "400px", width: "800px"}}>
                <TileLayer
                    attribution={
                        '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }
                    url={"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}
                />
                <Marker position={coords}>
                    <Popup>{"Pôle image de Liège"}</Popup>
                </Marker>
            </Map>
        </div>
    );
};

export default Maps;
