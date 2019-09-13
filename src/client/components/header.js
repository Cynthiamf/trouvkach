/* becodeorg/trouvkach
 *
 * /src/client/components/header.js - Header Component
 *
 * coded by Lionel Franco
 * started at 11/09/2019
 */

import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => (
    <div>
        <h1>
            <FontAwesomeIcon icon={["fas", "money-check-alt"]} size={"1x"} />
            {" ATM of Erebus"}
        </h1>
        <span>{"Your own ATM search tool !"}</span>
    </div>
);

export default Header;
