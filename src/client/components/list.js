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
                {this.state.terminals.map(terminal => (
                    <ul key={terminal._id}>
                        <li>
                            {terminal.bankDetails[0] &&
                                terminal.bankDetails[0].name}
                        </li>
                        <li>{terminal.address}</li>
                        <li>
                            {terminal.bankDetails[0] &&
                                terminal.bankDetails[0].url}
                        </li>
                    </ul>
                ))}
            </div>
        );
    }
}

export default List;
