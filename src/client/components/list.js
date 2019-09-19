/* becodeorg/trouvkach
 *
 * /src/client/components/list.js - List Component
 *
 * coded by Lionel Franco, Cynthia Martiny & Florent Bruyers
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
                console.log(terminals[0].location.coordinates);
            });
        fetch("/api/banks")
            .then(res => res.json())
            .then(banks => {
                this.setState({banks});
            });
        // fetch("/api/terminals/:long/:lat")
        //     .then(res => res.json())
        //     .then(terminals.location.coordinates => {
        //         this.setState({coordinates});
        //     });
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
                        <li>
                            {terminal.location && terminal.location.coordinates}
                        </li>
                    </ul>
                ))}
            </div>
        );
    }
}

export default List;
