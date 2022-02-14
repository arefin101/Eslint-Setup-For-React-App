import React from 'react';
import classes from './Item.module.css';

function Item() {
    return (
        <div>
            <li className={classes.item}>
                <span>Vanilla</span>
                <span className={classes.quantity}>2</span>
                <div className="right">
                    <button type="button" className={[classes.plus, classes.rounded].join(' ')}>
                        +
                    </button>
                    <button type="button" className={[classes.minus, classes.rounded].join(' ')}>
                        -
                    </button>
                </div>
            </li>
        </div>
    );
}

export default Item;
