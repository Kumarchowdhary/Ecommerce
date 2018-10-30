import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Head from '../components/shared/Head';
import Sidebar from '../components/shared/side-bar';
import Card from '../components/shared/card';
import Navigation from '../components/navigation';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {product:[],user :[]}
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
    }

    render(){
        return(
            <main>
                {/*It places the Navigation Bar along with following attributes*/}
                
                <Head cssLink='../static/index.css'/>
                <header className="col-md-12">
                    <div id="logo" className="col-md-1 col-md-offset-1"></div>
                    <Link href='/adminView' ><a><button id="loginBtn" className="col-md-1 col-md-offset-1" >Home</button></a></Link>
                    <Link href='/addProducts' ><a><button id="loginBtn" className="col-md-1">Add Product</button></a></Link>
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
                                <main key = {Math.random()} style = {Styles.card}>
                                    <div className='col-md-4' >
                                        <Card  key = {Math.random()}
                                        Id = {element._id}
                                        image = {element.image}
                                        name = {element.name}
                                        price = {element.price}
                                        brand = {element.brand}
                                        desc = {element.desc}
                                        />
                                        <Link href = {'/editProduct?id='+element._id} ><a><button>Edit Product</button></a></Link>
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
                                        <Link href = {'/editProduct?id='+element._id} ><a><button>Edit Product</button></a></Link>
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

var Styles = {
    card:{
        border : "2px"
    }
}