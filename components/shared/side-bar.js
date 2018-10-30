import React from 'react';
import Head from './Head';
import Link from 'next/link';

export default class extends React.Component{
    render(){
        return (
            <main>
                <Head />
                <div style = {styles.sideBar} className='col-md-2 side-bar'>
                    <div className='sidebar-container'>
                        {/* ITEMS OF SIDEBAR */}
                        <a style = {styles.sidebarAnchor}>
                            <div style = {styles.item} className='item'>
                                <h3><i className='' ></i> Categories</h3>
                            </div>
                        </a>
                        <a style = {styles.sidebarAnchor}>
                            <div style = {styles.item} className='item'>
                                <Link href = '/main?category=Phones and Tablets'><h4><i className='' ></i>{this.props.name1}</h4></Link>
                            </div>
                        </a>
                        <a style = {styles.sidebarAnchor}>
                            <div style = {styles.item} className='item'>
                                <Link href = '/main?category=Fashion'><h4><i className='' ></i> Fashion</h4></Link>
                            </div>
                        </a>
                        <a style = {styles.sidebarAnchor}>
                            <div style = {styles.item} className='item'>
                                <Link href = '/main?category=Beauty and Health'><h4><i className='glyphicon ' ></i> Beauty and Health</h4></Link>
                            </div>
                        </a>
                        <a style = {styles.sidebarAnchor}>
                            <div style = {styles.item} className='item'>
                                <Link href = '/main?category=Toys and Games'><h4><i className='' ></i> Toys and Games</h4></Link>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}
var styles = {
    sideBar:{
        color: "white",
	    background_color: "rgba(155, 39, 176, 0.8)",
        minHeight:"650px",
        // color:"#F0C869",
        boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"
    },
    item:{
        paddingBottom:"10px",
        paddingLeft:"5px",
        borderBottom:"1px solid rgba(0,0,0,0.1)"
    },
    sidebarAnchor:{
        cursor: "pointer",
        color: "rgba(155, 39, 176, 0.8)",
	    background_color: "white",
	    transition: "0.5s",
        textDecoration: "none"
    }
}
