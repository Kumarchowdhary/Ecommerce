import React from 'react';
import Link from 'next/link';
import Head from './shared/Head';

export default class extends React.Component{
    render(){
        return(
            <main>
                <Head cssLink='../static/index.css'/>
                <header className="col-md-12">
                    <div id="logo" className="col-md-1 col-md-offset-1"></div>
                    <nav id="navbar" className="col-md-7">
                        <ul type="none" id="navList" className="col-md-12">
                            <li>Home<i className="material-icons">keyboard_arrow_down</i></li>
                            <li>About us<i className="material-icons">keyboard_arrow_down</i></li>
                            <li>Contact<i className="material-icons">keyboard_arrow_down</i></li>
                            <li>Support<i className="material-icons">keyboard_arrow_down</i></li>
                            {/*<li>Blogs<i className="material-icons">keyboard_arrow_down</i></li>*/}
                        </ul>
                    </nav>
                    <Link href='/login' ><a><button id="loginBtn" className="col-md-1">Sign In</button></a></Link>
                    <Link href='/adminLogin' ><a><button id="loginBtn" className="col-md-1">Admin</button></a></Link>
                        
                </header>
            </main>
        );
    }
}