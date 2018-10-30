import React from 'react';
import Link from 'next/link';

export default class extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {data : [] , item : ''};
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange(e){
    //     this.setState({item : e.target.value});
    //     // this.state.data.push(this.state.item);
    //     console.log(this.props.item);

    // }
    // handleSubmit(e){
    //      e.preventDefault();
    //     this.setState({item : ''});
        
    // }
    render(){
        return(
            <main>
                {/*It renders the form to add products in the database*/}
                {/*<Array data = {this.state.data} />*/}
                <form method = 'post' action = '/addProducts' encType='multipart/form-data' onSubmit = {this.handleSubmit}>
                    {/*It takes the Category list of product*/}
                    <input list='category' name = 'category' placeholder = 'Enter Category'  required/>
                    <datalist id='category'>
                        <option value="Phones and Tablets"></option>
                        <option value="fashion"></option>
                        <option value="Beauty and Health"></option>
                        <option value="Toys and Games"></option>
                    </datalist><br/>
                    {/*It takes the product name*/}
                    <input type = 'text' name = 'pname'  placeholder = 'Enter Product Name' required /><br/>
                    {/*It takes brand name */}
                    <input type = 'text' name = 'brand'  placeholder = 'Enter Product Brand' required /><br/>
                    {/*It takes the product price*/}
                    <input type = 'text' name = 'price'  placeholder = 'Enter Product Price' required /><br/>
                    {/*It takes the number of products to add */}
                    <input type = 'number' min = '0' name = 'pnumber' placeholder = 'Enter Number of Products'/><br/>
                    {/*It takes the product Image*/}
                    <input type = 'file' name = 'image' required /><br/>
                    {/*It takes the description for the product*/}
                    <textarea name = 'desc' placeholder = 'Enter Product Description'></textarea><br/>
                    {/*This button adds the product in the database*/}
                    <button type = 'submit' >Add Products</button>
                </form>
                <Link href = '/adminView'><a><button>Go To Main Page</button></a></Link>
                <p>Click here to <Link href = '/logout' ><a>Logout</a></Link></p>
            </main>
        );
    }
}
// class Array extends React.Component{
//          render(){
//         return (
//             <textarea>
//                 {this.props.data.map(element =>(
//                     <p key= 'element.id'>{element.item}</p>
//                 ))}
//             </textarea>
//             );
//         }
//     }