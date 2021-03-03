import React from 'react';
import { Link } from "gatsby";
import {navBar} from './layout.module.css';

const Layout = ({children, pageTitle}) => {
    return (
        <main>
            <title>{pageTitle}</title>
            <h1>
                {pageTitle}
            </h1>
            <nav>
                <ul>
                    <li className={navBar}><Link to="/">Home</Link></li>
                    <li className={navBar}><Link to="/about">About</Link></li>
                </ul>
            </nav>

        {children}
        </main>
    );
}


export default Layout;
