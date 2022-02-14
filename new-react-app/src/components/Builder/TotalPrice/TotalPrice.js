import React from 'react';
import classes from './TotalPrice.modul.css';

function TotalPrice() {
    return (
        <div>
            <div className={classes.total}>
                <div>Total Price</div>
                <div>3000.00 Tk</div>
            </div>
        </div>
    );
}

export default TotalPrice;
