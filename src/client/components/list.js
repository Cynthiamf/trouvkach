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
                    {this.state.terminals.map(terminal => (
                        <li key={terminal.address}>
                            {"Address:"} {terminal.address}
                            {"Bank:"} {terminal.bank}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;
