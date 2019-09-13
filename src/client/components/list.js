/* becodeorg/trouvkach
 *
 * /src/client/components/list.js - List Component
 *
 * coded by Lionel Franco
 * started at 11/09/2019
 */

import * as React from "react";
import Bank from "../../../_dev/banks.json";
import Terminal from "../../../_dev/terminals.json";

export const bankName = Bank.map((bankDetail, index) => {
    if (index < 1) {
        return <p>{bankDetail.name}</p>;
    }
    return null;
});

export const terminalAddress = Terminal.map((terminalDetail, index) => {
    if (index < 1) {
        return <p>{terminalDetail.address}</p>;
    }
    return null;
});

export const bankUrl = Bank.map((bankDetail, index) => {
    if (index < 1) {
        return <p>{bankDetail.url}</p>;
    }
    return null;
});

const List = () => (
    <div>
        <ul>
            <li>{bankName}</li>
            <li>{terminalAddress}</li>
            <li>{bankUrl}</li>
        </ul>
    </div>
);

export default List;
