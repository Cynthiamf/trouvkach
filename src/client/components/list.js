import * as React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import IconCard from "../img/iconCard.png";
/*
import ArgentaImg from '../img/banks/argenta.png';
import AxaImg from '../img/banks/axa.png';
 */

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
        // fetch("/api/terminals/:long/:lat")
        //     .then(res => res.json())
        //     .then(terminals.location.coordinates => {
        //         this.setState({coordinates});
        //     });
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
                        <img src={IconCard} alt={"Icône Carte Bancaire"} />
                        <Card className={"card"}>
                            <CardContent className={"cardContent"}>
                                <Typography className={"terminalsName"}>
                                    {terminal.bankDetails[0] &&
                                        terminal.bankDetails[0].name}
                                </Typography>
                                <Typography className={"terminalsAddress"}>
                                    {terminal.address}
                                </Typography>
                            </CardContent>
                            <CardActions className={"cardAction"}>
                                <a
                                    href={
                                        terminal.bankDetails[0] &&
                                        terminal.bankDetails[0].url
                                    }
                                    target={"_blank"}>
                                    {"Visit our website."}
                                </a>
                            </CardActions>
                        </Card>
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
