/* becodeorg/trouvkach
 *
 * /src/client/components/search.js - Search Component
 *
 * coded by Lionel Franco
 * started at 11/09/2019
 */

import * as React from "react";

const Search = () => (
    <div>
        <span>{"Your location: "}</span>
        <input type={"text"} className={"input"} placeholder={"Location..."} />
        <button type={"button"}>{"Search"}</button>
    </div>
);

export default Search;
