import React from 'react';
import classes from './Header.module.css';
import bgMobile from '../../../assets/images/bg-mobile-dark.jpg';

const style = {
    backgroundImage:`url('${bgMobile}')`
}

const Header = (props) => (
    <div style={style} className={classes.header}>
        {props.children}
    </div>
);

export default Header;
