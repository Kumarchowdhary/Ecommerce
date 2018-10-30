import React from 'react';
import Link from 'next/link';
import Head from './shared/Head';

export default class extends React.Component{
    render(){
        return(
            <main>
                <Head />
                <nav style = {Styles.nav}  className = 'navbar navbar-default' >
                    <div className = 'navbar-header' >
                        <a className = 'navbar-commerse' href = '#' >
                            <img src = '../static/images/logo.png' alt = 'E-Commerse' height = '100px' />
                        </a>
                    </div>
                    <form className ="navbar-form navbar-left" role = "search" style = {Styles.form}>
                        <div className = "form-group">
                            <input type = "text" className = "form-control" placeholder="Search"/>
                        </div>
                        <button type = "submit" className = "btn btn-default">Search</button>
                    </form>

                    <p style = {Styles.head}><b>{this.props.greetingsUser}</b></p>
                    <h5 style = {Styles.counter}>{this.props.Counter}</h5>
                    
                    <div className = 'collapse navbar-collapse' >
                        <ul className = "nav nav-pills navbar-right" >
                          <li ><Link href = '/main'><a>Home</a></Link></li>
                          <li ><Link href = {this.props.link1}><a>{this.props.name1}</a></Link></li>
                          <li><Link href = {this.props.link2}><a>{this.props.name2}</a></Link></li>
                          <li><Link href = {this.props.link3}><a>{this.props.name3}</a></Link></li>
                        </ul>
                    </div>
                </nav>
            </main>
        );
    }
}
//Custom CSS for Navigation 
var Styles = {
    form :{
        marginTop : "35px",
        align : "center",
        display : 'inline-Block',
    },
    head :{
        marginLeft :'650px',
        fontSize : '150%'
    },
    nav :{
        // marginTop : "30px",
        backgroundColor : 'White',
        position : '',
        
    },
    counter:{
        marginLeft : '1050px',
        marginTop : '0px',
        //float : 'right',
        display : 'inline-Block',
        //border : '1px solid',
        borderRadius : '10%',
        position : 'absolute',
        color : 'white',
        backgroundColor : '#337AB7',
    }
}