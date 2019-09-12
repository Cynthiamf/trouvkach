/* becodeorg/trouvkach
 *
 * /src/client/components/list.js - List Component
 *
 * coded by Lionel Franco
 * started at 11/09/2019
 */

import * as React from "react";
import Bank from "../../../_dev/banks.json";

const List = () => (
    <div>
        <ul>
            <li>
                {Bank.map(Bankdetail => (
                    <span>{Bankdetail.name}</span>
                ))}
            </li>
        </ul>
    </div>
);

export default List;
