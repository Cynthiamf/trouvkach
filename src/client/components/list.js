/* becodeorg/trouvkach
 *
 * /src/client/components/list.js - List Component
 *
 * coded by Lionel Franco, Cynthia Martiny & Florent Bruyers
 * started at 11/09/2019
 */

import * as React from "react";
import axios from "axios";
import "@babel/polyfill";

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
    async deleteTerminal(id) {
        await axios
            .get(`/api/update/${id}`)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div>
                {this.state.terminals.map(terminal => (
                    <ul key={terminal._id}>
                        <li className={"bank_name"} id={"id"}>
                            {terminal.bankDetails[0] &&
                                terminal.bankDetails[0].name}
                        </li>
                        <li className={"bank_address"} id={"id"}>
                            {terminal.address}
                        </li>
                        <li>
                            {terminal.bankDetails[0] &&
                                terminal.bankDetails[0].url}
                        </li>
                        <button
                            type={"button"}
                            onClick={() => this.deleteTerminal(terminal._id)}>
                            {"N'existe plus"}
                        </button>
                    </ul>
                ))}
            </div>
        );
    }
}

export default List;
