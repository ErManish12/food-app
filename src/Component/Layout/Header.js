import React, { Fragment } from 'react';

import mealsImage from '../assests/meals.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCardButtom from './HeaderCardButtom';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeal</h1>
                <HeaderCardButtom />
            </header>
            <div className={classes['main-image']}>
                <img src={ mealsImage } ></img>
            </div>
        </Fragment>
    );
};

export default Header;
