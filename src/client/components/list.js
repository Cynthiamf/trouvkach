/* becodeorg/trouvkach
 *
 * /src/client/components/list.js - List Component
 *
 * coded by Lionel Franco
 * started at 11/09/2019
 */

import * as React from "react";

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            terminals: [],
            banks: [],
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
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.banks.map(banks => (
                        <li key={banks.name}>
                            {"Name:"} {banks.name}
                        </li>
                    ))}
                    {this.state.terminals.map(terminals => (
                        <li key={terminals.address}>
                            {"Address:"} {terminals.address}
                        </li>
                    ))}
                    {this.state.banks.map(banks => (
                        <li key={banks.url}>
                            {"Website:"} {banks.url}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;
