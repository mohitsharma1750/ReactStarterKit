import React from 'react';
import { Sparklines, SparklinesLine, SparklinesLineReferenceLine } from 'react-sparklines';

export default function(props) {

    return (
        <div>
            <Sparklines height="120" widht="180" data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesLineReferenceLine type = "avg"/>
            </Sparklines>
        </div>

    );


}