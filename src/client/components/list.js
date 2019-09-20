import * as React from "react";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import IconCard from '../img/iconCard.png';
/*
import ArgentaImg from '../img/banks/argenta.png';
import AxaImg from '../img/banks/axa.png';
 */

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

    /*
    function Image({ state }) {
        switch(state) {
            case terminal.bankDetails.name === 'Argenta':
                return <ArgentaImg />;
            case terminal.bankDetails.name === 'Axa':
                return <AxaImg />;
            default:
                return null;
        }
    }
    */

    render() {
        return (
            <div>
                {this.state.terminals.map(terminal => (
                    <ul key={terminal._id}>
                        <img src={IconCard} alt={'Icône Carte Bancaire'}/>
                        <Card className='card'>
                            <CardContent className='cardContent'>
                                <Typography className='terminalsName'>
                                    {terminal.bankDetails[0] && terminal.bankDetails[0].name}
                                </Typography>
                                <Typography className='terminalsAddress'>
                                    {terminal.address}
                                </Typography>
                            </CardContent>
                            <CardActions className='cardAction'>
                                <a href={terminal.bankDetails[0] && terminal.bankDetails[0].url} target="_blank">Visit our website.</a>
                            </CardActions>
                        </Card>
                    </ul>
                ))}
            </div>
        );
    }
}

export default List;
