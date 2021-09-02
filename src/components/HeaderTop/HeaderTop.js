import React from 'react';
import classes from './HeaderTop.module.css';
import Logo from '../Logo/Logo';
import sun from '../../assets/images/icon-sun.svg';

const HeaderTop = (props) => (
    <div className={classes.header_top} >
        <Logo />
        <img src={sun} alt="sun" />
    </div>
);

export default HeaderTop;
