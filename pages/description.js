import React from 'react';
import Head from '../components/shared/Head';
import Link from 'next/link';
import Navigation from '../components/navigation';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            prodImage : this.props.url.query.productImage,
            prodName : this.props.url.query.productName
        }
        console.log(this.props.prodImage);
    }
    render(){
        return(
            <main>
                 <Head cssLink='../static/index.css'/>
                <header className="col-md-12">
                    <div id="logo" className="col-md-1 col-md-offset-1"></div>
                    <Link href='/main' ><a><button id="loginBtn" className="col-md-1 col-md-offset-1" >Home</button></a></Link>
                    <Link href='/cart' ><a><button id="loginBtn" className="col-md-1" >Cart</button></a></Link>
                    
                    <Link href='/logout' ><a><button id="loginBtn" className="col-md-1">Logout</button></a></Link>
                        
                </header>


                <div style = {Styles.body} className = 'row'>
                    <div className = 'col-md-4'>
                        <img style = {Styles.image} src= {this.props.url.query.productImage} />
                    </div>
                    <div className = 'col-md-8'>
                        <h1>{this.state.prodName}</h1>
                        <h1> Cost: {'$'+this.props.url.query.productCost}</h1>
                        <p style = {Styles.Desc} >{this.props.url.query.productDesc}</p><br/><br/><br/>
                        <button  type = 'submit' onClick = {this.addToCart} >Add to Cart</button>
                    </div>
                </div>
            </main>
        )
    }
}
//Custom CSS for this component
let Styles = {
    image : {
        height : '100%',
        width : '100%',
       //borderRight:"1px solid rgba(0,0,0,0.1)"
    },
    body:{
        backgroundColor : '#F8F8F8',
        marginTop : '0px',
        
    },
    Desc :{
        boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
    }

    
}