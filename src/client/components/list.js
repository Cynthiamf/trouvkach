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
            name: [],
        };
    }
    componentDidMount() {
        fetch("/banks")
            .then(results => results.json())
            .then(data => {
                const name = data.results.map(names => (
                    <div key={names.results}>
                        <p>{names.results}</p>
                    </div>
                ));
                this.setState({name});
                console.log("state", this.state.name);
            });
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default List;
