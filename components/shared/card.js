import React from 'react';
import Head from './Head';
import Link from 'next/link';

export default class extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {addingTocart :[]};
    //     this.addToCart = this.addToCart.bind(this);
    // }
    
    componentDidMount(){

        
    }
    render(){
        return(
            <div className='thumbnail ' key={this.props.Id} style = {Styles.cardBody}>
                <Link href = {'/description?&productName='+ this.props.brand+
                                        '&productCost='+this.props.price+
                                        '&productDesc='+this.props.desc+
                                        '&productImage='+this.props.image
                         }>    
                    <div >
                        <img style = {Styles.image} src= {this.props.image}  />
                        <div className="caption">
                            <div>
                                <h4>Product Name : <span className='label label-primary'>{this.props.name}</span></h4>
                            </div>
                            <div>
                                <h4>Price: <label>${this.props.price}</label></h4>
                            </div>
                            <div>
                                <p>Brand : <span className = 'label label-primary'>{this.props.brand}</span></p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/*<form method = '' action = '' onSubmit={(e)=>{this.addToCart(e)}} >
                    <button type = 'submit' style = {Styles.cartButton} onClick = {this.addToCart}>Add to Cart</button>
                </form>*/}
                
            </div>
           
        )
    }
}
//href = {'/cart?&productName='+ this.props.name+
                                   //     '&productCost='+this.props.price+'&id='+this.props.Id
                                 //}
let Styles = {
    image:{
        height : '150px'
    },
    cardBody:{
        // marginLeft:"50px",
    },
    cartButton : {
        borderRadius : '10px',
        width : '100%'
    },
    
}
