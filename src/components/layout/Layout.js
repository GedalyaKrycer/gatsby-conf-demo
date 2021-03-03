import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby'
import {navBar} from './layout.module.css';

const Layout = ({children, pageTitle}) => {

    const data = useStaticQuery(graphql`
        query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
    `)

    return (
        <main>
            <p>{data.site.siteMetadata.title}</p>
            <nav>
                <ul>
                    <li className={navBar}><Link to="/">Home</Link></li>
                    <li className={navBar}><Link to="/about">About</Link></li>
                    <li className={navBar}><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <title>{pageTitle}</title>
            <h1>
                {pageTitle}
            </h1>

        {children}
        </main>
    );
}


export default Layout;
