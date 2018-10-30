import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import axios from 'axios';
import Head from '../components/shared/Head';
import Sidebar from '../components/shared/side-bar';
import Card from '../components/shared/card';
import Navigation from '../components/navigation';
var counter1 = 0;

export default class extends React.Component{
     constructor(props){
        super(props);
        this.state = {product:[],user:[],addingTocart :[], counter : 0};
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(e){
        const {addingTocart} = this.state;
        //console.log(e.target.id);
        this.state.addingTocart.push(e.target.id);
        //console.log(addingTocart);
        localStorage.setItem('cartProducts',JSON.stringify(addingTocart));
        //console.log(addingTocart);
        counter1++;
        this.setState({counter : counter1});
        console.log(this.state.counter);
    }

    componentDidMount(){
        //This finds the username of logged in User
        axios.get('/getuser').then((response)=>{
            this.setState({user:response.data})
        })
        //It fetches the data from the getdata api
        axios.get('/getdata').then((response)=>{
            this.setState({product:response.data})
        })

        // this.setState({
        //     containerId: ReactDOM.findDOMNode(this).parentNode.getAttribute("id")
        // });console.log(this.state.containerId);
    }

    render(){
        return(
            <main>
                {/*It places the Navigation Bar along with following attributes*/}
                <Head cssLink='../static/index.css'/>
                <header className="col-md-12">
                    <div id="logo" className="col-md-1 col-md-offset-1"></div>
                    <Link href='/main' ><a><button id="loginBtn" className="col-md-1 col-md-offset-1" >Home</button></a></Link>
                    <Link href='/cart' ><a><button id="loginBtn" className="col-md-1" >Cart</button></a></Link>
                    <h5 style = {Styles.counter}>{this.state.Counter}</h5>
                    <Link href='/logout' ><a><button id="loginBtn" className="col-md-1">Logout</button></a></Link>
                        
                </header>
                {/*This places sidebar of Categories*/}
                <Sidebar 
                    name1 = 'Phones and Tablets'
                />
                {/*This renders the products in card Shape*/}
                <div className = 'col-md-10'>
                    <a>
                        {this.state.product.map((element)=>{
                            {/*console.log(Object.keys(this.props.url.query).length);*/}
                            
                            if(Object.keys(this.props.url.query).length===0){
                                return( 
                                <main key = {Math.random()}>
                                    <div className='col-md-4' >
                                        <Card  key = {Math.random()}
                                        Id = {element._id}
                                        image = {element.image}
                                        name = {element.name}
                                        price = {element.price}
                                        brand = {element.brand}
                                        desc = {element.desc}
                                        />
                                        <button  type = 'submit' id={element._id} onClick = {this.addToCart} >Add to Cart</button>
                                    </div>
                                    
                                </main>
                            )
                            }
                            else if(element.category===this.props.url.query.category){
                                 return( 
                                <main key = {Math.random()}>
                                    <div className='col-md-4' >
                                        <Card  key = {Math.random()}
                                        Id = {element._id}
                                        image = {element.image}
                                        name = {element.name}
                                        price = {element.price}
                                        brand = {element.brand}
                                        desc = {element.desc}
                                        />
                                        <button  type = 'submit' id={element._id} onClick = {this.addToCart} >Add to Cart</button>
                                    </div>
                                    
                                </main>
                            )  
                            }
                        })}
                    </a>   
                </div>
            </main>
        );
    }
}

//Custom CSS 
var Styles = {
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