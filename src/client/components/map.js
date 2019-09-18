/* becodeorg/trouvkach
 *
 * /src/client/components/map.js - Map Component
 *
 * coded by Lionel Franco
 * started at 11/09/2019
 */

import * as React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";

const Maps = () => (
    <div>
        <Map
            center={[50.633277, 5.586462]}
            zoom={1}
            style={{height: "400px", width: "800px"}}>
            <TileLayer
                attribution={
                    '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}
            />
            <Marker position={[50.633277, 5.586462]}>
                <Popup>{"Pôle image de Liège"}</Popup>
            </Marker>
        </Map>
    </div>
);

export default Maps;
