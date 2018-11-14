import React from 'react'
import { Item, Header } from 'semantic-ui-react'


class Fecha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '00:00:00',
            amPM: 'am',
            day: '01-01-1990'
        }

        this.getTime = this.getTime.bind(this);

    }

    componentDidMount() {
        var loadInterval = setInterval(
            this.getTime, 1000
        );


    }

    getTime() {
        const
            takeTwelve = n => n > 12 ? n - 12 : n,
            addZero = n => n < 10 ? "0" + n : n;

        setInterval(() => {
            let d, h, m, s, t, amPm, today;

            d = new Date();
            h = addZero(takeTwelve(d.getHours()));
            m = addZero(d.getMinutes());
            s = addZero(d.getSeconds());
            t = `${h}:${m}:${s}`;

            var options = { year: 'numeric', month: 'short', day: 'numeric' };
            amPm = d.getHours() >= 12 ? "pm" : "am";
            today = d.toLocaleDateString('es-CL');
           
            this.setState({
                time: t,
                amPm: amPm,
                day: today
            });

        }, 1000);
    }

    render() {

        return (
            <div className="wrapper_fecha">
                <Header as='h2' className="fecha_h4">
                    <Header.Content className="fecha_header">ACTUALIZACIÓN</Header.Content>
                </Header>
                <div className="wrapper_fecha_content">
                    <div>FECHA: {this.state.day}</div>
                    <div>HORA: {this.state.time} {this.state.amPm}</div>
                    
                </div>
                
               
            </div>
        );
    }
}

export default Fecha;
