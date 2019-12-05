import Flatpickr from 'react-flatpickr';
import React, {Fragment, Component } from 'react';

class Calendar extends Component {
    constructor() {
        super();

        this.state = {
            date: new Date(),
            redDay: '',
        };
    }

    render() {
        const { date } = this.state;
        return (
            <Fragment>
                <Flatpickr
                    options={{minDate: '04-12-2019'} }
                    data-enable-time
                    value={date}
                    onChange={date => { this.setState({date}) }} />

            </Fragment>

        )
    }
}
export default Calendar;

