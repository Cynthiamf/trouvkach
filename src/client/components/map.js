/* becodeorg/trouvkach
 *
 * /src/client/components/map.js - Map Component
 *
 * coded by Lionel Franco
 * started at 11/09/2019
 */

import * as React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import Terminals from "../../../_dev/terminals.json";
import {
    bankCountry,
    terminalAddress,
    bankName,
    terminalLatitude,
    terminalLongitude,
} from "../components/list";

const latitude = Terminals.map(element => element.latitude);
const longitude = Terminals.map(element => element.longitude);

console.log(latitude);
console.log(longitude);

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
            <Marker
                position={[
                    terminalLatitude[0].props.children,
                    terminalLongitude[0].props.children,
                ]}>
                <Popup>
                    {bankName[0].props.children}
                    <br />
                    {terminalAddress[0].props.children}
                    <br />
                    {bankCountry[0].props.children}
                </Popup>
            </Marker>
        </Map>
    </div>
);

export default Maps;
